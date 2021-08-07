import React from 'react'
import { Hero, NavBar } from '../../components'

import { useAuth } from '../../Context/AuthContext'; 

export default function Home() {
    const { user } = useAuth();
    return (
        <>
        
        <NavBar/>
        
        <Hero
            title="Welcome to BillyBackPack 25"
            subTitle=
            { 
                user 
                ? `Welcome Back, ${user}!`
                : "Feel Free to Poke Around!"
            }
            actionText="Getting started"
            actionUrl="/"
            snow={true}
        />
        </>
    )
}
