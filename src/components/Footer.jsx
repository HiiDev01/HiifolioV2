import { config } from '../config.js';
import { SOCIAL_ICONS } from '../icons.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} {config.name}. All rights reserved.</p>
        <ul className="footer-social" aria-label="Social media">
          {config.socials.map(({ label, icon, url }) => {
            const Icon = SOCIAL_ICONS[icon];
            const external = !url.startsWith('mailto:');
            return (
              <li key={label}>
                <a href={url} aria-label={label} title={label} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                  <Icon size={16} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
