import './styles/App.css';
import { useState, useEffect, useRef } from 'react';

import About from './components/About';
import Demos from './components/Demos';

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
      },
      tabs: {
        button: 'demos__button',
        indicator: 'demos__button-indicator'
      }
    }
  )

  function updatePalette(palette) {
    setStyles({
      ...styles, palette: palette
    })
  }

  function updatePaletteColors(background, paper, primary, accent) {
    setStyles({
      ...styles, palette: {
        background: background,
        paper: paper,
        primary: primary,
        accent: accent
      }
    })
  }


  return (
    <div className="App" style={{ backgroundColor: styles.palette.background }}>
      <About paperColor={styles.palette.paper} primaryColor={styles.palette.primary} accentColor={styles.palette.accent} />
      <Demos paperColor={styles.palette.paper} primaryColor={styles.palette.primary} accentColor={styles.palette.accent} tabs={styles.tabs} updatePalette={updatePalette} />
    </div>
  );
}

export default App;
