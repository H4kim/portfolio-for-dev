import React from 'react'
import classes from './Home.module.css'
import photo from '../../assets/hakim.jpeg'; 
import LocationIcon from '../../assets/icons/LocationIcon';
import { SocialIcon } from '../../Components/SocialIcon/SocialIcon';
import { socialLinks } from '../../Utils/Constants';

function Home() {

    const renderIcons = () => {
        return socialLinks.map(cur => {
           return <SocialIcon key={cur.id} icon={cur.icon} backColor={cur.backColor} iconColor={cur.iconColor} link={cur.link} />
        })
    }
    return (
        <div className={classes.container}>
            <header className={classes.headerContainer}>
                <div className={classes.infoConatiner}>
                    <img src={photo} alt='thumb' className={classes.photo}/>
                    <p style={{fontWeight:500}}>Hakim Bencella</p>
                    <div style={{display:'flex', alignItems:'center'}}>
                    <LocationIcon height={14} width={14} fill='#EE4047' />
                    <p style={{fontWeight:300, marginLeft:'3px'}}>Montreal, Quebec, Canada</p>
                    </div>
                </div>
                <p className={classes.headerTxt}>Taking ideas <span className={classes.headerSpan}>Giving them life</span></p>
            </header>
            <div style={{marginBottom:'3rem'}}>
                <p>Check out my latest projects to see what I'm tending to.</p>
            </div>
            <footer className={classes.footerContainer}>
                {renderIcons()}
            </footer>

        </div>
    )
}

export default Home
