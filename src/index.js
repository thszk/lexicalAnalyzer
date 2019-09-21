const fs = require('fs')
const path = require('path')

const language = require('./language')

// method to read source code file
const readCode = () => fs.readFileSync(path.resolve('./assets/input.txt'), 'utf-8')

// method to remove comments | add spaces before and after a alphanum character | creates an array from cleaned code
const codeCleaner = (code) => {
  return code
            .replace(/{.*}/g, ' ')
            .replace(/([^a-zA-Z0-9_\s])/g, ' $1 ')
            .split(/\s+/)
}

// find in language grammar
const findInGrammar = (target, index) => {
  let match = language.keywords.find(element => element.name === target)
  
  if (!match)
    match = language.symbols.find(element => element.name === target)
  
  if (!match)
    match = language.others.find(element => target.match(element.name)) // tem que validar se o target é uma das regex contidas em language.others
  
  // console.log(match);
  return match ? { name: target, value: match.value, index } : undefined
}

// tokenization
const find = (code) => {
  let tokens = [], newToken
  code.forEach((element, index) => {
    newToken = findInGrammar(element, index)
    if (newToken) tokens.push(newToken)
  })
  console.table(tokens)
}

const main = () => {
  file = readCode()
  file = codeCleaner(file)
  find(file)
}

main()
