import classes from './Skills.module.scss'
import React from 'react'
import { skillsList , educationList} from '../../Utils/Constants';
import EducationComponent from '../../Components/EducationComponent/EducationComponent';
import Title from '../../Components/Title/Title';

const styles = {
    colorUnderstanding : {
        'display': 'block',
        'width': '0.4rem',
        'height': '0.4rem',
        'borderRadius': '50%',
        'marginTop': '3px',
    },
    colorLanguages : {
        'display': 'block',
        'width': '0.6rem',
        'height': '0.6rem',
        'borderRadius': '50%',
        'marginLeft':'10px'
    }
}

const Skill = () => {

    const renderSkills = () => {
        return skillsList.map(cur => {
            return  <li key={cur.id} className={classes.skill}>{cur.name} <span style={{...styles.colorLanguages, ...{'backgroundColor':`${cur.understandingColor}`}}}></span></li>
        })
    }

    const renderEducations = () => {
        return educationList.map(cur => {
            return  <EducationComponent key={cur.id} data={cur}   />
        })
    }
    return (
        <div className={classes.container}>
            <div className={classes.educationContainer}>
                <Title bold='Education'></Title>
                <ul className={classes.educationListContainer}>
                    {renderEducations()}
                </ul>
            </div>
            <div className={classes.skillsContainer}>
            <Title bold='Skills'></Title>
                <div className={classes.listContainer}>
                    <ul className={classes.list}>
                    {renderSkills()}
                    </ul>
                </div>
                <div className={classes.colorsListContainer} >
                        <ul className={classes.colorsList} >
                            <li className={classes.understanding}>Confident <span style={{...styles.colorUnderstanding, ...{'backgroundColor':'#0BE881'}}}></span></li>
                            <li className={classes.understanding}>Comfortable <span style={{...styles.colorUnderstanding, ...{'backgroundColor':'#1890FF'}}}></span></li>
                            <li className={classes.understanding}>Knowledgeable <span style={{...styles.colorUnderstanding, ...{'backgroundColor':'#FFC312'}}}></span></li>
                            <li className={classes.understanding}>Beginner <span style={{...styles.colorUnderstanding, ...{'backgroundColor':'#FF4D4F'}}}></span></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Skill
