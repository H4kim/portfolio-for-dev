import classes from './Skills.module.css'
import React from 'react'
import { skillsList } from '../../Utils/Constants';
import EducationComponent from '../../Components/EducationComponent/EducationComponent';

const styles = {
    colorUnderstanding : {
        'display': 'block',
        'width': '0.4rem',
        'height': '0.4rem',
        'border-radius': '50%',
        'margin-top': '3px',
    },
    colorLanguages : {
        'display': 'block',
        'width': '0.6rem',
        'height': '0.6rem',
        'border-radius': '50%',
        'margin-left':'10px'
    }
}

const Skill = () => {

    const renderSkills = () => {
        return skillsList.map(cur => {
            return  <li key={cur.id}>{cur.name} <span style={{...styles.colorLanguages, ...{'background-color':`${cur.understandingColor}`}}}></span></li>
        })
    }
    return (
        <div className={classes.container}>
            <div className={classes.skillsContainer}>
                <p className={classes.title}> Skills </p> 
                <div className={classes.listContainer}>
                    <ul className={classes.list}>
                    {renderSkills()}
                    </ul>
                </div>
                <div className={classes.colorsListContainer} >
                        <ul className={classes.colorsList} >
                            <li className={classes.understanding}>Confident <span style={{...styles.colorUnderstanding, ...{'background-color':'#0BE881'}}}></span></li>
                            <li className={classes.understanding}>Comfortable <span style={{...styles.colorUnderstanding, ...{'background-color':'#1890FF'}}}></span></li>
                            <li className={classes.understanding}>Knowledgeable <span style={{...styles.colorUnderstanding, ...{'background-color':'#FFC312'}}}></span></li>
                            <li className={classes.understanding}>Beginner <span style={{...styles.colorUnderstanding, ...{'background-color':'#FF4D4F'}}}></span></li>
                        </ul>
                </div>
            </div>
            <div className={classes.educationContainer}>
                <p className={classes.title}> Education </p> 
                <ul className={classes.educationListContainer}>
                    <EducationComponent />
                    <EducationComponent />
                    <EducationComponent />
                </ul>
            </div>
        </div>
    )
}

export default Skill
