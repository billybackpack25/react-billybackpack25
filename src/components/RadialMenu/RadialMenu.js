import React from 'react';
import './style.css';

export const RadialMenu = () => {
    return (
        <>
            <input id="triggerButton" className="triggerButton" type="checkbox"/>
            <label htmlFor="triggerButton"></label>

            <div className="one">Menu 1</div>
            <div className="two">Menu 2</div>
            <div className="three">Menu 3</div>
        </>
    )
}
