import './App.css';
import Home from './Home';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

function App() {

  const [colorMode, setColorMode] = useState("dark-mode");

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
        < ThemeToggle colorMode={colorMode} setColorMode={setColorMode}/>
        < Home/>
      </div>
    </>
  );
}

export default App;
