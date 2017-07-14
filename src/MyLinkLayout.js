import React from 'react'

import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

import './style.css'

export default function MyLinkLayout({ routes, children, user = { username: 'anonymous' }, navItems, title }) {
    return <div>
        <Header username={user.username} title={title} />
        <Nav navItems={navItems} routes={routes} />
        <div className="main-wrapper">
            <div className="main-block">
                {children}
            </div>
        </div>
        <Footer />
    </div>
}