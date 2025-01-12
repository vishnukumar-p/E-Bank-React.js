import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'

import Home from './components/Home'

import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/ebank/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)
export default App
