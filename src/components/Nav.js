import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        {/* <a href="inicio">Início</a>
        <a href="relatorios">Relatórios</a>
        <a href="ocorrencias">Ocorrências</a>
        <a href="disparo">Disparo de Relatório</a>
        <a href="users">Usuários</a> */}
        <Link to="/inicio">Início</Link>
        <Link to="/relatorios">Relatórios</Link>
        <Link to="/ocorrencias">Ocorrências</Link>
        <Link to="/disparo">Disparo de Relatórios</Link>
        <Link to="/users">Usuários</Link>

      </nav>
    );
  }
}

export default Nav;
