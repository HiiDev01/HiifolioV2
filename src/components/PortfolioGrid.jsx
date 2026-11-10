import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SECTIONS } from '../config.js';
import Card from './Card.jsx';
import HeroSection from './HeroSection.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import ExperienceSection from './ExperienceSection.jsx';
import ContactSection from './ContactSection.jsx';
import AboutSection from './AboutSection.jsx';
import SkillsSection from './SkillsSection.jsx';

const VIEWS = { home: HeroSection, projects: ProjectsSection, experience: ExperienceSection, contact: ContactSection, about: AboutSection, skills: SkillsSection };
const IDS = SECTIONS.map((s) => s.id);
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function PortfolioGrid({ active, onSelect }) {
  const order = [active, ...IDS.filter((id) => id !== active)]; // selected card takes the first slot
  const [focus, setFocus] = useState(active); // the card that looks "awake"; the others fade on phones
  const els = useRef({});
  const prev = useRef({});

  const measure = () => {
    for (const id of order) {
      const el = els.current[id];
      if (el) prev.current[id] = { x: el.offsetLeft, y: el.offsetTop };
    }
  };

  // FLIP: after the DOM reorders, start each card at its old position and let CSS glide it to the new one.
  useLayoutEffect(() => {
    for (const id of order) {
      const el = els.current[id];
      const was = prev.current[id];
      if (!el || !was || reduced()) continue;
      const dx = was.x - el.offsetLeft;
      const dy = was.y - el.offsetTop;
      if (!dx && !dy) continue;
      el.style.transition = 'none';
      el.style.transform = `translate(${dx}px, ${dy}px)`;
      el.getBoundingClientRect(); // force reflow
      el.style.transition = '';
      el.style.transform = '';
    }
    measure();
  }, [active]);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active]);

  useEffect(() => setFocus(active), [active]);

  // Phones: as you scroll, the card nearest the middle of the screen becomes the focused one.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!mq.matches) return setFocus(active);
      const mid = window.innerHeight / 2;
      let best = null;
      let bestDist = Infinity;
      for (const id of order) {
        const el = els.current[id];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const d = r.top <= mid && r.bottom >= mid ? 0 : Math.min(Math.abs(r.top - mid), Math.abs(r.bottom - mid));
        if (d < bestDist) { bestDist = d; best = id; }
      }
      if (best) setFocus(best);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [active]);

  useEffect(() => { window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' }); }, [active]);

  return (
    <div className="grid">
      {order.map((id) => {
        const View = VIEWS[id];
        const label = SECTIONS.find((s) => s.id === id).label;
        return (
          <Card key={id} ref={(el) => (els.current[id] = el)} id={id} label={label} active={id === focus} onActivate={onSelect}>
            <View onSelect={onSelect} />
          </Card>
        );
      })}
    </div>
  );
}
