const fs = require('fs')
const path = require('path')

// read source code
file = fs.readFileSync(path.resolve('./assets/input.txt'), 'utf-8')
// read language notation
language = fs.readFileSync(path.resolve('./assets/language.txt'), 'utf-8')

// clean the code
const codeCleaner = code => code.split(/\s/)

// remove comments
const removeComments = code => {
  let filtered = code.filter(element => !element.startsWith('{')) // open comment
  filtered = filtered.filter(element => !element.endsWith('}')) // close comment
  return filtered
}

const find = (code, lang) => {
  file.forEach(element => {
    
  })
}

const main = () => {
  file = codeCleaner(file)
  file = removeComments(file)
  console.log(file)
}

main()
