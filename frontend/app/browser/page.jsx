'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import WalkersCard from '../components/WalkersCard/WalkersCard.jsx'

const Browser = () => {

    const [walkers, setWalkers] = useState([])
    const [loading, setLoading] = useState(true)

    console.log(walkers)

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URI}/api/user/walkers`)
            .then(response => {
                setWalkers(response.data)
            })
            .catch(err => {
                console.log(err)
            })
        setLoading(false)

    }, [])

    if (loading) return <div>Loading...</div>

    return (
        <div>Browser

            {
                walkers.map((walker) => <WalkersCard key={walker._id} data={walker} />)
            }
        </div>
    )
}

export default Browser