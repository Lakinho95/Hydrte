import classes from './Header1.module.css'

function Header2() {
    return (
        <div className={classes.back}>
            <div className={classes.grid}>
                <div className={classes.kec}>
                    <h2><a href='/'>POČETNA</a></h2>
                </div>
                <div className={classes.cetvorka}>
                    <h4>HYDRTE SRBIJA</h4>
                </div>
                <div className={classes.dvojka}>
                    <h2><a href='/poruci'>KORPA</a></h2>
                </div>
            </div>
        </div>
    )
}

export default Header2;