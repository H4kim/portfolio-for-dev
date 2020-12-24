import React from 'react'
import LocationIcon from '../../assets/icons/LocationIcon';
import classes from './SocialIcon.module.css';


export const SocialIcon = (props) => {
    const Styles = {
        iconContainer : {
            'width': '2rem',
            'height': '2rem',
            'marginRight': '1.5rem',
            'borderRadius':' 50%',
            'backgroundColor': props.backColor,
            'boxShadow': '0px 2px 5px rgba(0, 0, 0, 0.29)',
            'transition': 'ease all 0.3s',
            'cursor': 'pointer',
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
        }
    }


    return (
        <a href='#' style={Styles.iconContainer} className={classes.iconContainer}>
           <LocationIcon height={13} width={13} fill={props.iconColor || 'black'}/>
        </a>
    )
}

