 import React from 'react'
 import { BrowserRouter, Route, Switch } from 'react-router-dom'  
import Login from './pages/login/Login'
 import Layout from './pages/layout/Layout'
 import Main from './pages/main/Main'
 import NewBadge from './pages/NewBadge/NewBadge'


function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/new" component={NewBadge}></Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
