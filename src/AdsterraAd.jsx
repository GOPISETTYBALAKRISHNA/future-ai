import { useEffect, useRef } from "react";

const AD_KEY = "e35f37e418a7eb6e5b9362ace3dbae69";
let adInstanceCount = 0;

export default function AdsterraAd() {
  const adRef = useRef(null);
  const instanceId = useRef(null);

  if (instanceId.current === null) {
    adInstanceCount += 1;
    instanceId.current = adInstanceCount;
  }

  useEffect(() => {
    const container = adRef.current;
    if (!container) return;

    container.replaceChildren();

    const wrapper = document.createElement("div");
    wrapper.id = `adsterra-slot-${instanceId.current}`;
    wrapper.style.width = "300px";
    wrapper.style.height = "250px";

    container.appendChild(wrapper);

    const configScript = document.createElement("script");
    configScript.textContent = `
      window.atOptions = {
        key: "${AD_KEY}",
        format: "iframe",
        height: 250,
        width: 300,
        params: {}
      };
    `;

    const adScript = document.createElement("script");
    adScript.src = `https://bauval.org/22/${AD_KEY}`;
    adScript.async = true;

    wrapper.append(configScript, adScript);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={adRef}
      style={{
        width: "100%",
        maxWidth: "300px",
        minHeight: "250px",
        margin: "24px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
      aria-label="Advertisement"
    />
  );
}