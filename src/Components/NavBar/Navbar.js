import React from 'react'
import classes from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'
import  {ThemeContext} from './../../Context/ThemeContext'
import { useContext } from 'react';

function Navbar() {
    const ContextTheme = useContext(ThemeContext)
    return (
        <div className={`${classes.container} ${ContextTheme.theme === 'light' ? classes.light : classes.dark}`}>
            <ul>
                <li><NavLink className={classes.navLink} to='/' exact activeClassName={classes.activeLink}>Me</NavLink></li>
                <li><NavLink className={classes.navLink} to='/projects' activeClassName={classes.activeLink}>Projects</NavLink></li>
                <li><NavLink className={classes.navLink} to='/experience' activeClassName={classes.activeLink}>Experience</NavLink></li>
                <li><NavLink className={classes.navLink} to='/Skills' activeClassName={classes.activeLink}>Skills</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar

//TODO 
/* 
- Add education to the skills page
- add work experience (Quizzito and bugs founds) 
*/