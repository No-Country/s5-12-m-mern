import Link from 'next/link.js'
import React from 'react'
import styles from "./userProfile.module.css"

const {
    petsContainer,
    petImgContainer,
    imageProfile,
    petItem
} = styles

const PetsContainer = ({ pets }) => {
    return (
        <div className={petsContainer}>
            {pets?.length > 0 && pets.map((pet) => <img src={pet.img} className={petItem} />)}
            <Link href="/add-pet">
                <div className={petItem}>+</div>
            </Link>
        </div>
    )
}

export default PetsContainer