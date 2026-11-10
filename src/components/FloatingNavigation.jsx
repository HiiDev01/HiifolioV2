import { SECTIONS, config } from '../config.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function FloatingNavigation({ active, onSelect, theme, onToggleTheme }) {
  return (
    <>
      <button className="corner-logo" onClick={() => onSelect('home')} aria-label={`${config.name} — home`}>
        {config.initials}
      </button>
      <nav className="float-nav" aria-label="Primary">
        <ul className="nav-links">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-link${active === id ? ' is-active' : ''}`}
                aria-current={active === id ? 'page' : undefined}
                onClick={() => onSelect(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </nav>
    </>
  );
}
