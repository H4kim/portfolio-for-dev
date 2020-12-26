import classes from './ProjectSummary.module.css'
import React from 'react'

const  ProjectSummary = () => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>ZappNode</p>
            <div className={classes.linksContainer}>
                <a href='#' >Github</a>
                <a href='#' >Preview</a>
            </div>
            <p className={classes.summary}>Even the best of us can have a bad day every now and then. The same can be said for websites. An uptime monitoring service can prepare you for these moments by testing if your site, app or server is still up and running. If some of it's features aren't working as intended, or if it goes down entirely, the owner will be notified so that they can swiftly start resolving the issue. ZappNode is one of such uptime monitoring services.</p>
        </div>
    )
}

export default ProjectSummary