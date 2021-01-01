import React from 'react'
import ProjectSummary from '../../Components/ProjectSummary/ProjectSummary'
import Title from '../../Components/Title/Title'
import classes from './Projects.module.scss'
import { projectsList } from '../../Utils/Constants';

export const Projects = () => {

    const renderExistingProjects = () => {
       return projectsList.filter(cur => cur.current === false).map(cur => {
           return <ProjectSummary key={cur.id} title={cur.title} github={cur.github} link={cur.link} text={cur.text} />
       })
    }

    const renderCurrentProjects = () => {
        return projectsList.filter(cur => cur.current === true).map(cur => {
            return <ProjectSummary key={cur.id} title={cur.title} github={cur.github} link={cur.link} text={cur.text} />
        })
    }

    return (
        <div className={classes.container}>
            <Title bold='Existing'>projects</Title>
                {renderExistingProjects()}
            <Title bold='Current'>projects</Title>
                {renderCurrentProjects()}
        </div>
    )
}
