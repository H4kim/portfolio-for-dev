import React from 'react'
import { iconsComponents } from '../../Utils/Constants';
import classes from './SocialIcon.module.scss';

export const SocialIcon = (props) => {
    const Styles = {
        iconContainer : {
            'width': '2rem',
            'height': '2rem',
            'marginRight': '1rem',
            'borderRadius':' 50%',
            'backgroundColor': props.backColor,
            'boxShadow': '0px 2px 5px rgba(0, 0, 0, 0.29)',
            'transition': 'ease all 0.1s',
            'cursor': 'pointer',
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
        }
    }

    const renderIcon = () => {
        const Icon = iconsComponents[props.icon]
        if(!Icon) return null
        return <Icon height={18} width={18} fill={props.iconColor || 'none'} />
    }

    return (
        <a href={props.link} target="_blank" rel="noreferrer" style={Styles.iconContainer} className={classes.iconContainer}>
           {renderIcon()}
        </a>
    )
}