import React from 'react';

import axios from 'axios';

export default class ListaUsuarios extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <table className="lista-usuarios">
        <thead>
          <tr width="100%">
            <th width="15%">ID</th>
            <th width="30%">Nome</th>
            <th width="30%">E-mail</th>
            <th width="25%">Opções</th>
          </tr>
        </thead>
        <tbody>
          { this.state.persons.map(person => <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.email}</td>
            <td>
              <button className="fas fa-user"></button>
              <button className="fas fa-edit"></button>
              <button className="fas fa-trash"></button>
            </td>
          </tr>)}
        </tbody>
      </table>
    )
  }
}
