import classes from './SwitchModeBtn.module.scss'
import React, { useContext } from 'react'
import MoonIcon from '../../assets/icons/MoonIcon'
import SunIcon from '../../assets/icons/SunIcon'
import  {ThemeContext} from './../../Context/ThemeContext'

const SwitchModeBtn = (props) => {
    const ContextTheme = useContext(ThemeContext)
    const styles= {
        sunIcon : {
            width:'20',
            height:'20',
            transform: ContextTheme.theme === 'light' ? 'translate(0,0)' : 'translate(0,100)',
        },
        moonIcon: {
            width:'20',
            height:'20',
            transform: ContextTheme.theme === 'dark' ? 'translate(0,0)' : 'translate(0,100)',

        }
    }
    return (
        <div className={classes.container} onClick={props.onClick}>
            <MoonIcon {...styles.moonIcon} />
            <SunIcon {...styles.sunIcon} />
        </div>
    )
}

export default SwitchModeBtn
