import { FiDownload, FiMessageCircle } from 'react-icons/fi';
import { config } from '../config.js';
import { TECH } from '../icons.js';

function Illustration() {
  // Placeholder: swap for src/assets/images/profile.png
  return (
    <svg className="hero-art" viewBox="0 0 220 220" role="img" aria-label="Profile illustration placeholder">
      <rect width="220" height="220" rx="12" fill="var(--art-a)" />
      <circle cx="110" cy="88" r="34" fill="var(--art-fg)" opacity=".85" />
      <path d="M44 190c6-38 34-56 66-56s60 18 66 56z" fill="var(--art-fg)" opacity=".6" />
      <rect x="62" y="150" width="96" height="10" rx="3" fill="var(--art-b)" />
    </svg>
  );
}

export default function HeroSection({ onSelect }) {
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="hero-copy">
          <span className="badge">Senior Software Engineer</span>
          <h1>Hello, I’m {config.name}</h1>
          <p className="lead">{config.intro}</p>
          <div className="btn-row">
            <a className="btn btn-primary btn-sm" href={config.cvPath} download><FiDownload size={14} /> Download CV</a>
            <button className="btn btn-ghost btn-sm" onClick={() => onSelect('contact')}><FiMessageCircle size={14} /> Let’s Talk</button>
          </div>
        </div>
        <Illustration />
      </div>
      <ul className="stack" aria-label="Technology stack">
        {config.stack.map((t) => {
          const { Icon, color } = TECH[t];
          return <li key={t} className="chip" title={t}><Icon size={15} color={color} aria-hidden="true" /><span>{t}</span></li>;
        })}
      </ul>
    </div>
  );
}
