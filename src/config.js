// All personal details live here.
import pj1 from './assets/images/pj1.png';
import pj2 from './assets/images/pj2.png';


export const config = {
  name: 'Isaac Olatimehin',
  initials: 'IO',
  cvPath: '/cv/lone-wolf-cv.pdf',
  email: 'isaacolatimehin@gmail.com',
  linkedin: 'https://www.linkedin.com/in/isaac-olatimehin-b23427260',
  github: 'https://github.com/HiiDev01',
  intro:
    'A Senior Software Engineer passionate about building scalable web applications, solving real-world problems and driving innovation.',
  stack: ['JavaScript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Supabase', 'GitHub'],
  projects: [
      {
    name: 'Konnekt NG',
    image: pj2,
    description: 'A full-stack e-commerce platform featuring product browsing, shopping cart, user authentication, and secure Paystack payments, built with React.js, Node.js, Express.js, and Supabase.',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'Vanilla CSS',
      'Supabase',
      'Paystack',
      'Git'
    ],
    demo: 'https://konnektng.vercel.app/',
    repo: 'https://github.com/HiiDev01/konnektng',
    tone: 0
  },

  {
  name: 'Taperly',
  image: pj1,
  description: 'A full stack link management platform that allows users to create personalized profile pages, organize, manage, and share multiple links through a single customizable page.',
  tech: [
    'React.js',
    'Node.js',
    'Express.js',
    'Supabase',
    'Zod',
    'REST API',
    'Vanilla CSS',
    'Git'
  ],
    demo: 'https://taperly-sigma.vercel.app/',
    repo: 'https://github.com/HiiDev01/Linkpage',
    tone: 1
  },

  { name: 'MenuSnap', image: '/images/projects/menusnap.png', description: 'A digital restaurant menu platform that allows restaurants to create QR-code menus and update products instantly.', tech: ['React.js', 'Node.js', 'Supabase'], demo: '#', repo: '#', tone: 3 },


  ],
  skills: ['Node.js', 'Next.js', 'JavaScript', 'React.js', 'Git', 'Tailwind CSS', 'MongoDB', 'Supabase', 'MySQL', 'Video Editing', 'Content Creator', 'Teamwork'],
  about: {
    summary:
      'Full-stack engineer who designs, builds and ships web products from interface to database. I work across React front ends and Node/Express back ends, with PostgreSQL, MongoDB and Supabase for data, and I care about products that are fast, clear and easy to maintain.',
    contributions: [
      { icon: 'layers', title: 'End-to-end delivery', text: 'Take a feature from idea to production: UI, API, database and deployment.' },
      { icon: 'layout', title: 'Responsive, accessible interfaces', text: 'Clean React front ends that work on every screen and with a keyboard.' },
      { icon: 'server', title: 'Reliable APIs and data', text: 'Node and Express services backed by PostgreSQL, MongoDB or Supabase.' },
      { icon: 'users', title: 'Team collaboration', text: 'Work closely with designers and developers to turn designs into working product.' },
      { icon: 'check', title: 'Quality focus', text: 'Careful review habits, sharpened by evaluating AI model responses against accuracy guidelines.' },
      { icon: 'lightbulb', title: 'Practical problem solving', text: 'Break real-world problems into small, shippable steps.' },
    ],
  },
  socials: [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/HiiDev01' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/isaac-olatimehin-b23427260' },
    { label: 'X', icon: 'twitter', url: 'https://x.com/realhisaacbrown?s=11' },
    { label: 'Instagram', icon: 'instagram', url: 'https://instagram.com/your-handle' },
    { label: 'Email', icon: 'mail', url: 'mailto:isaacolatimehin@gmail.com' },
  ],
  allProjectsUrl: 'https://github.com/HiiDev01',
  resumeUrl: '/cv/lone-wolf-cv.pdf',
  experience: [
    { role: 'Full Stack Developer', org: 'Freelance', period: '2022 – Present', text: 'Built and maintained web applications, implemented frontend interfaces, developed backend services, and integrated APIs and databases.' },
    { role: 'Frontend Developer', org: 'HNG Tech', period: '2024', text: 'Developed responsive web interfaces, collaborated with designers and developers, and contributed to frontend development tasks.' },
    { role: 'Agricultural Operations Assistant', org: 'GartnerCallaway', period: '2023 – 2024', text: 'Worked with precision agriculture practices, irrigation systems, crop production, and technology-driven agricultural operations.' },
    { role: 'AI Trainer', org: 'Outlier AI', period: '2023 – 2024', text: 'Reviewed, evaluated, annotated, and improved AI model responses based on quality and accuracy guidelines.' },
  ],
};

// Nav order = default grid order. The active id is moved to the front.
export const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
];
