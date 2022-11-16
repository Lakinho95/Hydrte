import classes from './Velicine.module.css'
import slika from './velicine.webp'
import Image from 'next/image'

function Velicine() {
    return(
        <div className={classes.velicina}>
            <div className={classes.text}>
                <h1>TRAJNE PLASTIČNE BOCE BEZ BPA</h1>
                <p>Naše flašice, napravljene su od izdržljive plastike, ekološki je prihvatljiva, dok ambalažu i kompletno pakovanje je moguće je 100% reciklirati kompletno pakovanje.</p>
                <ul className={classes.text}>
                    <li> Baby - S - 350ml</li>
                    <li> Black - L - 480ml</li>                 
                </ul>
                <button><a href="/poruci">DODAJ U KORPU</a></button>
            </div>
            <div>
                <Image src={slika} />
            </div>
        </div>
    )
}

export default Velicine;