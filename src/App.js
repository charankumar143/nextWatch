import {Route, Switch} from 'react-router-dom'

import './App.css'

import Login from './components/Login'

import Home from './components/Home'

import Gaming from './components/Gaming'

import Trending from './components/Trending'

import VideoItemDetails from './components/VideoItemDetails'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/gaming" component={Gaming} />
      <Route exact path="/trending" component={Trending} />
      <Route exact path="/videos/:id" component={VideoItemDetails} />
    </Switch>
  </>
)

export default App
