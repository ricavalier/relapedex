import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListaUsuarios from '../components/ListaUsuarios';

class Users extends Component {
  render() {
    return (
      <main>
        <Header />
        <section className="Users">
          <h2>Lista de Usuários</h2>

              <ListaUsuarios/>
          {/* <p>Loren Ipsum....</p>
          <p>Loren Ipsum....</p>
          <p>Loren Ipsum....</p>
          <p>Loren Ipsum....</p>
          <p>Loren Ipsum....</p> */}
          
        </section>
        <Footer />
      </main>
    );
  }
}

export default Users;
