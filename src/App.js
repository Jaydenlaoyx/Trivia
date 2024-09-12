import './App.css';
import Home from './Home';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import SelectCategoriesScreen from './SelectCategoriesScreen';

function App() {

  const [colorMode, setColorMode] = useState("dark-mode");
  const [gameRunning, setGameRunning] = useState(false);

  useEffect(() => {
    if (colorMode === 'light-mode') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
}, [colorMode]);

  return (
    <>
      <div className={"App " + colorMode}>
        <ThemeToggle colorMode={colorMode} setColorMode={setColorMode}/>
        {!gameRunning && <Home gameRuning={gameRunning} setGameRunning={setGameRunning}/>}
        {gameRunning && <SelectCategoriesScreen />}
      </div>
    </>
  );
}

export default App;
