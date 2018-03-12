import { HashRouter, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import About from './routes/About'
import App from './App'
import Home from './routes/Home'
import Intro from './routes/Intro'
import Playground from './routes/Playground'
import Project from './routes/Project'
import registerServiceWorker from './registerServiceWorker'
import Social from './routes/Social';
import Work from './routes/Work';

const Routes = () => (
  <HashRouter>
    <App>
      <Route exact path="/" component={Intro} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/playground" component={Playground} />
      <Route exact path="/social" component={Social} />
      <Route exact path="/work" component={Work} />
    </App>
  </HashRouter>
)

ReactDOM.render(<Routes />, document.getElementById('root'))
registerServiceWorker()
