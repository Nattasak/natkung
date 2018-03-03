import { HashRouter, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import About from './routes/About'
import App from './App'
import Home from './routes/Home'
import Project from './routes/Project'
import registerServiceWorker from './registerServiceWorker'

const Routes = () => (
  <HashRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/project" component={Project} />
    </App>
  </HashRouter>
)

ReactDOM.render(<Routes />, document.getElementById('root'))
registerServiceWorker()
