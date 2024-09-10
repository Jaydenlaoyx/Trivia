import { useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = ( {colorMode, setColorMode} ) => {

    const handleColorModeSwitches = () => {
        if (colorMode === 'dark-mode') {
            setColorMode('light-mode');
        } else {
            setColorMode('dark-mode');
        }
    };

    return (
        <div className="themeToggleContainer">
            <button className={"themeToggle " + colorMode} onClick={handleColorModeSwitches}>
                {colorMode === 'dark-mode' ? "Dark" : "Light"}
            </button>
            <span className={"themeToggleBubble-" + colorMode}></span>
        </div>
    );
}

export default ThemeToggle;