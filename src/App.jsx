import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import FutureArticle from "./FutureArticles.jsx";
import FreeAITools from "./FreeAITools.jsx";
import FreeAILearning from "./FreeAILearning.jsx";
import AIJobs from "./AIJobs.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import AdsterraMultiAd from "./AdsterraMultiAd.jsx";
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
        {/* HERO SECTION */}
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
          <AdsterraMultiAd type="native" />


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
        <AdsterraMultiAd type="banner320" />

        {/* AI TOPICS SECTION */}
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

        {/* FEATURED ARTICLES SECTION */}
        <section className="article-section section" id="article">
          <div className="section-label">02 / FEATURED ARTICLES</div>

          <h2>Explore Our AI Articles</h2>

          <p>
            Discover artificial intelligence, explore useful AI tools,
            and learn how emerging technologies may affect our lives.
          </p>

<AdsterraMultiAd type="banner300" />

          {/* ARTICLE 1 */}
          <article className="topic-card">
            <div className="topic-icon">◈</div>
            <span className="topic-number">ARTICLE 01</span>

            <h3>The Future of Artificial Intelligence</h3>

            <p>
              Learn about AI capabilities, future possibilities,
              potential benefits, and important challenges.
            </p>

            <p className="source-note">
              Further reading:{" "}
              <a
                href="https://hai.stanford.edu/ai-index"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stanford AI Index
              </a>
              {" · "}
              <a
                href="https://oecd.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OECD AI Policy Observatory
              </a>
            </p>

            <Link
              className="primary-button"
              to="/future-of-artificial-intelligence"
            >
              Read the AI Future Article ↗
            </Link>
          </article>
          <AdsterraMultiAd type="banner728" />

          {/* ARTICLE 2 */}
          <article className="topic-card">
            <div className="topic-icon">✳</div>
            <span className="topic-number">ARTICLE 02</span>

            <h3>Best Free AI Tools for Students in 2026</h3>

            <p>
              Discover AI tools that may help students with learning,
              research, writing, coding, and productivity. Check each
              tool's current free-plan limits before using it.
            </p>

            <Link
              className="primary-button"
              to="/free-ai-tools-for-students"
            >
              Read the Free AI Tools Article ↗
            </Link>
          </article>
          {/* ARTICLE 3 */}
<article className="topic-card">
  <div className="topic-icon">📚</div>
  <span className="topic-number">ARTICLE 03</span>

  <h3>How to Learn Artificial Intelligence for Free in 2026</h3>

  <p>
    Discover free AI learning resources, essential skills,
    beginner projects, and a practical 30-day learning plan.
  </p>

  <Link
    className="primary-button"
    to="/learn-ai-for-free"
  >
    Learn AI for Free ↗
  </Link>
</article>

{/* ARTICLE 4 */}
<article className="topic-card">
  <div className="topic-icon">🤖</div>

  <span className="topic-number">ARTICLE 04</span>

  <h3>Can AI Replace Human Jobs in 2026?</h3>

  <p>
    Discover how AI is changing jobs, which skills matter,
    and how students and freshers can prepare for future careers.
  </p>

  <Link
    className="primary-button"
    to="/ai-replace-human-jobs"
  >
    Explore AI & Jobs ↗
  </Link>
</article>
        </section>

        {/* JOBS SECTION */}
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
        

        {/* ABOUT SECTION */}
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

      {/* FOOTER */}
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
      {/* HOME PAGE */}
      <Route path="/" element={<HomePage />} />

      {/* ARTICLE 1 */}
      <Route
        path="/future-of-artificial-intelligence"
        element={<FutureArticle />}
      />

      {/* ARTICLE 2 */}
      <Route
        path="/free-ai-tools-for-students"
        element={<FreeAITools />}
      />
      {/*ARTICLE 3 */}
      <Route
  path="/learn-ai-for-free"
  element={<FreeAILearning />}
/>
<Route
  path="/ai-replace-human-jobs"
  element={<AIJobs />}
/>

      {/* OTHER PAGES */}
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