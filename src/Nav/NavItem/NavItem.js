import React from 'react'

import { Link } from 'react-router'

function isSelected(path, routes) {
    return routes.find(element => element.path && element.path.includes(path)) ? 'static selected' : 'static'
}

function NavItem({ label, path, routes }) {
    return <li className={isSelected(path, routes)}>
        <Link to={path} className="static menu-item">{label}</Link>
    </li>
}

export default NavItem