import { useEffect, useState } from 'react';
import FloatingNavigation from './components/FloatingNavigation.jsx';
import PortfolioGrid from './components/PortfolioGrid.jsx';
import Footer from './components/Footer.jsx';
import RainbowGlow from './components/RainbowGlow.jsx';

function initialTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [active, setActive] = useState('home'); // theme changes never touch this
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  return (
    <>
      <RainbowGlow />
      <FloatingNavigation active={active} onSelect={setActive} theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <main className="page">
        <PortfolioGrid active={active} onSelect={setActive} />
      </main>
      <Footer />
    </>
  );
}
