import classes from './Velicine.module.css'
import slika from './velicine.webp'
import Image from 'next/image'
import roza from './roza.png'
import crna from './crna.png'


function Velicine() {
    return(
        <div className={classes.velicina}>
            <div className={classes.text}>
                <h1>IZRAĐENE OD KVALITETNOG MATERIJALA ZA VIŠEKRATNU UPOTREBU</h1>
                <p>Naše flašice su 100% bez BPA, što bi pri odabiru flašice za vodu trebalo da bude presudan faktor. Sa druge strane, boca za višekratnu upotrebu mora biti što je moguće lakša, kako nam ne bi otežavala svakodnevno funkcionisanje. Da, baš smo o svemu vodili računa. </p>
                <ul className={classes.text}>
                    <li> Baby - S - 350ml</li>
                    <li> Black - L - 480ml</li>                 
                </ul>
                <button><a href="/poruci">DODAJ U KORPU</a></button>
            </div>
            <div className={classes.slike}>
                <Image src={roza} />
                <Image src={crna} />
            </div>
        </div>
    )
}

export default Velicine;