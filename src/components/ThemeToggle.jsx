import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark';
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label={dark ? 'Switch to carbon white' : 'Switch to carbon black'} title="Toggle theme">
      {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}
