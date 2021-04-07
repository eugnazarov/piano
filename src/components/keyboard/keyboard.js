import React from 'react';
import "./keyboard.scss"
import Key from "../key/Key";

const Keyboard = () => {
    return (
        <div className="keyboard">
            <Key color="white" pitch={"c"} />
            <Key color="black" pitch={"c1"} />
            <Key color="white" pitch={"d"}/>
            <Key color="black" pitch={"d1"}/>
            <Key color="white" pitch={"e"}/>
            <Key color="white" pitch={"f"}/>
            <Key color="black" pitch={"f1"}/>
            <Key color="white" pitch={"g"}/>
            <Key color="black" pitch={"g1"}/>
            <Key color="white" pitch={"a"}/>
            <Key color="black" pitch={"a1"}/>
            <Key color="white" pitch={"h"}/>
            <Key color="white" pitch={"cH"}/>



        </div>
    );
};

export default Keyboard;