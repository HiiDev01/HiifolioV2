import { FiArrowUpRight } from 'react-icons/fi';
import { config } from '../config.js';
import ExperienceTimeline from './ExperienceTimeline.jsx';

export default function ExperienceSection() {
  return (
    <div className="stack-col">
      <header className="card-head">
        <div><span className="eyebrow">Career</span><h2>Experience</h2></div>
        <a className="text-link" href={config.resumeUrl} target="_blank" rel="noreferrer">View Full Resume <FiArrowUpRight size={14} /></a>
      </header>
      {/* The list is rendered twice and the track slides up by exactly one list height, so the loop has no seam. Hover or focus pauses it. */}
      <div className="ticker" role="region" aria-label="Work experience">
        <div className="ticker-track">
          <ExperienceTimeline items={config.experience} />
          <ExperienceTimeline items={config.experience} hidden />
        </div>
      </div>
    </div>
  );
}
