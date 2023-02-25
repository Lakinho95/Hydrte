import classes from './Header1.module.css'

function Header1() {
    return (
        <div className={classes.back}>
            <div className={classes.grid}>
                <div className={classes.kec}>
                    <h2><a href='/'>POČETNA</a></h2>
                </div>
                <div className={classes.cetvorka}>
                    <h4>HYDRTE SRBIJA</h4>
                </div>
                    <div>
                    </div>
                </div>
        </div>
    )
}

export default Header1;