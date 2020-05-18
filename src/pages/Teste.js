import React from 'react';
import contentful from 'contentful';
import chalk from 'chalk';
//import axios from 'axios';

const SPACE_ID = 'qo5ng1bn2yu5'
const ACCESS_TOKEN = 'bc8f4ea8586ee41123f8fb05235aea0457f013de66dc7876a8b3f21e373f6bed'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "qo5ng1bn2yu5",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "bc8f4ea8586ee41123f8fb05235aea0457f013de66dc7876a8b3f21e373f6bed"
})


export default class ListaUsuarios extends React.Component {
  state = {
    persons: []
  }

   displayEntries (contentTypes) {
    console.log(chalk.green('Fetching and displaying Entries ...'))
  
    return Promise.all(contentTypes.map((contentType) => {
      return fetchEntriesForContentType(contentType)
      .then((entries) => {
        console.log(`\These are the first 100 Entries for Content Type ${chalk.cyan(contentType.name)}:\n`)
  
        // Display a table with Entry information
        const table = new Table({
          head: ['Id', 'Title']
        })
        entries.forEach((entry) => {
          table.push([entry.sys.id, entry.fields[contentType.displayField] || '[empty]'])
        })
        console.log(table.toString())
      })
  }))}

 displayContentTypes() {
    console.log(chalk.green('Fetching and displaying Content Types ...'))
  
    return fetchContentTypes()
    .then((contentTypes) => {
      // Display a table with Content Type information
      const table = new Table({
        head: ['Id', 'Title', 'Fields']
      })
      contentTypes.forEach((contentType) => {
        const fieldNames = contentType.fields
          .map((field) => field.name)
          .sort()
        table.push([contentType.sys.id, contentType.name, fieldNames.join(', ')])
      })
      console.log(table.toString())
  
      return contentTypes
    })
  }


  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })   
    }

    displayContentTypes()
    .then(displayEntries)
    .then(() => {
      console.log('Want to go further? Feel free to check out this guide:')
      console.log(chalk.cyan('https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/\n'))
    })
    .catch((error) => {
      console.log(chalk.red('\nError occurred:'))
      if (error.stack) {
        console.error(error.stack)
        return
      }
      console.error(error)
    })

    
  }

  render() {
    return (
      <table class="lista-usuarios">
        <thead>
          <tr width="100%">
            <th width="15%">ID</th>
            <th width="30%">Nome</th>
            <th width="30%">E-mail</th>
            <th width="25%">Opções</th>
          </tr>
        </thead>
        <tbody>
          { this.state.persons.map(person => <tr><td>{person.id}</td><td>{person.name}</td><td>{person.email}</td><td><button class="fas fa-user"></button> <button class="fas fa-edit"></button> <button class="fas fa-trash"></button></td></tr>)}
        </tbody>
      </table>
    )
  }
}
