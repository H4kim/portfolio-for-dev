import React from 'react'
import { iconsComponents } from '../../Utils/Constants';
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

    const renderIcon = () => {
        const MyComponent = iconsComponents[props.icon]
        if(!MyComponent) return null
        return <MyComponent height={15} width={15} fill={props.iconColor || 'transparent'} />
    }


    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href={props.link} style={Styles.iconContainer} className={classes.iconContainer}>
           {renderIcon()}
        </a>
    )
}


/*


*/