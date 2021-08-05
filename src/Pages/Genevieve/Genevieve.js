import React from 'react';
import { Hero } from '../../components';

import { useAuth } from '../../Context/AuthContext'; 

function Genevieve() {
    const { user } = useAuth();
    return (
        <Hero
            title=
            {
                user 
                ?   user === 'Genevieve Hasson'
                        ? 'You\'re my sun, moon and all my stars'
                        : 'Welcome to our story'
                :  'Our Magical story'
            }
            subTitle=
            { 
                user 
                ?   user === 'Genevieve Hasson'
                        ? `I love you, ${user}!`
                        : `Welcome back, ${user}`
                :   'Feel Free To Poke Around!'
            }
            imageSrc="https://source.unsplash.com/random/1600x500"
            actionText="Getting Started"
            actionUrl="/demo/getting-started"
        />
    )
}

export default Genevieve
