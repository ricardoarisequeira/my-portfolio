import { person } from "../history";

// The open invitation. It sits in the rail on wide screens and after the notes
// on phones; CSS shows one of the two, so only one is ever in the tab order.
export default function Contact({ id, className }) {
  return (
    <section className={`request ${className}`} aria-labelledby={id}>
      <h2 id={id}>Request a feature for 7.0</h2>
      <p>Ideas, questions and bug reports go straight to the maintainer.</p>
      <div className="contact">
        <a className="button" href={`mailto:${person.email}`}>
          {person.email}
        </a>
        {person.links.map((l) => (
          <a key={l.label} href={l.url}>
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
