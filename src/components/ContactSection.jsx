import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { config } from '../config.js';
import { SOCIAL_ICONS } from '../icons.js';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Opens the visitor's email app with the message filled in.
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="stack-col contact">
      <header>
        <span className="eyebrow">Contact</span>
        <h2>Let’s Connect.</h2>
        <p className="lead">Have a project in mind, a collaboration idea, or just want to say hi? Let’s connect!</p>
      </header>
      <form className="form" onSubmit={submit}>
        <input required placeholder="Name" value={form.name} onChange={set('name')} aria-label="Name" autoComplete="name" />
        <input required type="email" placeholder="Email" value={form.email} onChange={set('email')} aria-label="Email" autoComplete="email" />
        <textarea required rows="3" placeholder="Message" value={form.message} onChange={set('message')} aria-label="Message" />
        <button className="btn btn-primary btn-sm" type="submit"><FiSend size={14} /> Send message</button>
      </form>
      <ul className="social-row" aria-label="Social links">
        {config.socials.map(({ label, icon, url }) => {
          const Icon = SOCIAL_ICONS[icon];
          const external = !url.startsWith('mailto:');
          return (
            <li key={label}>
              <a href={url} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}><Icon size={15} aria-hidden="true" /> {label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
