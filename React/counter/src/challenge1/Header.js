import React from 'react'
import { UserContextConsumer } from './userContext'

export default function Header() {
  return (
    <UserContextConsumer>
        {context => (
            <h1>Welcome, {context.username}!</h1>
        )}
    </UserContextConsumer>
  )
}
