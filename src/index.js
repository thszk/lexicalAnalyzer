const language = require('./language')
const FileUtils = require('./FileUtils')
const LexicalAnalyzer = require('./Lexical')

const fileUtils = new FileUtils()
const sourceCode = fileUtils.readFile('./assets/input.txt')
const lexicalAnalyzer = new LexicalAnalyzer(sourceCode, language)

let eof = false
while(!eof) {
  let token = lexicalAnalyzer.getNextToken()
  if (token === 'EOF') {
    eof = true
  } else {
    console.log(token)
  }
}

// master function
// const lexicalAnalyzer = () => {
//   const {tokens, error} = find(codeCleaner(readCode()))
//   console.table(tokens)
//   console.log(error)
// }

// lexicalAnalyzer()