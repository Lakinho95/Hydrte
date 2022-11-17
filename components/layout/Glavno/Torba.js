import classes from './Torba.module.css'
import Image from 'next/image'
import slika from './torba.jpg'

function Torba() {
    return (
        <div className={classes.torba}>
            <div className={classes.text}>
                <h1>HYDRTE SE SAVRŠENO UKLAPA UZ SVAKU TORBU</h1>
                <p>Naša flašica je napravljena tako da bude višestruko praktična. Želeli smo da napravimo flašicu koja odgovara laptop torbi, ručnoj torbi i rančevima, a da pritom odiše elegancijom i prati moderan dizajn.</p>
                <button><a href='/poruci'>DODAJ U KORPU</a></button>
            </div>
            <div className={classes.slika}>
                <Image src={slika} />
            </div>
        </div>
    )
}

export default Torba;