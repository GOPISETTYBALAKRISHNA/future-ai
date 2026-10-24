import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import FutureArticle from "./FutureArticles.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";

function HomePage() {
  return (
    <div className="website">
      <header className="navbar">
        <Link className="logo" to="/">
          Future<span>AI</span>
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <a href="#future">AI Future</a>
          <a href="#jobs">Future Jobs</a>
          <Link to="/about">About</Link>
        </nav>

        <a className="nav-button" href="#explore">
          Explore AI ↗
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="live-dot"></span>
              EXPLORING TOMORROW'S TECHNOLOGY
            </div>

            <h1>
              Discover the <br />
              <span>Future of AI.</span>
            </h1>

            <p>
              Explore how artificial intelligence may transform our world,
              reshape careers, and redefine the way humanity lives and works.
            </p>

            <div className="hero-actions" id="explore">
              <a className="primary-button" href="#future">
                Explore the Future ↗
              </a>

              <a className="secondary-button" href="#about">
                About Future AI
              </a>
            </div>

            <div className="hero-note">
              <span>✦</span> Real information. Research-led insights.
            </div>
          </div>

          <div className="hero-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <div className="ai-core">
              <div className="core-glow"></div>
              <span>AI</span>
            </div>

            <div className="floating-card card-top">
              <span className="card-icon">✳</span>
              <div>
                <strong>Artificial Intelligence</strong>
                <small>Technology evolving</small>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span className="card-icon">⌘</span>
              <div>
                <strong>Human + Machine</strong>
                <small>Building tomorrow</small>
              </div>
            </div>
          </div>
        </section>

        <section className="intro section" id="future">
          <div className="section-label">01 / UNDERSTANDING AI</div>

          <h2>
            Technology is changing.
            <br />
            <span>Let's understand what's next.</span>
          </h2>

          <p className="section-description">
            Artificial intelligence is already used in communication,
            research, education, and business. Understanding its current
            capabilities helps us make sense of what may come next.
          </p>

          <div className="topic-grid">
            <article className="topic-card">
              <div className="topic-icon">◈</div>
              <span className="topic-number">TOPIC 01</span>
              <h3>The Future of AI</h3>

              <p>
                Explore current AI capabilities and evidence-based
                possibilities for future development.
              </p>

              <Link to="/future-of-artificial-intelligence">
                Read the guide ↗
              </Link>
            </article>

            <article className="topic-card">
              <div className="topic-icon">⌘</div>
              <span className="topic-number">TOPIC 02</span>
              <h3>Jobs &amp; Skills</h3>

              <p>
                Understand how AI may change work, workplace tasks,
                and the skills people need.
              </p>

              <a href="#jobs">Explore future jobs ↗</a>
            </article>

            <article className="topic-card">
              <div className="topic-icon">✳</div>
              <span className="topic-number">TOPIC 03</span>
              <h3>AI &amp; Humanity</h3>

              <p>
                Learn about AI's possible benefits, limitations,
                safety, and social impact.
              </p>

              <Link to="/about">Discover more ↗</Link>
            </article>
          </div>
        </section>

        <section className="article-section section" id="article">
          <div className="section-label">02 / FEATURED EXPLAINER</div>

          <h2>The Future of Artificial Intelligence</h2>

          <p>
            AI systems can analyse information, recognise patterns,
            and generate content. Their abilities vary by task, and
            they can still make mistakes. Future progress will depend
            on research, responsible development, practical limitations,
            and human choices.
          </p>

          <h3>What could change in the coming years?</h3>

          <p>
            AI assistants may become more integrated into everyday
            software. Robotics may expand in suitable workplaces, while
            education and businesses explore new ways to use intelligent
            tools. These are possibilities, not guaranteed outcomes.
          </p>

          <h3>Benefits and challenges</h3>

          <p>
            AI may support productivity, accessibility, and scientific
            research. Important challenges include privacy, misinformation,
            fairness, reliability, and changes to employment.
          </p>

          <p className="source-note">
            Further reading:{" "}
            <a
              href="https://hai.stanford.edu/ai-index"
              target="_blank"
              rel="noreferrer"
            >
              Stanford AI Index
            </a>
            {" · "}
            <a
              href="https://oecd.ai/"
              target="_blank"
              rel="noreferrer"
            >
              OECD AI Policy Observatory
            </a>
          </p>

          <Link
            className="primary-button"
            to="/future-of-artificial-intelligence"
          >
            Read the full article ↗
          </Link>
        </section>

        <section className="jobs-section section" id="jobs">
          <div className="section-label">03 / WORK &amp; SOCIETY</div>

          <h2>How might AI change future jobs?</h2>

          <p>
            AI may automate some tasks, assist workers with others,
            and create demand for new skills. The effect will vary by
            occupation and industry; no single prediction applies to
            every worker.
          </p>

          <div className="skills-row">
            <span>Critical thinking</span>
            <span>Digital literacy</span>
            <span>Communication</span>
            <span>Continuous learning</span>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="section-label">04 / ABOUT THIS WEBSITE</div>

          <h2>
            Understand tomorrow.
            <br />
            <span>Start with facts today.</span>
          </h2>

          <p>
            Future AI aims to explain artificial intelligence in clear,
            accessible language. We distinguish established information
            from forecasts and encourage readers to consult reliable sources.
          </p>

          <Link to="/about">Learn more about us ↗</Link>
        </section>
      </main>

      <footer className="footer">
        <Link className="logo" to="/">
          Future<span>AI</span>
        </Link>

        <p>
          Exploring AI with curiosity, evidence, and responsibility.
        </p>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <small>
          © {new Date().getFullYear()} Future AI. All rights reserved.
        </small>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/future-of-artificial-intelligence"
        element={<FutureArticle />}
      />

      <Route
        path="/privacy-policy"
        element={<PrivacyPolicy />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/about"
        element={<About />}
      />
    </Routes>
  );
}

export default App;