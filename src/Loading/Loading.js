import React from 'react'

import { Link } from 'react-router'

import Messages from '../Messages'

import Content from '../Content'

import './loading.css'

// function Content({ messages }) {
//     if (messages) {
//         return <Messages messages={messages} />
//     } else {
//         return <p>Loading...</p>
//     }
// }

function Loading({ children, messages }) {
    let title = 'Loading'
    if (messages) {
        title = ''
    }
    return <Content messages={messages} title={title} breadcrumbs={{currentLabel: title}}>
        {children}
    </Content>
}

export default Loading