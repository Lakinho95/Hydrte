import classes from './Torba.module.css'
import Image from 'next/image'
import slika from './torba.jpg'

function Torba() {
    return (
        <div className={classes.torba}>
            <div className={classes.text}>
                <h1>HYDRTE SE SAVRŠENO UKLAPA UZ SVAKU VAŠU TORBU</h1>
                <p>Flašica je napravljena tako da bude višestruko praktična. Idealno se uklapa uz laptop torbu, ručnu torbu i rančeve, a da pritom odiše elegancijom i prati moderan dizajn.</p>
                <button><a href='/poruci'>DODAJ U KORPU</a></button>
            </div>
            <div className={classes.slika}>
                <Image src={slika} />
            </div>
        </div>
    )
}

export default Torba;