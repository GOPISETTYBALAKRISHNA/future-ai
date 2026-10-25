import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Future AI";

    const description =
      "Contact Future AI with questions, suggestions, corrections, or feedback about our AI articles.";

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
      <h1>Contact Future AI</h1>

      <p>
        Have a question, suggestion, or correction about one of our
        artificial intelligence articles? We would love to hear from you.
      </p>

      <h2>Get in Touch</h2>

      <p>
        You can contact the Future AI team by email:
      </p>

      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:YOUR_EMAIL@gmail.com">
        futureai.content2026@gmail.com
        </a>
      </p>

    

      <h2>What You Can Contact Us About</h2>

      <ul>
        <li>Questions about our AI articles</li>
        <li>Suggestions for new topics</li>
        <li>Corrections to information on the website</li>
        <li>Website issues and feedback</li>
        <li>Privacy-related questions</li>
      </ul>

      <p>
        Thank you for visiting Future AI!
      </p>
    </main>
  );
}