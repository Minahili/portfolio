import "./Projects.css";

const PROJECTS = [
  {
    title: "Al Ghurair Foods (AGI) Website",
    tag: "HCL DX (WCM)",
    desc: "Production-ready frontend components for the Al Ghurair Group Foods website, matching Figma designs pixel-accurately across four responsive breakpoints.",
    points: [
      "Custom \"Our Brands\" carousel and \"Why Zed\" accordion built with WCM Authoring/Presentation Templates and the Navigator component.",
      "Reusable header and footer components shared across the site.",
      "Custom theme deployed to the DX sandbox via WebDAV and DXClient CLI (XML Access operations).",
    ],
    stack: ["HCL DX", "WCM", "Figma-to-code"],
  },
  {
    title: "Blood Donation Mobile App",
    tag: "React Native · Node.js · MySQL",
    desc: "Full-stack mobile application supporting donor, patient, and admin roles for blood bank management.",
    points: [
      "GPS-based donor matching and real-time notifications to connect donors with requests.",
      "Database schema and inventory tracking system for blood bank operations.",
    ],
    stack: ["React Native", "Node.js", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <span className="eyebrow">04 — Projects</span>
        <h2 className="section-heading">A couple of things I've shipped.</h2>

        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-card__top">
                <h3>{p.title}</h3>
                <span className="project-card__tag">{p.tag}</span>
              </div>
              <p className="project-card__desc">{p.desc}</p>
              <ul className="project-card__points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="project-card__stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
