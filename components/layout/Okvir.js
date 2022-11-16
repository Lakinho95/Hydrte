import classes from './Okvir.module.css'
import { Fragment } from 'react'
function Okvir(props) {
    return (
        <Fragment className={classes.okvir}>
            {props.children}
        </Fragment>
    )
}

export default Okvir;