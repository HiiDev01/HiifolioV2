export default function ExperienceTimeline({ items, hidden }) {
  return (
    <ol className="timeline" aria-hidden={hidden || undefined}>
      {items.map((e) => (
        <li key={e.role + e.org} className="tl-item">
          <span className="tl-dot" aria-hidden="true" />
          <div className="tl-body">
            <span className="date-badge">{e.period}</span>
            <h3>{e.role}</h3>
            <p className="tl-org">{e.org}</p>
            <p>{e.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
