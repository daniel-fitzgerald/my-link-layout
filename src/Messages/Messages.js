import React from 'react'

function getClassName(type) {
    switch (type) {
        case 'info':
            return 'uikit-page-alerts'
        case 'warning':
            return 'uikit-page-alerts uikit-page-alerts--warning'
        case 'success':
            return 'uikit-page-alerts uikit-page-alerts--success'
        case 'error':
            return 'uikit-page-alerts uikit-page-alerts--error'
        default:
            return 'uikit-page-alerts uikit-page-alerts--error'
    }
}

function Message({ message: { text, type } }) {
    if (text) {
        return <div className={getClassName(type)} role="alert">{text}</div>
    } else {
        return null
    }
}

function Messages({ messages }) {
    if (messages) {
        if (messages.constructor === Array) {
            return <span>{messages.map((message, index) => <Message key={index} message={message} />)}</span>
        } else {
            return <Message message={messages} />
        }
    } else {
        return null
    }
}

export default Messages