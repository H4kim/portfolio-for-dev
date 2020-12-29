import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
function Navbar() {
    return (
        <div className={classes.container}>
            <ul>
                <li><NavLink className={classes.navLink} to='/' exact activeClassName={classes.activeLink}>Me</NavLink></li>
                <li><NavLink className={classes.navLink} to='/projects' activeClassName={classes.activeLink}>Projects</NavLink></li>
                <li><NavLink className={classes.navLink} to='/Skills' activeClassName={classes.activeLink}>Skills/Education</NavLink></li>
                <li><NavLink className={classes.navLink} to='/experience' activeClassName={classes.activeLink}>Work Experience</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
