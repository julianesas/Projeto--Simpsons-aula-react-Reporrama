import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Menu = () => {
    return (
        <div>
            <ul className="menu">
                <li key='1'>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li key='2'>
                    <Link className="link" to="/simpsons">Simpsons</Link>
                </li>
                <li key='3'>
                    <Link className="link" to="/rickandMorty">RickandMorty</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu
