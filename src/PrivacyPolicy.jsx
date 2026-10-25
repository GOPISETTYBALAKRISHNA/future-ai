import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Future AI";

    const description =
      "Read the Future AI Privacy Policy to learn how information, cookies, advertising technologies, and third-party services may be used.";

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
      <article>
        <h1>Privacy Policy</h1>

        <p>
          <strong>Last updated:</strong> October 25, 2026
        </p>

        <p>
          Welcome to Future AI. Your privacy matters to us.
          This Privacy Policy explains how information may be
          collected, used, and shared when you visit our website,
          read our articles, or contact us.
        </p>

        <p>
          By using this website, you acknowledge that you have
          read this policy. Where applicable, we will request
          consent for data processing that requires it under
          relevant privacy laws.
        </p>

        <h2>1. Information We May Collect</h2>

        <p>
          You can read our publicly available articles without
          creating an account or submitting personal information.
        </p>

        <p>
          If you contact us by email, we may receive your email
          address, the contents of your message, and any other
          information you voluntarily provide.
        </p>

        <p>
          Our hosting provider and technical systems may also
          process technical information associated with website
          requests, such as IP addresses, browser type, device
          information, requested pages, and request timestamps,
          where collected for website delivery, troubleshooting,
          and security.
        </p>

        <h2>2. How We May Use Information</h2>

        <p>
          Information may be used for the following purposes:
        </p>

        <ul>
          <li>To respond to questions, feedback, and corrections.</li>
          <li>To maintain and improve our website and its content.</li>
          <li>To identify technical problems and protect website security.</li>
          <li>To understand website performance where analytics tools are used.</li>
          <li>
            To display and measure advertisements if advertising
            services are enabled.
          </li>
          <li>To comply with applicable legal obligations.</li>
        </ul>

        <h2>3. Cookies and Similar Technologies</h2>

        <p>
          Cookies are small files that websites may store in
          your browser. Similar technologies may also be used
          to support website functionality, measure traffic,
          improve security, or deliver and measure advertisements.
        </p>

        <p>
          Depending on the services enabled on this website,
          cookies or similar technologies may be provided by
          Future AI, our hosting provider, analytics providers,
          or advertising partners.
        </p>

        <p>
          You can manage or delete cookies through your browser
          settings. Blocking certain cookies may affect how some
          website features or third-party services work.
        </p>

        <h2>4. Google AdSense and Advertising</h2>

        <p>
          Future AI may use Google AdSense or other advertising
          services to display advertisements if these services
          are approved and enabled.
        </p>

        <p>
          When Google advertising services are used, Google and
          its partners may use cookies, web beacons, IP addresses,
          or similar technologies to serve advertisements,
          measure advertising performance, limit repeated ads,
          prevent invalid activity, and support advertising
          personalisation where permitted by applicable settings
          and consent requirements.
        </p>

        <p>
          Third-party vendors, including Google, may use
          information from a visitor's current or previous visits
          to this website or other websites to provide advertising.
          The technologies and information used depend on the
          advertising services, user settings, and applicable
          requirements.
        </p>

        <p>
          If advertising is enabled, visitors can learn how Google
          uses information on partner websites by visiting:
        </p>

        <ul>
          <li>
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              How Google uses information for advertising
            </a>
          </li>

          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google's Privacy Policy
            </a>
          </li>
        </ul>

        <h2>5. Advertising Preferences</h2>

        <p>
          Visitors can review or manage their Google advertising
          preferences through Google's Ads Settings. Available
          choices may depend on the visitor's location, account,
          browser, and device.
        </p>

        <p>
          Manage Google advertising preferences here:
          {" "}
          <a
            href="https://adssettings.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>.
        </p>

        <p>
          Visitors may also manage cookies through their browser
          settings. Disabling personalised advertising does not
          necessarily prevent all advertising or all data processing
          associated with advertising.
        </p>

        <h2>6. Analytics and Website Performance</h2>

        <p>
          If analytics services are introduced, they may process
          information about website visits, page views, browser
          types, and interactions to help us understand website
          performance and improve the visitor experience.
        </p>

        <p>
          We will update this policy if the analytics services
          used on the website require additional disclosures.
        </p>

        <h2>7. Third-Party Websites and Services</h2>

        <p>
          Our articles may link to external websites, research
          organisations, and other resources. When you follow
          an external link, that website's own privacy policy
          and terms may apply.
        </p>

        <p>
          We do not control the privacy practices, content,
          or security of external websites. Please review their
          policies before providing personal information.
        </p>

        <h2>8. Sharing of Information</h2>

        <p>
          We do not sell personal information that you directly
          provide to us through email. Information may be processed
          or shared with service providers when reasonably necessary
          to operate the website, respond to requests, maintain
          security, provide enabled services, or comply with legal
          obligations.
        </p>

        <p>
          Third-party advertising or analytics services, if enabled,
          may process information according to their own policies
          and the settings or consent applicable to their services.
        </p>

        <h2>9. Data Security and Retention</h2>

        <p>
          We take reasonable steps to protect information under
          our control. However, no website, internet transmission,
          or electronic storage method can be guaranteed to be
          completely secure.
        </p>

        <p>
          We retain information for as long as reasonably necessary
          to respond to communications, maintain website security,
          provide services, or meet applicable legal obligations.
          Retention periods may vary depending on the type of
          information and the service involved.
        </p>

        <h2>10. Children's Privacy</h2>

        <p>
          Future AI provides general educational information about
          artificial intelligence and technology. Our website is
          not specifically directed at children under 13.
        </p>

        <p>
          If you believe a child has provided personal information
          to us inappropriately, please contact us so that we can
          review the matter and take appropriate action.
        </p>

        <h2>11. Your Privacy Choices and Rights</h2>

        <p>
          Depending on your location and applicable law, you may
          have rights to request access to, correction of, or
          deletion of certain personal information, or to object
          to or restrict certain processing.
        </p>

        <p>
          To ask a privacy-related question or submit a request,
          contact us using the email address on our Contact page.
          We may need to verify your request before taking action.
        </p>

        <h2>12. Changes to This Privacy Policy</h2>

        <p>
          We may update this Privacy Policy when our website,
          services, advertising arrangements, or legal obligations
          change. The revised policy will be published on this page
          with an updated date.
        </p>

        <h2>13. Contact Us</h2>

        <p>
          If you have questions about this Privacy Policy or how
          information is handled on Future AI, please contact us
          by email:
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:futureai.content2026@gmail.com">
            futureai.content2026@gmail.com
          </a>
        </p>

        <p>
          You can also visit our{" "}
          <a href="/contact">Contact page</a>.
        </p>
      </article>
    </main>
  );
}