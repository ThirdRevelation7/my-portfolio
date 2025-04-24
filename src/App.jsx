import { LoadingScreen } from './components/LoadingScreen';
import { NavBar } from './components/NavBar';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { ThemeProvider } from './context/ThemeContext';
import { Contact } from './components/sections/Contact';
import DarkModeToggle from './components/DarkModeToggle';

import { useState } from 'react';
import { MobileMenu } from './components/MobileMenu';
import './App.css';
import './index.css';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black light:bg-white text-gray-100`}>
        <ThemeProvider>
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
        </ThemeProvider>
      </div >
    </>
  );
}

export default App;
