const { readFileSync } = require('fs')
const { red, yellow } = require('chalk')

const DICT_FILEPATH = __dirname + '/../kg/zvychainyi.txt'

const main = async () => {
  const texts = readTexts()
  const textsWithErrors = texts.reduce(checkForLatinLetters, [])
  printTextsWithErrors('There are errors in such texts:', textsWithErrors)
  console.log(`Checked ${yellow(texts.length)} texts, found errors in ${red(textsWithErrors.length)} of them.`)

  if (textsWithErrors.length > 0) {
    process.exit(1)
  }
}

const printTextsWithErrors = (sectionName, texts) => {
  if (texts.length === 0) {
    return
  }

  console.error(red(sectionName) + '\n')
  texts.forEach(text => {
    console.error(text)
    console.error('\n')
  })
}

const checkForLatinLetters = (acc, text) => {
  if (!text.match(/[a-z]/gi)) {
    return acc
  }

  const textWithHighlightedErrors = text.replace(/(['a-z])/gi, red('$&'))
  acc.push(textWithHighlightedErrors)

  return acc
}

const readTexts = () => {
  const dictionaryText = readFileSync(DICT_FILEPATH, 'utf-8')
  return dictionaryText.split('\n\n')
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
