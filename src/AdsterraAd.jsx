import { useEffect, useRef } from "react";

export default function AdsterraAd() {
const adRef = useRef(null);

useEffect(() => {
if (!adRef.current) return;

adRef.current.innerHTML = "";

const configScript = document.createElement("script");
configScript.text = `
  atOptions = {
    key: "e35f37e418a7eb6e5b9362ace3dbae69",
    format: "iframe",
    height: 250,
    width: 300,
    params: {}
  };
`;

const adScript = document.createElement("script");
adScript.src =
  "https://bauval.org/22/e35f37e418a7eb6e5b9362ace3dbae69";
adScript.async = true;

adRef.current.appendChild(configScript);
adRef.current.appendChild(adScript);

return () => {
  if (adRef.current) adRef.current.innerHTML = "";
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