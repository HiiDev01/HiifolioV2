import { FiArrowUpRight } from 'react-icons/fi';
import { config } from '../config.js';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectsSection() {
  return (
    <div className="stack-col">
      <header className="card-head">
        <div><span className="eyebrow">Selected work</span><h2>Featured projects</h2></div>
        <a className="text-link" href={config.allProjectsUrl} target="_blank" rel="noreferrer">View All Projects <FiArrowUpRight size={14} /></a>
      </header>
      <div className="projects-grid">
        {config.projects.map((p) => <ProjectCard key={p.name} project={p} />)}
      </div>
    </div>
  );
}
