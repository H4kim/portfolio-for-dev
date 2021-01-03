import classes from './ProjectSummary.module.scss'
import React from 'react'

const  ProjectSummary = (props) => {

    return (
        <div className={classes.container}>
            <p className={classes.title}>{props.title}</p>
            <div className={classes.linksContainer}>
                <a href={props.github} target="_blank" rel="noreferrer" >Github</a>
                <a href={props.link} target="_blank" rel="noreferrer" >Link</a>
            </div>
            <p className={classes.summary}>{props.text}</p>
        </div>
    )
}

export default ProjectSummary