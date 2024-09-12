import { useState } from "react";
import "./Home.css"

const Home = ( {gameRunning, setGameRunning} ) => {

    const handleStartGame = () => {
            setGameRunning(true);
    };

    return (
        <>
             <div className="gameTitle">
                <span className="titleLetter letterType1">T</span>
                <span className="titleLetter">r</span>
                <span className="titleLetter">i</span>
                <span className="titleLetter">v</span>
                <span className="titleLetter">i</span>
                <span className="titleLetter">a</span>
                <span className="titleLetter letterType1"> M</span>
                <span className="titleLetter">a</span>
                <span className="titleLetter">n</span>
                <span className="titleLetter">i</span>
                <span className="titleLetter">a</span>
            </div>
            <button className="startGameButton" onClick={handleStartGame}>Start</button>
        </>
    );
}

export default Home;