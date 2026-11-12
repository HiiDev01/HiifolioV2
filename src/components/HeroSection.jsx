
import { FiDownload, FiMessageCircle } from 'react-icons/fi';
import { config } from '../config.js';
import { TECH } from '../icons.js';
import profileImage from '../assets/images/myprofile.jpg';

function Illustration() {
  return (
    <div className="hero-image-wrapper">
      <img
        className="hero-art"
        src={profileImage}
        alt={`${config.name} - Software Engineer`}
      />
    </div>
  );
}

export default function HeroSection({ onSelect }) {
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="hero-copy">
          <span className="badge">Full-Stack Web Developer</span>

          <h1>Hello, I’m {config.name}</h1>

          <p className="lead">{config.intro}</p>

          <div className="btn-row">
            <a
              className="btn btn-primary btn-sm"
              href={config.cvPath}
              download
            >
              <FiDownload size={14} /> Download CV
            </a>

            <button
              className="btn btn-ghost btn-sm"
              onClick={() => onSelect('contact')}
            >
              <FiMessageCircle size={14} /> Let’s Talk
            </button>
          </div>
        </div>

        <Illustration />
      </div>

      <ul className="stack" aria-label="Technology stack">
        {config.stack.map((t) => {
          const { Icon, color } = TECH[t];

          return (
            <li key={t} className="chip" title={t}>
              <Icon size={15} color={color} aria-hidden="true" />
              <span>{t}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
