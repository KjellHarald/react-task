import React from 'react'
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header>
            <h1>Hello World</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/fakeproject">FakeProject</Link>
        </header>
    )
}

export default Header
