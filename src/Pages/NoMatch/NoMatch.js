import React from 'react'
import { Hero, NavBar } from '../../components'

import { useAuth } from '../../Context/AuthContext'; 

export default function NoMatch(props) {
    const { user } = useAuth();
    console.log()

    return (
        <>
        <NavBar/>
        <Hero
            title={`Sorry - ${props.location.pathname} doesn't exist`}
            subTitle=
            { 
                user 
                ? `Hey, ${user}! Why not try going Home?`
                : "Sorry dude, computer say's no."
            }
            actionText="Return Home"
            actionUrl='/'
        />
        </>
    )
}
