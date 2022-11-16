import classes from './Pitanja.module.css'
import Upitnik from '../icons/upitnik';
import Dole from '../icons/dole'
import Gore from '../icons/gore'

import { useState } from 'react'

function Pitanja() {
    const [prva,promeniprvu] = useState(true)
    const [druga, promeniDrugu] = useState(false)
    const [treca, promeniTrecu] = useState(false)

    function handleClickprva() {
        console.log('dasda')
        promeniprvu(!prva)
    }

    function handleClickdruga() {
        console.log('dasda')
        promeniDrugu(!druga)
    }

    function handleClicktreca() {
        console.log('dasda')
        promeniTrecu(!treca)
    }


    return (
        <div className={classes.pitanja}>
            <p className={classes.prvo}>Sve što treba da znate pre nego što naručite.</p>
            <h3>Najčešće postavljena pitanja</h3>
            <ul>
                <li>
                    <div className={classes.grid} onClick={handleClickprva}>
                    <div >
                    <p className={classes.text}>Od kog materija je napravljena flašica?</p>
                    </div>
                    { prva ?
                    <div className={classes.dole}>
                        <Gore />
                    </div>
                    : 
                    <div className={classes.dole}>
                    <Dole />
                </  div>
                    }
                    </div>
                    <p className={prva ? classes.odgovor : classes.sakrij}>Hydrate flašica je napravljena od izdržive BPA plastike. Traka je napravljen od 100% silikona. Pakovanje je takođe zasnovano na očuvanju životne sredine i može se reciklirati.</p>
                </li>
                <li>
                    <div className={classes.grid} onClick={handleClickdruga}>
                    <div >
                    <p className={classes.text}>Da li je naša flašica eco- friendly?</p>
                    </div>
                    { druga ?
                    <div className={classes.dole}>
                        <Gore />
                    </div>
                    : 
                    <div className={classes.dole}>
                    <Dole />
                </  div>
                    }
                    </div>
                    <p className={druga ? classes.odgovor : classes.sakrij}>Hydrate flašica je napravljena od izdržive BPA plastike. Traka je napravljen od 100% silikona. Pakovanje je takođe zasnovano na očuvanju životne sredine i može se reciklirati.</p>
                </li>
                <li>
                    <div className={classes.grid} onClick={handleClicktreca}>
                    <div >
                    <p className={classes.text}>Koliko se čeka na isporuku?</p>
                    </div>
                    { treca ?
                    <div className={classes.dole}>
                        <Gore />
                    </div>
                    : 
                    <div className={classes.dole}>
                    <Dole />
                </  div>
                    }
                    </div>
                    <p className={treca ? classes.odgovor : classes.sakrij}>Hydrate flašica je napravljena od izdržive BPA plastike. Traka je napravljen od 100% silikona. Pakovanje je takođe zasnovano na očuvanju životne sredine i može se reciklirati.</p>
                </li>
                
            </ul>
        </div>
    )
}

export default Pitanja;

