import classes from './Box.module.css'
import Facebook from '../icons/facebook'
import Instagram from '../icons/instagram'
import Tictoc from '../icons/tictoc'
import Globe from '../icons/proba'

function Box() {
    return (
        <div className={classes.box}>
            <div className={classes.kec}>
            <p>e-mail: hydrtesrbija@gmail.com</p>
            <p>kontakt: +381 64 9029 909</p>
            </div>
            <div className={classes.dvojka}></div>
            <div className={classes.cetvorka}>
                <div className={classes.instagram}>
                    <a href="https://www.instagram.com/hydrte.rs/?hl=en"><Facebook /></a>
                </div>
                <div className={classes.instagram}>
                    <a href="https://www.instagram.com/hydrte.rs/?hl=en"><Instagram /></a>
                </div>
                <div className={classes.tictoc}>
                    <a href='https://www.tiktok.com/@hydrte.rs?lang=en'><Tictoc /></a>
                </div>
            </div>
            <div className={classes.trojka}>
                <a href='/pitanje'>POSTAVITE PITANJE</a>
            </div>
        </div>
    )
}

export default Box;


//mail || telefon                  o nama, fafab,faint,tictoc