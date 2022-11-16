import classes from './Okvir.module.css'

function Okvir(props) {
    return (
        <div className={classes.okvir}>
            {props.children}
        </div>
    )
}

export default Okvir;