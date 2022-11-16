import classes from './Pozadina.module.css'
import slika from './pozadina.webp'
import Image from 'next/image'


function Pozadina() {
    return (
        <div>
        <div className={classes.slika}>
            <div className={classes.holder}></div>
            <div className={classes.holder1}></div>
             <div className={classes.okvir}>
                <h2>SPREMAN DA PORUČIŠ SVOJU FLAŠICU</h2>
                <p>Klikni na link i otpočni sa porudžbinom</p>
                <button><a href="/poruci">KORPA</a></button>
             </div>
        </div>
        <div className={classes.okvir1}>
                <h2>SPREMAN DA PORUČIŠ SVOJU FLAŠICU</h2>
                <p>Klikni na link i otpočni sa porudžbinom</p>
                <button><a href="/poruci">KORPA</a></button>
        </div>
        </div>
    )
}

export default Pozadina;