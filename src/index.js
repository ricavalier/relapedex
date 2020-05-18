// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// //import { BrowserRouter, Switch, Route } from 'react-router-dom';


// // ReactDOM.render(
// //     <BrowserRouter>
// //         <Switch>
// //             <Route path="/" exact={true} component={App} />
// //             <Route path="/ocorrencias" component={Ocorrencias} />
// //             <Route path='*' component={404} />
// //         </Switch>
// //     </ BrowserRouter>
// //     , document.getElementById('root'));
// //     serviceWorker.unregister();


// ReactDOM.render(<App/>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Inicio from './pages/Inicio';
import Users from './pages/Users';
import Ocorrencias from './pages/Ocorrencias';
import Page404 from './pages/Page404';
//import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
ReactDOM.render(
      <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={Inicio} />
              <Route path="/inicio" exact={true} component={Inicio} />
              <Route path="/users" exact={true} component={Users} />
              <Route path="/ocorrencias" component={Ocorrencias} />
              <Route path='*' component={Page404} />
          </Switch>
      </ BrowserRouter>
    , document.getElementById('root'));