import "./Education.css";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap education__grid">
        <div>
          <span className="eyebrow">05 — Education</span>
          <h2 className="section-heading">Background & certification.</h2>

          <ul className="education__list">
            <li>
              <h3>BS Computer Science</h3>
              <p>Lahore College for Women University · 2021 – 2025</p>
            </li>
            <li>
              <h3>Intermediate, Pre-Engineering (Physics)</h3>
              <p>Queen Mary College</p>
            </li>
            <li>
              <h3>Matriculation, Computer Science</h3>
              <p>Akbari Public School · 2018 – 2019</p>
            </li>
          </ul>
        </div>

        <div className="cert-card">
          <span className="cert-card__label">Certification</span>
          <h3>HCLSoftware Certified Professional</h3>
          <p>Digital Experience 9.5+</p>
        </div>
      </div>
    </section>
  );
}
