import React, { Fragment } from 'react';

// Styles
import './Background.scss'

// Pictures
import waterColor from "../../assets/img/watercolor.png";
import homeDog from "../../assets/img/homeDog.jpg";

console.log(
    `
_______  ______ _______      _______ __   _ ______       ______   _____   ______ _______
|_____| |_____/    |         |_____| | \\  | |     \\      |     \\ |     | |  ____ |______
|     | |    \\_    |         |     | |  \\_| |_____/      |_____/ |_____| |_____| ______|
    `)

const Background = () => {

    return (
        <Fragment>
            <img id='waterColor' style={{height: window.innerHeight}} className='waterColor' src={waterColor} alt="watercolor background" />
            <img id='homeDog' style={{height: window.innerHeight}} className='homeDog' src={homeDog} alt="homeDog background" />
        </Fragment>
    )
}

export default Background