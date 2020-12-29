import classes from './EducationComponent.module.css'
import React from 'react'

const EducationComponent = (props) => {
    const styles = {

    }
    return (
        <li className={classes.container}>
            <div className={classes.courseDesContainer}>
                <p className={classes.courseName}>Web Development, Online Training, <span style={{fontWeight:400,fontSize:'0.9rem'}}>Udemy</span></p>
            </div>
            <p style={{fontWeight:400,fontSize:'0.9rem'}}>July 2019</p>
        </li>
    )
}

export default EducationComponent
