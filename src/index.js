import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import About from './routes/About'
import App from './App'
import Home from './routes/Home'
import Project from './routes/Project'
import registerServiceWorker from './registerServiceWorker'

const Routes = () => (
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/project" component={Project} />
    </App>
  </BrowserRouter>
)

ReactDOM.render(<Routes />, document.getElementById('root'))
registerServiceWorker()
