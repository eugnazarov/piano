import './Key.scss'

import React from 'react';

const Key = ({color, pitch}) => {

    const playSound = () => {
        let audio = new Audio(document.getElementById(`${pitch}`).src)
        audio.play()


    }

    return (
        <>
            <audio
                src={`../../src/${pitch}.wav`}
                id={pitch}/>
            <div
                onMouseDown={playSound}
                className={color === "white" ? "key key_white" : "key key_black"}/>

        </>
    );

}


export default Key;