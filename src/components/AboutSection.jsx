import { config } from '../config.js';

export default function AboutSection() {
  const { summary, contributions } = config.about;
  return (
    <div className="about">
      <header className="about-head">
        <span className="eyebrow">About</span>
        <h2>About {config.name.split(' ')[0]}</h2>
        <p className="lead">{summary}</p>
      </header>
      <h3 className="about-sub">What I bring</h3>
      <ol className="timeline">
        {contributions.map(({ title, text }, i) => (
          <li key={title} className="tl-item">
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-body">
              <span className="date-badge">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
