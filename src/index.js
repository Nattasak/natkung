import { HashRouter, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Home from './routes/Home'
import Profile from './routes/Profile'
import Project from './routes/Project'
import registerServiceWorker from './registerServiceWorker'

const Routes = () => (
  <HashRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/project" component={Project} />
    </App>
  </HashRouter>
)

ReactDOM.render(<Routes />, document.getElementById('root'))
registerServiceWorker()
