import { person } from "../history";

// How to reach me. It sits in the rail on wide screens and after the notes
// on phones; CSS shows one of the two, so only one is ever in the tab order.
export default function Contact({ id, className }) {
  return (
    <section className={`request ${className}`} aria-labelledby={id}>
      <h2 id={id}>Contact the maintainer</h2>
      <p>Questions, ideas or just a hello.</p>
      <div className="contact">
        <a className="button" href={`mailto:${person.email}`}>
          {person.email}
        </a>
        {person.links.map((l) => (
          <a key={l.label} href={l.url} className="social">
            <svg viewBox={l.icon.viewBox} aria-hidden="true" focusable="false">
              <path d={l.icon.path} />
            </svg>
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
