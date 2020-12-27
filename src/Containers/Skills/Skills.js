import classes from './Skills.module.css'
import React from 'react'

const styles = {
    color : {
        'display': 'block',
        'width': '0.6rem',
        'height': '0.6rem',
        'border-radius': '50%',
        'margin-top': '3px',
    }
}

const Skill = (props) => {
    return (
        <div className={classes.container}>
            <p className={classes.title}> Programming Languages <span style={{color:'#67db3d'}}>/</span> Technologies  </p> 
            <div className={classes.listContainer}>
                <ul className={classes.list}>
                    <li>Javascript</li>
                    <li>React js</li>
                    <li>Node js </li> 
                    <li>Javascript</li>
                    <li>React js</li>
                    <li>Node js </li> 
                </ul>
            </div>
            <div className={classes.colorsListContainer} >
                    <ul className={classes.colorsList} >
                        <li className={classes.understanding}>Confident <span style={{...styles.color, ...{'background-color':'#0BE881'}}}></span></li>
                        <li className={classes.understanding}>Comfortable <span style={{...styles.color, ...{'background-color':'#1890FF'}}}></span></li>
                        <li className={classes.understanding}>Knowledgeable <span style={{...styles.color, ...{'background-color':'#FFC312'}}}></span></li>
                        <li className={classes.understanding}>Beginner <span style={{...styles.color, ...{'background-color':'#FF4D4F'}}}></span></li>
                    </ul>
                </div>
        </div>
    )
}

export default Skill
