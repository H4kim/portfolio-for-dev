import classes from './Experience.module.scss'
import React from 'react'
import Title from '../../Components/Title/Title'
import ExperienceComponent from '../../Components/ExperienceComponent/ExperienceComponent'
import { experienceList } from '../../Utils/Constants'

const Experience = () => {
    const renderExperiences = () => {
        return experienceList.map(cur => {
            return <ExperienceComponent key={cur.id} data={cur}/>
        })
    }
    return (
        <div className={classes.container}>
            <Title bold='Work'>Experience</Title>
            {renderExperiences()}
        </div>
    )
}

export default Experience
