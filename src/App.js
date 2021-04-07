import React from 'react';
import Key from "./components/key/Key";
import Keyboard from "./components/keyboard/keyboard";

const App = () => {
    return (
        <div style={{
            width: "550px",
            height: "100vh",
            margin: "0 auto",
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h3>Virtual piano</h3>
            <Keyboard/>
        </div>
    );
}

export default App;