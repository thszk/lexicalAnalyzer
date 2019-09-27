const fs = require('fs')
const path = require('path')
const language = require('./language')

// method to read source code file
const readCode = () => fs.readFileSync(path.resolve('./assets/input.txt'), 'utf-8')

// method to remove comments | add spaces before and after a alphanum character | creates an array from cleaned code
const codeCleaner = (code) => {
  return code
            .replace(/{(.|\n)*?}|{(.|\n)*/g, ' ') // comments
            .replace(/(:=|<=|>=|<>|[^\w\s])/g, ' $1 ') // symbols
            .split(/\s+/) // spaces
}

// find in language grammar
const findInGrammar = (target, index) => {
  let match = language.keywords.find(element => element.name === target)

  if (!match)
    match = language.symbols.find(element => element.name === target)

  if (!match)
    match = language.others.find(element => target.match(element.name))

  return match ? { name: target, value: match.value, index } : undefined
}

// tokenization
const find = (code) => {
  let tokens = [], newToken
  code.forEach((element, index) => {
    newToken = findInGrammar(element, index)
    if (newToken) tokens.push(newToken)
  })
  return tokens
}

const lexicalAnalyzer = () => find(codeCleaner(readCode()))

console.table(lexicalAnalyzer())
