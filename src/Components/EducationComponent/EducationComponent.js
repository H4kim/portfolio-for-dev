import classes from './EducationComponent.module.css'
import React from 'react'
import TagComponent from '../TagComponent/TagComponent'

const EducationComponent = (props) => {
    const renderTags = () => {
        return props.data.technologies.map((cur,i) =>  <TagComponent key={i} text={cur}/>)
    }
    return (
        <li className={classes.container}>
            <div className={classes.courseDesContainer}>
                <p className={classes.courseName}>{props.data.courseName}, {props.data.type}, <span style={{fontWeight:300,fontSize:'0.8rem'}}>{props.data.courseProvider}</span></p>
                {renderTags()}
            </div>
            <p style={{fontWeight:400,fontSize:'0.9rem', color:'gray'}}> {props.data.date}</p>
        </li>
    )
}

export default EducationComponent
