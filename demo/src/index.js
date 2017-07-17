import React, { Component } from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { MyLinkLayout, Content, Loading } from '../../src'

import '../../pancake/css/pancake.min.css'

const navItems = [
  { label: 'Portal 1', path: '/portal1' },
  { label: 'Portal 2', path: '/portal2' },
  { label: 'Error', path: '/error1' },
]

const AppLayout = (user) => (props) => <MyLinkLayout {...props} navItems={navItems} user={user} />

function Home1({ }) {
  return <Content title="Home" messages={[{ text: 'hi', type: "info" }]}>home!</Content>
}

function Portal1({ }) {
  return <Content title="Portal 1" messages={{ text: 'i error', type: "error" }}>portal 1!</Content>
}

function Portal2({ }) {
  return <Content title="Portal 2">portal 2!</Content>
}

function Error1({ }) {
  let messages = { text: 'Page not found', type: 'error' }
  return <Loading messages={messages} />
}

render(<div id="root" className="uikit-body">
  <Router history={hashHistory}>
    <Route path="/" component={AppLayout({ username: 'smith, joe' })}>
      <IndexRoute component={Home1} />
      <Route path="/portal1" component={Portal1} />
      <Route path="/portal2" component={Portal2} />
      <Route path="/error1" component={Error1} />
    </Route>
  </Router>
</div>, document.querySelector('#demo'))
