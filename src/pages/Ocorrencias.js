import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Ocorrencias extends Component {
  render() {
    return (
      <main>
        <Header />
        <section className="Ocorrencias">
          <h2>Ocorrências</h2>
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

export default Ocorrencias;
