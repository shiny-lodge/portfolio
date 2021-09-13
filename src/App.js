import './styles/App.css';
import { useState, useEffect, useRef } from 'react';

import About from './components/About';
import Demos from './components/Demos';

import StyleContext from './components/StyleContext';

function App() {

  const [styles, setStyles] = useState(
    {
      palette: {
        background: "#45A9B7",
        paper: "#ffffff",
        primary: "#000000",
        accent: "#DA3D0B",
        paletteName: "Default",
        author: "Даниил Ломовицкий",
        users: "0"
      }
    }
  )


  function updatePalette(newPalette) {
    setStyles({
      ...styles, palette: newPalette
    })
  }

  return (
    <StyleContext.Provider value={styles}>

      <div className="App" style={{ backgroundColor: styles.palette.background }}>
        <About paperColor={styles.palette.paper} primaryColor={styles.palette.primary} accentColor={styles.palette.accent} />
        <Demos updatePalette={updatePalette} />
      </div>

    </StyleContext.Provider>
  );
}

export default App;
