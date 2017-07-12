import React from 'react'

import './footer.css'

function Footer() {
  return <footer>
    <div className="footer-wrapper">
      <div className="footer">
        <p className="depart-name">Department of Agriculture and Water Resources</p>
        <p className="depart-url">
          <a href="http://agriculture.gov.au">agriculture.gov.au</a>
        </p>
      </div>
    </div>
    <div className="clearfix"></div>
  </footer>
}

export default Footer