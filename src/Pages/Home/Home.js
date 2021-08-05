import React from 'react'
import { Hero } from '../../components'

import { useAuth } from '../../Context/AuthContext'; 

export default function Home() {
    const { user } = useAuth();
    return (
        <Hero
            title="Welcome to BillyBackPack 25"
            subTitle=
            { 
                user 
                ? `Welcome Back, ${user}!`
                : "Feel Free to Poke Around!"
            }
            imageSrc="https://source.unsplash.com/random/1600x500"
            actionText="Getting started"
            actionUrl="/"
        />
    )
}
