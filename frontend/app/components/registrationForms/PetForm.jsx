"use client";

import React, { useState } from 'react';
import { FaDog, FaCat, FaFish, FaPlus } from 'react-icons/fa';
import { GiPlasticDuck, GiTortoise } from 'react-icons/gi';
import styles from './Forms.module.css';

const PetForm = () => {

    const [kindOfPetSelected, setKindOfPetSelected] = useState('');
    const [sizeOfPetSelected, setSizeOfPetSelected] = useState ('');
    
    //manejar tipo de mascota seleccionada 
    let handleChangeKindOfPet = (e)=>{
        setKindOfPetSelected(e.target.value)
    }

    //manejar tamaño de mascota seleccionada
    let handleChangeSizeOfPet = (e) =>{
        setSizeOfPetSelected(e.target.value)
    }

    //envio de formulario de la mascota
    let handleSubmitPetForm = (e)=>{
        e.preventDefault();
        let nameValue = e.target.nameInput.value;
        let ageValue = e.target.ageInput.value;
        let dewormingValue = e.target.dewormingInput.value;
        let descriptionValue = e.target.descriptionInput.value;
        let necessaryCareValue = e.target.necessaryCareInput.value;

        const petRegistered = {
            kindOfPet: kindOfPetSelected,
            name: nameValue,
            age: ageValue,
            size: sizeOfPetSelected,
            deworming: dewormingValue,
            description: descriptionValue,
            necessaryCare: necessaryCareValue
        }
        
        console.log(petRegistered)

    }
    return (
        <div>
            
            <form className={styles.form} onSubmit={handleSubmitPetForm}>
                
                <label>Tipo de mascota:</label><br/>

                <div className={styles.kindOfPetDiv}>
                    <input type='radio' name='kindOfPetInput' id='dog' value='Perro' required='required'
                        checked={kindOfPetSelected == 'Perro' ? true : false} 
                        onChange={handleChangeKindOfPet}
                        className={styles.kindOfPetInput}
                    />
                    <label for='dog'><FaDog/> Perro</label>

                    <input type='radio' name='kindOfPetInput' id='cat' value='Gato' 
                        checked={kindOfPetSelected == 'Gato' ? true : false} 
                        onChange={handleChangeKindOfPet}
                        className={styles.kindOfPetInput}
                    />
                    <label for='cat'><FaCat/> Gato</label>

                    <input type='radio' name='kindOfPetInput' id='bird' value='Ave' 
                        checked={kindOfPetSelected == 'Ave' ? true : false} 
                        onChange={handleChangeKindOfPet}
                        className={styles.kindOfPetInput}
                    />
                    <label for='bird'><GiPlasticDuck/> Ave</label>
                    
                    <input type='radio' name='kindOfPetInput' id='tortoise' value='Tortuga' 
                        checked={kindOfPetSelected == 'Tortuga'  ? true : false} 
                        onChange={handleChangeKindOfPet}
                        className={styles.kindOfPetInput}
                    />
                    <label for='tortoise'><GiTortoise/> Tortuga</label>
                    
                    <input type='radio' name='kindOfPetInput' id='other' value='Otro'
                        checked={kindOfPetSelected == 'Otro'  ? true : false}  
                        onChange={handleChangeKindOfPet}
                        className={styles.kindOfPetInput}
                    />
                    <label for='other'><FaPlus/> Otro </label>
                </div>
                

                <label>Nombre:</label><br/>
                <input type='text' name='nameInput' required='required'/><br/>
                
                <label>Edad:</label><br/>
                <input type='number' name='ageInput' required='required'/><br/>
                
                <label>Tamaño:</label><br/>
                <div className={styles.sizes}>
                    <input type='radio' name='sizeInput' id='small' value='Pequeño' required='required'
                        checked={sizeOfPetSelected === 'Pequeño'? true : false}
                        onChange={handleChangeSizeOfPet}
                    />
                    <label for='small'> Pequeño</label><br/>

                    <input type='radio' name='sizeInput' id='medium' value='Mediano'
                        checked={sizeOfPetSelected === 'Mediano'? true : false}
                        onChange={handleChangeSizeOfPet}
                    />
                    <label for='medium'> Mediano</label><br/>
                    
                    <input type='radio' name='sizeInput' id='large' value='Grande' 
                        checked={sizeOfPetSelected === 'Grande'? true : false} 
                        onChange={handleChangeSizeOfPet}
                    />
                    <label for='large'> Grande</label><br/>
                </div>

                <label>Última desparacitación:</label><br/>
                <input type='date' name='dewormingInput' required='required'/><br/>
                
                <label>Descripción:</label><br/>
                <textarea rows='6' cols='30' type='text' name='descriptionInput'></textarea><br/>
                
                <label>Cuidados necesarios:</label><br/>
                <textarea rows='6' cols='30' type='text' name='necessaryCareInput'></textarea><br/>
                
                <div className={styles.btnDiv}>
                    <button>Registrar Mascota</button>  
                </div>
                
            </form>
        </div>
    )
}

export default PetForm;