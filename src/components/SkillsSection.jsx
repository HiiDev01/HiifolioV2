import { config } from '../config.js';
import { TECH } from '../icons.js';

export default function SkillsSection() {
  return (
    <div className="stack-col">
      <header>
        <span className="eyebrow">Toolkit</span>
        <h2>Skills</h2>
      </header>
      <ul className="skills">
        {config.skills.map((name) => {
          const { Icon, color } = TECH[name];
          return (
            <li key={name} className="skill">
              <Icon size={26} color={color} aria-hidden="true" />
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
