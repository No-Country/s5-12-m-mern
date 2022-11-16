import React from 'react';
import styles from '../app/styles/forms.module.css';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {

    const router = useRouter()

    let handleSubmit = (e) =>{
        e.preventDefault();

        let emailValue= e.target.inputEmail.value;
        let passwordValue = e.target.inputPassword.value;

        let validateEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


        if(emailValue !== '' && !validateEmail.test(emailValue)){
            alert('El mail es invalido');
        }

        else if(passwordValue.length < 6){
            alert('La contraseña debe contener al menos seis caracteres')
        }

        else{
            console.log(`${emailValue} registrado`)
            
            const newUser={ 
                email:emailValue,
                password:passwordValue
            }
            localStorage.setItem('User', JSON.stringify(newUser));
            
            router.push('/');
        }
        
    }
    return (
        <div>
            <h1 className='bg-black'>Registrate</h1>

            <form onSubmit={handleSubmit} className={styles.form}>
                <label>Mail:</label><br/>
                <input type='email' name='inputEmail' required='required'/><br/>
                <label>Contraseña:</label><br/>
                <input type='password' name='inputPassword' required='required'/><br/>

                <div  className={styles.btnDiv}>
                    <button className='bg-black'>Registrarse</button><br/>
                </div>
                
                <div className={styles.btnDiv}>
                    <button className={styles.googleSignUp}> <FcGoogle/> Registrarse con Google </button>
                </div>
                
            </form>
        </div>
  )
}

export default Signup;
