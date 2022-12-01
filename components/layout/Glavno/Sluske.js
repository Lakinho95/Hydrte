import classes from './Sluske.module.css'
import Image from 'next/image'
import sluske from './sluske.jpg'

export default function Sluske() {
    return (
        <div className={classes.okvir}>
            <Image src={sluske} />
        </div>
    )
}