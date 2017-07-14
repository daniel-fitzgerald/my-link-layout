import React from 'react'

import { Link } from 'react-router'

import Messages from '../Messages'

import './content.css'

function Title({ title }) {
    return <div className="page-title">
        <h2>{title}</h2>
    </div>
}

function getLinks(breadcrumbs) {
    if (breadcrumbs.links && breadcrumbs.links.length > 0) {
        return breadcrumbs.links.map((crumb, index) => <li key={index}><Link to={crumb.to}>{crumb.label}</Link></li>)
    } else {
        return null
    }
}

function Breadcrumbs({ breadcrumbs }) {
    if (breadcrumbs) {
        return <nav className="uikit-breadcrumbs">
            <ul className="uikit-link-list uikit-link-list--inline">
                <li><Link to="/">Home</Link></li>
                {getLinks(breadcrumbs)}
                <li>{breadcrumbs.currentLabel}</li>
            </ul>
        </nav>
    } else {
        return null
    }
}

function Content({ children, breadcrumbs, title, messages }) {
    return <div>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="main">
            <Title title={title} />
            <Messages messages={messages} />
            {children}
        </div>
    </div>
}

export default Content