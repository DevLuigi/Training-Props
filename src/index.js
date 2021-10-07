import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'

import Home from './home'
import Detalhes from './detalheProduto'
import Carrinho from './carrinho'
import Contador from './comunicacaoComps'
import Escolha from './escolha'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={Escolha}/>
              <Route path="/home" component={Home}/>
              <Route path="/detalhes" component={Detalhes}/>
              <Route path="/carrinho" component={Carrinho}/>
              <Route path="/contador" component={Contador}/>
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


