import { useState } from "react";
export default function Accordion({ title, children, open = false }) {
  const [o, setO] = useState(open);
  return (
    <section className="accordion">
      <button className="accordion-head" onClick={() => setO(!o)}>
        {title}
        <span>{o ? "−" : "+"}</span>
      </button>
      {o && <div className="accordion-body">{children}</div>}
    </section>
  );
}
