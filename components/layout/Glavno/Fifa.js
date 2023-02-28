import classes from './Fifa.module.css'
import Image from 'next/image'
import fifa_pic from './fifa.jpeg'

function Fifa() {
    return (
        <div className={classes.fifa}>
            <div className={classes.text}>
                <h3>REDIZAJNIRALI SMO FLAŠICU ZA VODU</h3>
                <p>Sve naše svakodnevne potrebe su ravne, pa zašto da to ne budu i naše flašice za vodu. U tu misiju, krenuli smo pre dve godine i konačno uspeli da kreiramo najelegantniju i najinovativniju flašicu za vodu!</p>
                <button className={classes.button}><a href='/poruci'>DODAJ U KORPU</a></button>
            </div>
            <div className={classes.slika}>
                <Image src={fifa_pic} />
            </div>
            
        </div>
    )
}

export default Fifa;