import classes from './Skills.module.css'
import React from 'react'
import { skillsList } from '../../Utils/Constants';

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

const Skill = (props) => {

    const renderSkills = () => {
        return skillsList.map(cur => {
            return  <li key={cur.id}>{cur.name} <span style={{...styles.colorLanguages, ...{'background-color':`${cur.understandingColor}`}}}></span></li>
        })
    }
    return (
        <div className={classes.container}>
            <p className={classes.title}> Programming Languages <span style={{color:'#67db3d'}}>/</span> Technologies  </p> 
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
    )
}

export default Skill
