import classes from './Box.module.css'
import Facebook from '../icons/facebook'
import Instagram from '../icons/instagram'
import Tictoc from '../icons/tictoc'


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
                    <Instagram />
                </div>
                <div className={classes.tictoc}>
                    <Tictoc />
                </div>
                <div className={classes.facebook}>
                    <Facebook />
                </div>
            </div>
            <div className={classes.trojka}>
                <a href='/pitanje'>POSTAVI PITANJE</a>
            </div>
        </div>
    )
}

export default Box;


//mail || telefon                  o nama, fafab,faint,tictoc