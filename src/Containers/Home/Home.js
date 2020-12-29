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
                    <div style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
                        <LocationIcon height={14} width={14} fill='#EE4047' />
                        <p className={classes.locationInfo}>Montreal, Quebec, Canada</p>
                    </div>
                </div>
                <p className={classes.headerTxt}>Taking ideas <span className={classes.headerSpan}>Giving them life</span></p>
            </header>
            <div className={classes.infos}>
                <p>
                    Hi 👋 My name is Hakim Bencella, and welcome to my personal website. I'm currently looking for new opportunity,
                    Feel free to look around, or just say hi if you want to reach out.
                </p>
            </div>
            <footer className={classes.footerContainer}>
                <div style={{display:'flex' , justifyContent:'center' , marginBottom:'1rem'}}>
                {renderIcons()}
               </div>
               
                <p style={{fontSize:'.6rem', textAlign:'center'}}>If you don't trust links (you should never 😉), my email is ozil.hakim@gmail.com</p>
            </footer>

        </div>
    )
}

export default Home
