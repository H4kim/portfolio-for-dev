import classes from './EducationComponent.module.scss'
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
                <div className={classes.tagsContainer}>
                {renderTags()}
                </div>
            </div>
            <p className={classes.date}> {props.data.date}</p>
        </li>
    )
}

export default EducationComponent
