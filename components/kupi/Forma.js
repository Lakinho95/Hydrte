import React, { useRef } from 'react'
import classes from './Forma.module.css'
import emailjs from '@emailjs/browser';
import react from 'react';

export default function Form() {
    const form = useRef()
    const [formObject,setForm] = React.useState({
        porudzbina:1,
        firstName:'',
        lastName:'',
        adresa:'',
        email:'',
        phone:'',
        grad: '',
    })
    const [uspehSlanje,changeUspehSlanje] = React.useState(false)
    const [error, changeError] = React.useState(false)
    
    const [babyRose, changeBabyRose] = React.useState(0)
    const [black, changeBlack] = React.useState(0)
    const [roseCena,changeRoseCena] = React.useState(0)
    const [blackCena,changeBlackCena] = React.useState(0)


    function handlePlusaCrno() {
        changeBlack(prevState => prevState + 1)
        changeBlackCena(prevState => prevState + 2500)
    }

    function handleMinusaCrno() {
        if (black > 0) {
            changeBlack(prevState => prevState - 1)
            changeBlackCena(prevState => prevState - 2500)
        }
    }

    function handleBroj(e) {
        promeniPorudzbinu(prevState => prevState + 1)
    }

    

    function handlePlusaBaby() {
        changeBabyRose(prevState => prevState + 1)
        changeRoseCena(prevState => prevState + 2300)
    }

    function handleMinusaBaby() {
        if (babyRose > 0) {
            changeBabyRose(prevState => prevState - 1)
            changeRoseCena(prevState => prevState - 2300)
        }
    }

    function handleChange(e) {
        const {name, value, checked,type} = e.target
        console.log(formObject.porudzbina)
        setForm(prevState => {
            return {
                ...prevState,
                [name]:type === "checkbox"? checked:value,
            }
        })
    }

    function promeniBroj() {
        console.log(formObject.porudzbina)
        const stariBroj = formObject.porudzbina + 1
        setForm(prevState => {
            return {
                ...prevState,
                'porudzbina': stariBroj
            }
        })
        console.log(formObject.porudzbina)
    }


    

    function handleSubmit(e) {
        //http://localhost:3000/?firstName=Lazar&lastName=Kanazir&email=lazarkanazir995%40gmail.com&comment=Nista+bitno&isFriendly=on&workStatus=Full-time&pet=hamster
        e.preventDefault()
        promeniBroj()
        console.log(formObject.porudzbina)
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
                        adresa:"",
                        email:"",
                        phone:"",
                        grad:"",
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
        console.log(formObject.porudzbina)
        console.log(formObject.email)
        emailjs.sendForm('service_s4102c3', 'template_95eoxsn', form.current, 'xsOZdHXux8zfUoh0I')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        
    }

    return(
        <div className={classes.okvir}>
        <form ref={form} onSubmit={handleSubmit}>
            <div className={classes.tacka}></div>
            <label>Ime i prezime</label>
            <input
                style={{display: 'none'}}
                type="number"
                value={formObject.porudzbina}
                name="porudzbina"
            />
            <input
                type="text"
                required
                placeholder='Ime i prezime'
                onChange={handleChange}
                name='firstName'
                value={formObject.firstName}
            />
            {/* <label>Unesi svoje prezime</label> */}
            <input
                style={{display: 'none'}}
                type="text"
                placeholder='Prezime'
                onChange={handleChange}
                name='lastName'
                value={formObject.lastName}
            />
            <label>Kontakt</label>
            <input
                type="number"
                required
                placeholder='Telefon'
                onChange={handleChange}
                name='phone'
                value={formObject.phone}
            />
            <label>Ulica i broj</label>
            <input
                type="text"
                required
                placeholder='Adresa i broj'
                onChange={handleChange}
                name='adresa'
                value={formObject.adresa}
            />
            <label>Grad i poštanski broj</label>
            <input
                type="text"
                required
                placeholder='Grad i poštanski broj'
                onChange={handleChange}
                name='grad'
                value={formObject.grad}
            />
            <label>Email</label>
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
                <div className={classes.plus} onClick={handlePlusaCrno}><p>+</p></div>
                </div>
                <div>
                <div className={classes.minus} onClick={handleMinusaCrno}><p>-</p></div>
                </div>
                <div></div>
                <div name="black" className={classes.colicina}>{black}</div>
                <div className={classes.cena}>Cena: {blackCena} RSD</div>
            </div>
            <div  className={classes.velicine}>
                <p>Baby - S - 350ml</p>
                <div>
                <div className={classes.plus} onClick={handlePlusaBaby}><p>+</p></div>
                </div>
                <div>
                <div className={classes.minus} onClick={handleMinusaBaby}><p>-</p></div>
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
                <button>PORUČI</button>
            </div>
            <div className={classes.sakrij}>
            <input  name="babyRose" type="number" value={babyRose} />
            <input  name="black" type="number" value={black} />
            </div>
        </form>
        </div>
    )
}