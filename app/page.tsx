const projects = [
  {
    number: "01",
    name: "BudgetRoute-LLM",
    focus: "LLM research / routing / evaluation",
    summary:
      "Compared five Qwen2.5 routing strategies over 1,000 runs on 500 MMLU questions, using held-out evaluation and bootstrap confidence intervals. Built traceable RAG, abstention, and human review into the service.",
    href: "https://github.com/MedvAx-AI/budgetroute-llm",
    linkLabel: "View repository",
  },
  {
    number: "02",
    name: "SemanticSplat",
    focus: "Research leadership / 3D search",
    summary:
      "Led a four-person research team through a 150-query evaluation across five scenes, with ScanNet and Replica pilots for natural-language 3D search.",
    href: "https://beyond-proximity-public.vercel.app/",
    linkLabel: "Explore project",
  },
  {
    number: "03",
    name: "Yacht Resistance MLOps Pipeline",
    focus: "MLOps / training / serving",
    summary:
      "Automated DVC, MLflow, FastAPI, and Streamlit delivery with 10 CI tests. The held-out model reached R² 0.993 and RMSE 1.28 on five unseen hulls.",
    href: "https://github.com/MedvAx-AI/pmldl-yacht-mlops",
    linkLabel: "View repository",
  },
] as const;

export default function Home() {
  return (
    <main id="top">
      <header className="masthead">
        <a className="mark" href="#top" aria-label="Aleksandr Medvedev, home">
          AM<span>.</span>
        </a>
        <p>LLM research / AI engineering</p>
        <div className="masthead-links">
          <a
            href="/Aleksandr_Medvedev_LLM_Research.pdf"
            target="_blank"
            rel="noreferrer"
          >
            CV
          </a>
          <a href="https://github.com/MedvAx-AI" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.kaggle.com/medvax" target="_blank" rel="noreferrer">
            Kaggle
          </a>
          <a href="mailto:medv.ax@outlook.com">Email</a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="rail-label">Portfolio / 2026</div>
        <div className="hero-main">
          <p className="kicker">Aleksandr Medvedev · Innopolis University</p>
          <h1 id="hero-title">
            I build and evaluate
            <br />
            ML systems<span>.</span>
          </h1>
          <div className="hero-bottom">
            <p className="role">Third-year Applied AI student / seeking internships</p>
            <div>
              <p className="statement">
                I research LLM quality and build auditable AI systems, from
                held-out evaluation and RAG to automated model deployment.
              </p>
              <div className="hero-actions">
                <a className="availability" href="mailto:medv.ax@outlook.com">
                  Available for internship roles <span>↗</span>
                </a>
                <a
                  className="availability"
                  href="/Aleksandr_Medvedev_LLM_Research.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Research CV <span>↗</span>
                </a>
                <a
                  className="availability"
                  href="/Aleksandr_Medvedev_AI_Engineering.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Engineering CV <span>↗</span>
                </a>
                <a
                  className="availability"
                  href="/Aleksandr_Medvedev_LLM_AI_Agents.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  AI Agents CV <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-index" aria-label="Target positions">
          <span>01 / LLM Research Intern</span>
          <span>02 / AI Engineering Intern</span>
          <span>03 / AI Agents Intern</span>
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="section-label">
          <span>About</span>
          <span>Focus / skills</span>
        </div>
        <div className="about-grid">
          <h2 id="about-title">Reliable models, measured systems.</h2>
          <div className="about-content">
            <p className="about-copy">
              I’m a third-year Applied Artificial Intelligence student at
              Innopolis University (BSc, 2024–2028). I study LLM quality through
              held-out evaluation and build auditable services with RAG and human
              review. I have led a research team and shipped reproducible ML pipelines.
            </p>
            <div className="skills" aria-label="Core skills">
              <div>
                <span>ML & LLMs</span>
                <p>Python · PyTorch · TensorFlow · Transformers · FAISS</p>
              </div>
              <div>
                <span>Research</span>
                <p>Held-out evaluation · bootstrap confidence intervals · RAG</p>
              </div>
              <div>
                <span>Delivery</span>
                <p>FastAPI · PostgreSQL · DVC · MLflow · Docker</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-label">
          <span>Selected projects</span>
          <span>Live project / repositories</span>
        </div>
        <h2 id="work-title">From research to deployment.</h2>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project-number">{project.number}</div>
              <div className="project-title">
                <p>{project.focus}</p>
                <h3>{project.name}</h3>
              </div>
              <p className="project-summary">{project.summary}</p>
              <div className="project-detail">
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.linkLabel} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p className="footer-label">Contact / availability</p>
        <h2>Seeking LLM research and AI engineering roles.</h2>
        <div className="footer-meta">
          <p>Innopolis, Russia · Remote preferred · Open to Moscow on-site · 30+ h/week</p>
          <div>
            <a href="mailto:medv.ax@outlook.com">medv.ax@outlook.com ↗</a>
            <a
              href="/Aleksandr_Medvedev_LLM_Research.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Research CV ↗
            </a>
            <a
              href="/Aleksandr_Medvedev_AI_Engineering.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Engineering CV ↗
            </a>
            <a
              href="/Aleksandr_Medvedev_LLM_AI_Agents.pdf"
              target="_blank"
              rel="noreferrer"
            >
              AI Agents CV ↗
            </a>
            <a href="https://github.com/MedvAx-AI" target="_blank" rel="noreferrer">
              github.com/MedvAx-AI ↗
            </a>
            <a href="https://www.kaggle.com/medvax" target="_blank" rel="noreferrer">
              kaggle.com/medvax ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
