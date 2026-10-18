import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero__inner">
        <div className="hero__text">
          <span className="eyebrow">Lahore, Pakistan</span>
          <h1 className="hero__title">
            Minahil Irfan builds interfaces
            <br />
            enterprises actually ship.
          </h1>
          <p className="hero__sub">
            MERN Stack Developer working across React.js, React Native and Node.js,
            with enterprise CMS depth in HCL DX (WebSphere Portal/WCM) and Optimizely —
            turning Figma files into pixel-accurate, production-ready UI.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero__code" aria-hidden="true">
          <div className="hero__code-bar">
            <span />
            <span />
            <span />
            <span className="hero__code-filename">profile.js</span>
          </div>
          <pre className="hero__code-body">
<span className="tok-key">const</span> <span className="tok-var">minahil</span> = {"{"}
  <span className="tok-prop">role</span>: <span className="tok-str">"MERN Stack Developer"</span>,
  <span className="tok-prop">stack</span>: [<span className="tok-str">"React"</span>, <span className="tok-str">"Node.js"</span>, <span className="tok-str">"HCL DX"</span>],
  <span className="tok-prop">certified</span>: <span className="tok-str">"HCL DX 9.5+"</span>,
  <span className="tok-prop">focus</span>: <span className="tok-str">"pixel-accurate, production UI"</span>,
{"}"};
          </pre>
        </div>
      </div>
    </section>
  );
}
