const fs = require('fs')
const path = require('path')

class FileUtils {
  readFile(pathToRead) {
    const filePath =  path.resolve(pathToRead)
    return fs.readFileSync(filePath, 'utf-8')
  }
}

module.exports = FileUtils
