import classes from './Navbar.module.css'
import Box from './Info/Box'
import Header from './Header'

function Navbar() {
    return (
        <div className={classes.lepljivo}>
            <Box />
            <Header />
        </div>
    )
}

export default Navbar;