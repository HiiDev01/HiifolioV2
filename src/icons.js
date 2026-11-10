import { SiExpress, SiGit, SiGithub, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSupabase, SiTailwindcss } from 'react-icons/si';
import { FaCameraRetro, FaFilm, FaPeopleGroup } from 'react-icons/fa6';
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

// name -> icon + brand colour (no colour = inherit text colour)
export const TECH = {
  'JavaScript': { Icon: SiJavascript, color: '#E0B800' },
  'React.js': { Icon: SiReact, color: '#1FA8D6' },
  'Next.js': { Icon: SiNextdotjs },
  'Node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
  'Express.js': { Icon: SiExpress },
  'PostgreSQL': { Icon: SiPostgresql, color: '#4A7DB8' },
  'MongoDB': { Icon: SiMongodb, color: '#47A248' },
  'Supabase': { Icon: SiSupabase, color: '#2FB67C' },
  'GitHub': { Icon: SiGithub },
  'Git': { Icon: SiGit },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#2BA6DE' },
  'MySQL': { Icon: SiMysql, color: '#3F8CC0' },
  'Video Editing': { Icon: FaFilm },
  'Content Creator': { Icon: FaCameraRetro },
  'Teamwork': { Icon: FaPeopleGroup },
};

export const SOCIAL_ICONS = { github: FiGithub, linkedin: FiLinkedin, twitter: FiTwitter, instagram: FiInstagram, mail: FiMail };
