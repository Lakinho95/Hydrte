import classes from './Glavno.module.css'


function Glavno(props) {
    return (
        <div className={classes.okvir}>
            {props.children}
        </div>
    )
}

export default Glavno;