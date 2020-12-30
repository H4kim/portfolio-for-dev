import classes from './ExperienceComponent.module.css'
import React from 'react'

const ExperienceComponent = (props) => {
    return (
        <div className={classes.container}>
            <p className={classes.EducationTitle}>Senior Full Stack Developer, <a href='https://quizzito.com/main/language/change/english' className={classes.companyLink}>Quizzito</a>.</p>
            <p className={classes.date}>Mar, 2020 - Dec 2020</p>
            <p className={classes.summary} >I am a Senior Full-Stack Front-End developer to the RBC Omni (Online Business Banking). My daily tasks are about reviewing my colleague’s code, make technical recommendations, and contribute to building scalable and re-usable modules by collaborating with other production teams, including the design system/platform team. The code I write is targetted to run with Angular 8 in TypeScript 3.4.</p>
            <ul className={classes.tasksList}>
                <li className={classes.task}>Revise and make migration strategies for my Squad’s Angular monorepo to use Jest and ESLint 7 along with Prettier with automated LintStaged commit hooks.</li>
                <li className={classes.task}>Make module stubs for the Backend chapter to write Express.js middleware in isolation instead of from a monolith</li>
                <li className={classes.task}>Teach how to write and publish small packages and how to publish on Nexus</li>
                <li className={classes.task}>views. Allowing to slim down many views that would also need hidden form that were re-implemented numerous times.</li>
            </ul>
        </div>
    )
}

export default ExperienceComponent
