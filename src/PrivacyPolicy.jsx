import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Future AI";

    const description =
      "Read the Future AI Privacy Policy to understand how information may be collected and used.";

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
      <h1>Privacy Policy</h1>

      <p>
        Welcome to Future AI. We respect your privacy and are committed to
        explaining how information may be collected and used when you visit
        this website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We do not ask visitors to provide personal information to read our
        articles. If you contact us by email, we may receive the information
        you choose to share, such as your email address and message.
      </p>

      <h2>Cookies</h2>
      <p>
        Future AI or third-party services used on this website may use cookies
        or similar technologies to improve website functionality, understand
        website traffic, or display advertisements where applicable.
      </p>

      <h2>Google AdSense and Advertising</h2>
      <p>
        If advertising services such as Google AdSense are enabled in the
        future, Google and its partners may use cookies or similar technologies
        to show and measure advertisements, subject to their applicable policies
        and user consent requirements.
      </p>
      <p>
        For information about how Google handles data, please visit{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Google's Privacy Policy
        </a>.
      </p>

      <h2>Third-Party Websites</h2>
      <p>
        Our articles may link to external websites. We are not responsible for
        the privacy practices or content of those websites.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        This website is intended for a general audience. Please contact us if
        you believe personal information has been shared with us inappropriately.
      </p>

      <h2>Policy Updates</h2>
      <p>
        We may update this policy when our website or services change. Any
        updates will be published on this page.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us
        through our Contact page.
      </p>

      <p>
        <strong>Last updated:</strong> October 24, 2026
      </p>
    </main>
  );
}