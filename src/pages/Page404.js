import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Page404 extends Component {
  render() {
    return (
      <main>
        <Header />
        <section className="Page404">
          <h2>Erro 404</h2>
          <h3>Página não encontrada:</h3>
          <p>&nbsp;</p>
          <p>Por favor, verifique se a página em que está tentando acessar existe, caso contrário entre em contato com o seu administrador sistema para verificar o que está acontecendo.</p>
          <p>&nbsp;</p>
          <p>Atenciosamente</p>
          <p>Departamento de Deenvolvimento</p>
       </section>
       <Footer />
      </main>
    );
  }
}

export default Page404;
