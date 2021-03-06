'use strict'

/**
 * Broken file need to repair;
 */

const fs = require('fs')

const inquire = require('inquirer')
const chalk = require('chalk')
const figlet = require('figlet')
const appRoot = require('app-root-path')
const findPath = require('get-dir-children-names')

function init () {
  console.log(
    chalk.blue(
      figlet.textSync('Wave theme', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
        kerning: 'fitted'
      })
    )
  )
}

function deleteCLI () {
  const data = []

  const res = findPath(appRoot, 'themes')
  res.forEach((dirs) => {
    const rawData = fs.readFileSync(`${appRoot}/themes/${dirs}/theme.json`)
    const finalData = JSON.parse(rawData)
    data.push(finalData.name)
  })
  inquire.prompt([
    {
      type: 'list',
      message: 'Which theme you want to delete?:',
      choices: data,
      name: 'selected'
    },
    { type: 'confirm', message: 'Delete theme?:', name: 'delete' }
  ]).then(answers => {
    if (fs.existsSync(`${appRoot.path}/themes/${answers.selected}`)) {
      if (answers.delete) {
        fs.rmdir(`${appRoot.path}/themes/${answers.selected}`, { recursive: true }, (err) => {
          if (err) {
            throw err
          }
          console.log(`${answers.selected} is deleted!`)
        })
      } else {
        console.log(chalk.red('Deletion aborted...'))
      }
    }
  })
}

function createCLI () {
  inquire.prompt([
    { type: 'input', message: 'What is the name of your theme?:', name: 'name' },
    {
      type: 'input',
      message: 'Who is the author of this theme?:',
      name: 'author'
    },
    { type: 'confirm', message: 'Create theme?:', name: 'create' }
  ]).then(answers => {
    if (answers.create && answers.name) {
      console.log('Theme *' + answers.name + '* created')
      const path = `${appRoot.path}/themes/${answers.name}`
      fs.mkdirSync(path)
      const obj = {
        name: answers.name,
        author: answers.author,
        main: 'main.css',
        active: false
      }
      fs.writeFileSync(`${path}/theme.json`, JSON.stringify(obj))
      fs.writeFileSync(`${path}/main.css`, '')
    } else if (!answers.create) {
      console.log('You fucked it up')
    }
  })
}

function baseCLI () {
  init()
  inquire.prompt([
    {
      type: 'list',
      message: 'What you want to do?:',
      choices: ['Create theme', 'Delete theme'],
      name: 'main'
    }
  ]).then(answers => {
    if (answers.main === 'Create theme') {
      createCLI()
    } else if (answers.main === 'Delete theme') {
      deleteCLI()
    }
  })
}

module.exports = baseCLI

baseCLI()
