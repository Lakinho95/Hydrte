import React, { useRef } from 'react'
import classes from './Forma.module.css'
import emailjs from '@emailjs/browser';


export default function Form() {
    const form = useRef()
    const [formObject,setForm] = React.useState({
        firstName:'',
        email:'',
        komentar:''
    })

    const [uspehSlanje,changeUspehSlanje] = React.useState(false)
    const [error, changeError] = React.useState(false)

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

        console.log(formObject)
        
        emailjs.sendForm('service_4yh3ni2', 'template_9t6jmgh', form.current, '-YOozWMuCtpRVgPW9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        changeUspehSlanje(true)

        function delay() {
            
            setTimeout(() => {
                setForm(prevState => {
                    return {
                        ...prevState,
                        firstName:"",
                        email:"",
                        komentar:"",
                    }
                }) 
                changeUspehSlanje(false)
            }, 3000)
        }

        delay()
    }   

    return(
        <div className={classes.okvir}>
        <form ref={form} onSubmit={handleSubmit}>
            <div className={classes.tacka}></div>
            <label>Ime i prezime</label>
            <input
                type="text"
                required
                placeholder='Ime i prezime'
                onChange={handleChange}
                name='firstName'
                value={formObject.firstName}
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
            <label>Poruka</label>
            <textarea 
                placeholder="unesite tekst"
                required
                onChange={handleChange}
                name='komentar'
                value={formObject.komentar}
                rows={5}
            />
            {
                uspehSlanje && <div className={classes.uspeh}><p>Uspešno poslato</p></div>
            }
            <div className={classes.dugme}>
                <button>POŠALJI</button>
            </div>
        </form>
        </div>
    )
}