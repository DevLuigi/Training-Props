import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import Home from './home'
import Detalhes from './detalheProduto'
import Carrinho from './carrinho'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <Route path="/" exact="true" component={Home}/>
              <Route path="/detalhes" component={Detalhes}/>
              <Route path="/carrinho" component={Carrinho}/>
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


