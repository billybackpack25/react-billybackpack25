import React from 'react';
import { Hero, NavBar } from '../../../components';

import dataMap from '../../../assets/genevievehasson_myub4q3hna/dataMap.json';

import { useAuth } from '../../../Context/AuthContext'; 

import VerticalTabs from '../../../components/VerticalNav/VerticalNav';

//import HorizontalTab from '../../../components/HorizontalNav/HorizontalNav';


export default function Instagram() {
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
        <VerticalTabs data={dataMap}/>
        </>
    )
}
