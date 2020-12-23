import React from 'react'
import classes from './Navbar.module.css'
function Navbar() {
    return (
        <div className={classes.container}>
            <ul>
                <li><a className={classes.navLink} href='/Me'>Me</a></li>
                <li><a className={classes.navLink} href='Projects'>Projects</a></li>
            </ul>
        </div>
    )
}

export default Navbar
