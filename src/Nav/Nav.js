import React from 'react'

import NavItem from './NavItem'

import './nav.css'

function getNavItems(navItems, routes) {
	return navItems.map((navItem, index) => <NavItem key={index} label={navItem.label} path={navItem.path} routes={routes} />)
}

function Nav({ navItems, routes }) {
	return <nav>
		<div id="top-nav">
			<div className="navigation">
				<ul className="root">
					{getNavItems(navItems, routes)}
				</ul>
			</div>
		</div>
	</nav>
}

export default Nav