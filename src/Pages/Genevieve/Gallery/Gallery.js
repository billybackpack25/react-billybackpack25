import React from 'react'
import { Hero, NavBar } from '../../../components';
import { GalleryComponent } from '../../../components';
//import { useAuth } from '../../../Context/AuthContext'; 

export default function Gallery() {
    //const { user } = useAuth();
    return (
        <>
        <NavBar/> 
        <Hero
            title="Gallery"
            actionText="🔻"
            actionUrl="#"
            snow={true}
        />
        <GalleryComponent />
        </>
    )
}
