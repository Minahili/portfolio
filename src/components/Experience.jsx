import "./Experience.css";

const ROLES = [
  {
    title: "Associate Software Engineer",
    company: "Digifloat",
    period: "",
    points: [
      "Delivered full-stack features and RESTful APIs across MERN Stack and HCL DX projects for internal and client applications.",
      "Customized HCL DX themes and built reusable portal components used across multiple site sections.",
      "Managed web content through WCM and implemented portal personalization features to tailor user experience.",
      "Supported portal administration and integrated REST services within enterprise portal solutions.",
      "Participated in testing, debugging, and peer code reviews to ensure high-quality, maintainable deliverables.",
    ],
  },
  {
    title: "MERN Stack Intern",
    company: "AALA IT Solutions",
    period: "Sep 2025 – Dec 2025",
    points: [
      "Developed and optimized responsive React.js components for production web applications, improving load performance and UI consistency across devices.",
      "Integrated REST APIs to streamline frontend–backend communication and data flow.",
      "Collaborated with the development team using Git version control, following coding standards and best practices.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <span className="eyebrow">03 — Experience</span>
        <h2 className="section-heading">Where I've put this to work.</h2>

        <div className="timeline">
          {ROLES.map((role) => (
            <div className="timeline__item" key={role.title + role.company}>
              <div className="timeline__marker" />
              <div className="timeline__content">
                <div className="timeline__head">
                  <h3>{role.title}</h3>
                  {role.period && <span className="timeline__period">{role.period}</span>}
                </div>
                <p className="timeline__company">{role.company}</p>
                <ul className="timeline__points">
                  {role.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
