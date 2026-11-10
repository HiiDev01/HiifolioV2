// Each project is a "code file" coloured like a different VS Code theme:
// Dark+, One Dark, Dracula and Night Owl (see .vs-* in cards.css).
const THEMES = ['dark', 'onedark', 'dracula', 'owl'];

const Tok = ({ c, children }) => <span className={c}>{children}</span>;

export default function ProjectCard({ project }) {
  const { name, description, tech, demo, repo, tone } = project;
  return (
    <article className={`vs vs-${THEMES[tone % THEMES.length]}`}>
      <div className="vs-bar"><span className="vs-dots" aria-hidden="true" /><span className="vs-tab">{name}.js</span></div>
      <div className="vs-shot" role="img" aria-label={`${name} screenshot placeholder`}><span>{name}</span></div>
      <div className="vs-code">
        <p className="ln"><Tok c="cm">{`// project ${String(tone + 1).padStart(2, '0')}`}</Tok></p>
        <p className="ln"><Tok c="kw">const</Tok> <Tok c="fn">{name}</Tok> <Tok c="pun">= {'{'}</Tok></p>
        <p className="ln in"><Tok c="prop">description</Tok><Tok c="pun">:</Tok> <Tok c="str">“{description}”</Tok><Tok c="pun">,</Tok></p>
        <p className="ln in">
          <Tok c="prop">stack</Tok><Tok c="pun">: [</Tok>
          {tech.map((t, i) => (
            <span key={t}><Tok c="str">“{t}”</Tok>{i < tech.length - 1 && <Tok c="pun">, </Tok>}</span>
          ))}
          <Tok c="pun">],</Tok>
        </p>
        <p className="ln in"><Tok c="prop">demo</Tok><Tok c="pun">:</Tok> <a href={demo} target="_blank" rel="noreferrer">“live demo”</a><Tok c="pun">,</Tok></p>
        <p className="ln in"><Tok c="prop">repo</Tok><Tok c="pun">:</Tok> <a href={repo} target="_blank" rel="noreferrer">“github”</a><Tok c="pun">,</Tok></p>
        <p className="ln"><Tok c="pun">{'}'}</Tok></p>
      </div>
    </article>
  );
}
