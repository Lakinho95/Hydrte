import React, { useRef } from 'react'
import classes from './Forma.module.css'
import emailjs from '@emailjs/browser';

export default function Form() {
    const form = useRef()
    const [formObject,setForm] = React.useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:''
    })
    const [uspehSlanje,changeUspehSlanje] = React.useState(false)
    const [error, changeError] = React.useState(false)

    const [babyRose, changeBabyRose] = React.useState(0)
    const [black, changeBlack] = React.useState(0)
    const [roseCena,changeRoseCena] = React.useState(0)
    const [blackCena,changeBlackCena] = React.useState(0)


    function handlePlusaCrno() {
        changeBlack(prevState => prevState + 1)
        changeBlackCena(prevState => prevState + 1400)
    }

    function handleMinusaCrno() {
        if (black > 0) {
            changeBlack(prevState => prevState - 1)
            changeBlackCena(prevState => prevState - 1400)
        }
    }

    function handlePlusaBaby() {
        changeBabyRose(prevState => prevState + 1)
        changeRoseCena(prevState => prevState + 900)
    }

    function handleMinusaBaby() {
        if (babyRose > 0) {
            changeBabyRose(prevState => prevState - 1)
            changeRoseCena(prevState => prevState - 900)
        }
    }

    function handleChange(e) {
        const {name, value, checked,type} = e.target
        setForm(prevState => {
            return {
                ...prevState,
                [name]:type === "checkbox"? checked:value
            }
        })
    }

    function handleSubmit(e) {
        //http://localhost:3000/?firstName=Lazar&lastName=Kanazir&email=lazarkanazir995%40gmail.com&comment=Nista+bitno&isFriendly=on&workStatus=Full-time&pet=hamster
        e.preventDefault()

        console.log(formObject,babyRose,black,roseCena,blackCena)

        if (black > 0 || babyRose > 0) {
            emailjs.sendForm('service_4yh3ni2', 'template_99o6cvf', form.current, '-YOozWMuCtpRVgPW9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        changeUspehSlanje(true)
            
        function delay() {
            
            setTimeout(() => {
                setForm(prevState => {
                    changeBabyRose(0)
                    changeBlack(0)
                    changeRoseCena(0)
                    changeBlackCena(0)
                    return {
                        ...prevState,
                        firstName:"",
                        lastName:"",
                        email:"",
                        phone:"",
                    }
                }) 
                changeUspehSlanje(false)
            }, 3000)
        }

        delay()
        } else {
            changeError(true)
            setTimeout(() => {
                changeError(false)
            }, 3000);
        }

        

        
    }

    return(
        <div className={classes.okvir}>
        <form ref={form} onSubmit={handleSubmit}>
            <div className={classes.tacka}></div>
            <label>Unesi svoje ime</label>
            <input
                type="text"
                required
                placeholder='Ime'
                onChange={handleChange}
                name='firstName'
                value={formObject.firstName}
            />
            <label>Unesi svoje prezime</label>
            <input
                type="text"
                required
                placeholder='Prezime'
                onChange={handleChange}
                name='lastName'
                value={formObject.lastName}
            />
            <label>Unesi svoj broj telefona</label>
            <input
                type="number"
                required
                placeholder='Telefon'
                onChange={handleChange}
                name='phone'
                value={formObject.phone}
            />
            <label>Unesi svoj email</label>
            <input
                type="email"
                required
                placeholder='Email'
                onChange={handleChange}
                name='email'
                value={formObject.email}
            />
            <div className={classes.proizvodi}>
            <div  className={classes.velicine1}>
                <p>Black - L - 480ml</p>
                <div>
                <div className={classes.plus} onClick={handlePlusaCrno}>+</div>
                </div>
                <div>
                <div className={classes.minus} onClick={handleMinusaCrno}>-</div>
                </div>
                <div></div>
                <div name="black" className={classes.colicina}>{black}</div>
                <div className={classes.cena}>Cena: {blackCena} RSD</div>
            </div>
            <div  className={classes.velicine}>
                <p>Baby - S - 350ml</p>
                <div>
                <div className={classes.plus} onClick={handlePlusaBaby}>+</div>
                </div>
                <div>
                <div className={classes.minus} onClick={handleMinusaBaby}>-</div>
                </div>
                <div></div>
                <div className={classes.colicina}>{babyRose}</div>
                <div className={classes.cena}>Cena: {roseCena} RSD</div>
            </div>
            </div>
            {
                uspehSlanje && <div className={classes.uspeh}><p>Uspešno naručeno</p></div>
            }
            {
                error && <div className={classes.greska}><p>Minimum 1 artikal je potrebno dodati u korpu</p></div>
            }
            <div className={classes.dugme}>
                <button>PORUCI</button>
            </div>
            <div className={classes.sakrij}>
            <input  name="babyRose" type="number" value={babyRose} />
            <input  name="black" type="number" value={black} />
            </div>
        </form>
        </div>
    )
}