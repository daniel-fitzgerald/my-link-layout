import React from 'react'

import { Link } from 'react-router'

import Messages from '../Messages'

import './loading.css'

function Loading({ children, messages }) {
    return <div>
        <div className="main">
            <Messages messages={messages} />
            <p>Loading...</p>
            {children}
        </div>
    </div>
}

export default Loading