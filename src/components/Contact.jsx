import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact__inner">
        <div>
          <span className="eyebrow">06 — Contact</span>
          <h2 className="contact__title">Let's build something together.</h2>
          <p className="contact__sub">
            Open to MERN Stack and HCL DX / CMS roles — reach out directly or find me on GitHub.
          </p>
        </div>

        <div className="contact__links">
          <a href="mailto:minahili764@gmail.com" className="contact__link">
            minahili764@gmail.com
          </a>
          <a
            href="https://github.com/Minahili"
            target="_blank"
            rel="noreferrer"
            className="contact__link"
          >
            github.com/Minahili
          </a>
        </div>
      </div>
    </section>
  );
}
