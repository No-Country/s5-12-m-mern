"use client";

import React from 'react';
import styles from './Forms.module.css';

const WorkerForm = () => {
    let handleSubmitWorkerForm = (e) =>{
        e.prebetDefault();
        let nameWorkerValue = e.target.nameInput.value;
        let emailWorkerValue = e.target.emailInput.value;
        let locationWorkerValue = e.target.locationInput.value;
        let priceValue = e.target.priceInput.value;
        let phoneWorkerValue = e.target.phoneInput.value
        let descriptionWorkerValue = e.target.descriptionInput.value;

        const workerRegistered = {
            name: nameWorkerValue,
            email: emailWorkerValue,
            location: locationWorkerValue,
            price: priceValue,
            phone: phoneWorkerValue,
            description: descriptionWorkerValue,
        }
    }
    return (
        <div>
            <form  className={styles.form} onSubmit={handleSubmitWorkerForm}>
                <label>Nombre:</label><br/>
                <input type='text' name='nameInput' required='required'/><br/>

                <label>Quiero ser:</label><br/>
                <div className={styles.sizes}>
                    <input type='checkbox' name='carerInput' id='carer' required='required'/>
                    <label for='carer'> Cuidador</label><br/>
                    <input type='checkbox' name='walkerInput' id='walker' required='required'/>
                    <label for='walker'> Paseasor</label><br/>
                </div>
                
                <label>Mail:</label><br/>
                <input type='email' name='emailInput' required='required'/><br/>

                <label>Ubicación:</label><br/>
                <input type='text' name='locationInput' required='required'/><br/>

                <label>Precio a cobrar por hora:</label><br/>
                <input type='number' name='priceInput' required='required'/><br/>

                <label>Teléfono:</label><br/>
                <input type='number' name='phoneInput' required='required'/><br/>

                <label>Presentación:</label><br/>
                <textarea rows='6' cols='30' type='text' name='descriptionInput'></textarea><br/>
                
                <label>Contraseña:</label><br/>
                <input type='password' name='passwordInput' required='required'/><br/>
            
                <div className={styles.btnDiv}>
                    <button>Registrarme</button>  
                </div>
            </form>
        </div>
    )
}

export default WorkerForm;