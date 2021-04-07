import './Key.scss'

import React from 'react';

const Key = ({color}) => {
    return (
        <div className={color === "white" ? "key key_white" : "key key_black"}>

        </div>
    );
}

export default Key;