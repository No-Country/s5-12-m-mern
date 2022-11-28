'use client';

import { useEffect } from "react";

const UserProfile = ({ params }) => {

  useEffect(() => {
    console.log(`${process.env.API_URI}/api/user/${params.id}`)


  }, [])



  return (
    <div>UserProfile
      <p>ID: {params.id}</p>
    </div>
  )
}

export default UserProfile