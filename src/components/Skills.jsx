import "./Skills.css";

const GROUPS = [
  {
    title: "Frontend",
    items: ["React.js", "React Native", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Responsive / Mobile-First"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API Design & Integration"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "CMS & Enterprise Platforms",
    items: [
      "HCL DX — WCM",
      "Theme Customization",
      "Portal Personalization & Administration",
      "Reusable Components",
      "Authoring/Presentation Templates",
      "Optimizely CMS",
    ],
  },
  {
    title: "Tools & Practices",
    items: ["Git", "GitHub", "VS Code", "Postman", "WebSockets", "Agile Collaboration", "Code Review & Debugging"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <span className="eyebrow">02 — Skills</span>
        <h2 className="section-heading">What I work with day to day.</h2>

        <div className="skills__groups">
          {GROUPS.map((g) => (
            <div className="skills__group" key={g.title}>
              <h3 className="skills__group-title">{g.title}</h3>
              <ul className="skills__chips">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
