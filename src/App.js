import { AnimatedSwitch, spring } from 'react-router-transition'
import { BackTop } from 'antd'
import { Route, Redirect } from 'react-router-dom'
import cxs from 'cxs'
import React, { Component } from 'react'

import About from './routes/About'
import Contact from './routes/Contact'
import Home from './routes/Home'
import Intro from './routes/Intro'
import Layout from './components/Layout'
import NotFound from './routes/NotFound'
import Playground from './routes/Playground'
import Project from './routes/Project'
import Work from './routes/Work'

// import './App.css'

const routeWrapper = cxs({
  position: 'relative',
  ' > div': {
    position: 'absolute',
    width: '100%',
  },
})

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24,
  })
}

const pageTransitions = {
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: glide(-100),
  },
  atActive: {
    offset: glide(0),
  },
}

export default class App extends Component {
  render() {
    return (
      <Layout>
        <AnimatedSwitch
          className={routeWrapper}
          {...pageTransitions}
          mapStyles={styles => ({
            transform: `translateX(${styles.offset}%)`,
          })}
        >
          <Route exact path="/" component={Intro} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/playground" component={Playground} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
        </AnimatedSwitch>
        <BackTop />
      </Layout>
    )
  }
}
