import classes from './Header.module.css'
import Globe from './icons/proba'

function Header() {
    return (
        <div className={classes.back}>
            <div className={classes.grid}>
                <div className={classes.cetvorka}>
                    <h4>HYDRTE SRBIJA</h4>
                </div>
                <div className={classes.dvojka}>
                    <div className={classes.ikonica}>
                        <a href='/poruci'><Globe /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;