import React from 'react'

import { Link } from 'react-router'

import './header.css'

function Header({ username, title }) {
  return <header className="header">
    <div className="top-links-wrapper">
      <div className="top-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">{username}</Link></li>
        </ul>
      </div>
    </div>
    <div className="logo">
      <h1>{title}</h1>
    </div>
  </header>
}

export default Header