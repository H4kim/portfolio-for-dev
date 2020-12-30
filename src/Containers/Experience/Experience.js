import classes from './Experience.module.css'
import React from 'react'
import Title from '../../Components/Title/Title'
import ExperienceComponent from '../../Components/ExperienceComponent/ExperienceComponent'

const Experience = () => {
    return (
        <div className={classes.container}>
            <Title bold='Work'>Experience</Title>
            <ExperienceComponent />
            <ExperienceComponent />
            <ExperienceComponent />
        </div>
    )
}

export default Experience
