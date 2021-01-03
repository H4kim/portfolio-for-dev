import classes from './Footer.module.scss'
import React from 'react'
//please dont remove or update this component 
const Footer = () => {
    return (
        <div className={classes.container}>
            <p>© Copyright 2021 <a href={'https://h4kim.me'}>Hakim Bencella</a></p>
        </div>
    )
}

export default Footer
