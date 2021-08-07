import React from 'react'
import { Hero, NavBar } from '../../components'

import { useAuth } from '../../Context/AuthContext'; 

export default function Profile() {
    const { user } = useAuth();
    return (
        <>
        <NavBar/>
        <Hero
            title="Your Profile Page"
            imageSrc="https://source.unsplash.com/random/1600x500"
            actionText={user}
            actionUrl="/profile"
        />
        </>
    )
}
