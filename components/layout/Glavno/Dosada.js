import classes from './Dosada.module.css'

function Dosada() {
    return (
        <div className={classes.dosada}>
            <h2>NAJTANJA FLAŠICA NA SVETU</h2>
            <div className={classes.skrati}>
            <h4>Nakon godinu dana uspešnog poslovanja u zemljama širom sveta, odlučili smo da otpočnemo poslovanje i u našoj zemlji.</h4>
            </div>
            <button><a href='/poruci'>DODAJ U KORPU</a></button>
        </div>
    )
}

export default Dosada;