import React from 'react'

const WalkersCard = ({ data }) => {
    const { fullName, ranking, requests, zone } = data
    return (
        <div>
            <p>{fullName}</p>
            <p>{ranking}</p>
            <p>{requests}</p>
            <p>{zone}</p>
        </div>
    )
}

export default WalkersCard