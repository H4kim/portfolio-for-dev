import React from 'react'
import classes from './Home.module.css'
import photo from '../../assets/hakim.jpeg'; 
import LocationIcon from '../../assets/icons/LocationIcon';
import { SocialIcon } from '../../Components/SocialIcon/SocialIcon';

function Home() {
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
                <SocialIcon backColor='#67DB3D' />
                <SocialIcon backColor='#FFD112' />
                <SocialIcon backColor='#EEEEEE' />
                <SocialIcon backColor='#212121' iconColor='white' />
            </footer>

        </div>
    )
}

export default Home