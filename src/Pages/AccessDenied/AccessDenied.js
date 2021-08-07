import React from 'react'
import { useLocation } from 'react-router-dom';
import { Hero, NavBar } from '../../components';

import { useAuth } from '../../Context/AuthContext'; 

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function AccessDenied() {
    let query = useQuery();
    const { user } = useAuth();
    
    const reason = query.get('reason');
    const perm_needed = query.get('permission_needed');
    const page = query.get('page');

    const reasons = {
        'does not have permission': `Sorry, ${user} You do not have permission to access ${page}`
    }

    return (
        <>
        <NavBar/>
        <Hero
            title={`Access Denied - ${reasons[reason]}`}
            subTitle={`Permissions needed: ${perm_needed}`}
            imageSrc="https://source.unsplash.com/random/1600x500"
            actionText="Getting started"
            actionUrl="/"
        />
        </>
    )
}
