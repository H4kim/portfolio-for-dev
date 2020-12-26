import React from 'react'
import ProjectSummary from '../../Components/ProjectSummary/ProjectSummary'
import Title from '../../Components/Title/Title'
import classes from './Projects.module.css'


export const Projects = () => {
    return (
        <div className={classes.container}>
            <Title bold='Existing'>projects</Title>
                <ProjectSummary />
                <ProjectSummary />

            <Title bold='Current'>projects</Title>
                <ProjectSummary />
        </div>
    )
}
