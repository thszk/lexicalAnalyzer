const fs = require('fs')
const path = require('path')
const language = require('./language')

var originalCode

// method to read source code file
const readCode = () => fs.readFileSync(path.resolve('./assets/input.txt'), 'utf-8')

// method to remove comments | add spaces before and after a alphanum character | creates an array from cleaned code
const codeCleaner = (code) => {
  originalCode = code.split(/\r\n|\r|\n/)
  return code
            .replace(/{(.|\n)*?}|{(.|\n)*/g, ' ') // comments
            .replace(/(:=|<=|>=|<>|(\d+(\.\d+)+)|[^\w\s])/g, ' $1 ') // symbols
            .split(/\s+/) // spaces
  // the second replace function above has the signify
  // :=|<=|>=|<> it's compounds symbols OR
  // (\d+(\.\d+)+) it's float number OR
  // [^\w\s] it's blank spaces
}

// find in language grammar
const findInGrammar = (target, index) => {
  let match = language.keywords.find(element => element.name === target)

  if (!match)
    match = language.symbols.find(element => element.name === target)

  if (!match)
    match = language.others.find(element => target.match(element.name))

  return match ? { name: target, value: match.value } : undefined
}

// tokenization
const find = (code) => {
  let tokens = [], newToken, error = undefined
  code.every((element, index) => {
    newToken = findInGrammar(element, index)
    if (newToken && newToken.value !== "erro_lexico") {
      tokens.push(newToken)
      return true
    } else if (newToken) {
      error = accuseError(newToken)
      return false
    }
  })
  return error ? error : tokens
}

// accuse lexical error and your position on code
const accuseError = (error) => {
  let line = originalCode.findIndex(element => element.includes(error.name))
  let column = originalCode[line].indexOf(error.name)
  // create error message
  let err = `\x1b[41m${error.value}\x1b[0m em linha \x1b[41m${line+1}\x1b[0m.`
  let pos = `Não esperado caractere \x1b[33m${error.name}\x1b[0m na coluna \x1b[33m${column+1}\x1b[0m`
  let lin = `[${line+1}]      ${originalCode[line]}`

  return `${err} ${pos}\n\n${lin}`
}

const lexicalAnalyzer = () => find(codeCleaner(readCode()))

console.table(lexicalAnalyzer())