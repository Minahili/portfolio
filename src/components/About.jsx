import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="wrap about__grid">
        <div>
          <span className="eyebrow">01 — About</span>
          <h2 className="section-heading">
            Full-stack on paper, detail-obsessed in practice.
          </h2>
        </div>
        <p className="about__text">
          I build scalable, responsive web and mobile applications with React.js,
          React Native and Node.js, alongside enterprise CMS development on HCL DX
          (WebSphere Portal/WCM) and Optimizely. My work centers on translating Figma
          designs into pixel-accurate, cross-breakpoint UI, building reusable component
          libraries and themes, and integrating REST APIs across the full stack. I've
          delivered production-ready features for internal and client platforms during
          internships, with a consistent focus on clean, maintainable code and
          performance.
        </p>
      </div>
    </section>
  );
}
