import React from 'react'

import { Link } from 'react-router'

import Messages from '../Messages'

import './loading.css'

function Content({ messages }) {
    if (messages) {
        return <Messages messages={messages} />
    } else {
        return <p>Loading...</p>
    }
}

function Loading({ children, messages }) {
    return <div>
        <div className="main">
            <Content messages={messages} />
            {children}
        </div>
    </div>
}

export default Loading