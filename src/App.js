import React, { Component } from 'react';
//import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Users from './pages/Users';
import Ocorrencias from './pages/Ocorrencias';
import Page404 from './pages/Page404';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
//import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
          <BrowserRouter>
              <Switch>
                  <Route path="/" exact={true} component={Inicio} />
                  <Route path="/inicio" exact={true} component={Inicio} />
                  <Route path="/users" exact={true} component={Users} />
                  <Route path="/ocorrencias" component={Ocorrencias} />
                  <Route path='*' component={Page404} />
              </Switch>
          </ BrowserRouter>
        <Footer />
      </main>
    );
  }
}

export default App;
