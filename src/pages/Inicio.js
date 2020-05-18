import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Inicio extends Component {
  render() {
    return (
      <main>
        <Header />
        <section className="Inicio">
          <h2>Seja bem-vindo!</h2>    
          <p>Loren Ipsum....</p>
          <p>Loren Ipsum....</p>
          <p>Loren Ipsum....</p>
          <p>Loren Ipsum....</p>
          <p>Loren Ipsum....</p>
          
        </section>
        <Footer />
      </main>
    );
  }
}

export default Inicio;
