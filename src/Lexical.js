class LexicalAnalyzer {

  constructor(inputCode, languageTokens) {
    this.inputCode = this.prepareInputToErrorTrack(inputCode)
    this.codeToAnalyze = this.prepareInputToAnalyze(inputCode)
    this.languageTokens = languageTokens
    this.analyzedTokens = []
  }

  getNextToken() {
    let targetToken, foundToken, error = ''

    if (!this.validateHasCodeRemain()) {
      return 'EOF'
    }

    targetToken = this.codeToAnalyze.shift()
    foundToken = this.findToken(targetToken)
    this.analyzedTokens.push(foundToken)
    // if (newToken.value === 'erro_lexico')
    // error = `${error}\n${accuseError(newToken)}\n`

    return { token: foundToken, error }
  }

  // find in language grammar
  findToken(target) {
    let match = this.languageTokens.keywords.find(element => element.name === target)
    
    if (!match)
      match = this.languageTokens.symbols.find(element => element.name === target)
    
    if (!match)
      match = this.languageTokens.others.find(element => target.match(element.name))

    return { name: target, value: match.value }
  }
    
  // accuse lexical error and his position on code
  accuseError(error) {
    // let line = originalCode.findIndex(element => element.includes(error.name))
    // let column = originalCode[line].indexOf(error.name)
    // // create error message
    // let err = `\x1b[41m${error.value}\x1b[0m em linha \x1b[41m${line+1}\x1b[0m.`
    // let pos = `Não esperado \x1b[33m${error.name}\x1b[0m na coluna \x1b[33m${column+1}\x1b[0m`
    // let lin = `[${line+1}]      ${originalCode[line]}`
    
    // return `${err} ${pos}\n\n${lin}`
  }

  prepareInputToAnalyze(input) {
    input = input.replace(/{(.|\n)*?}|{(.|\n)*/g, ' ') // comments
    input = input.replace(/(:=|<=|>=|<>|(\d+(\.\d+)+)|[^\w\s])/g, ' $1 ') // symbols
    input = input.split(/\s+/) // spaces
    input = input.filter(element => element) // empty strings
    return input
  }

  prepareInputToErrorTrack(input) {
    return input.replace(/{(.|\n)*?}|{(.|\n)*/g, ' ').split(/\r\n|\r|\n/) // line breaks
  }

  validateHasCodeRemain() {
    return !!this.codeToAnalyze.length
  }
}

module.exports = LexicalAnalyzer
