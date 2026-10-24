import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Future AI";

    const description =
      "Learn about Future AI, our mission, and our approach to explaining artificial intelligence.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, []);

  return (
    <main className="full-article">
      <h1>About Future AI</h1>

      <p>
        Welcome to Future AI, an informational website dedicated to
        artificial intelligence and its growing role in our world.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make AI concepts easier to understand by
        publishing clear, useful, and educational articles for readers
        with different levels of technical knowledge.
      </p>

      <h2>What We Cover</h2>
      <ul>
        <li>Artificial intelligence fundamentals</li>
        <li>AI tools and real-world applications</li>
        <li>AI careers, skills, and learning resources</li>
        <li>AI benefits, limitations, and responsible use</li>
        <li>Emerging developments in AI technology</li>
      </ul>

      <h2>Our Approach</h2>
      <p>
        We aim to explain technical topics in simple language,
        distinguish established facts from predictions, and link
        to reliable sources whenever appropriate.
      </p>

      <p>
        AI technology changes quickly. Readers should check the
        original sources linked in our articles for the latest
        information.
      </p>

      <h2>Contact Us</h2>
      <p>
        Have feedback or a topic suggestion? Visit our{" "}
        <a href="/contact">Contact page</a> to get in touch.
      </p>
    </main>
  );
}