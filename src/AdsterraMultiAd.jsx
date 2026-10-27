import { useMemo } from "react";

const AD_CODES = {
  native: {
    width: "100%",
    height: 250,
    maxWidth: 728,
    isNative: true,
    html: `<div id="container-d4df6db4d45b7bc7ad2ec785f8bd2ac9"></div><script async="async" data-cfasync="false" src="https://bauval.org/21/d4df6db4d45b7bc7ad2ec785f8bd2ac9"><\/script>`,
  },
  banner320: {
    width: 320,
    height: 50,
    maxWidth: 320,
    key: "fcb7dc2b6936a414d390a17375dc8e94",
    src: "https://bauval.org/22/fcb7dc2b6936a414d390a17375dc8e94",
  },
  banner300: {
    width: 300,
    height: 250,
    maxWidth: 300,
    key: "e35f37e418a7eb6e5b9362ace3dbae69",
    src: "https://bauval.org/22/e35f37e418a7eb6e5b9362ace3dbae69",
  },
  banner728: {
    width: 728,
    height: 90,
    maxWidth: 728,
    key: "6d8b6bf67a925fc05304817e640e5432",
    src: "https://bauval.org/22/6d8b6bf67a925fc05304817e640e5432",
    isLeaderboard: true,
  },
};

export default function AdsterraMultiAd({ type }) {
  const ad = AD_CODES[type];

  const srcDoc = useMemo(() => {
    if (!ad) return "";

    if (ad.isNative) {
      return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 250px;
      background: transparent;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #container-d4df6db4d45b7bc7ad2ec785f8bd2ac9 {
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
  </style>
</head>
<body>
  ${ad.html}
</body>
</html>`;
    }

    return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : '${ad.key}',
      'format' : 'iframe',
      'height' : ${ad.height},
      'width' : ${ad.width},
      'params' : {}
    };
  <\/script>
  <script type="text/javascript" src="${ad.src}"><\/script>
</body>
</html>`;
  }, [ad]);

  if (!ad) {
    return null;
  }

  if (ad.isLeaderboard) {
    return (
      <div className="ad-leaderboard-wrapper" aria-label="Advertisement">
        <div className="ad-leaderboard-scaler">
          <iframe
            title={`Advertisement - ${type}`}
            srcDoc={srcDoc}
            width={ad.width}
            height={ad.height}
            loading="lazy"
            scrolling="no"
            className="ad-slot-frame"
            style={{ width: `${ad.width}px`, height: `${ad.height}px` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="ad-slot-container"
      style={{
        maxWidth: typeof ad.maxWidth === "number" ? `${ad.maxWidth}px` : ad.maxWidth,
      }}
      aria-label="Advertisement"
    >
      <iframe
        title={`Advertisement - ${type}`}
        srcDoc={srcDoc}
        width={ad.width}
        height={ad.height}
        loading="lazy"
        scrolling="no"
        className="ad-slot-frame"
        style={{
          width: typeof ad.width === "number" ? `${ad.width}px` : ad.width,
          height: `${ad.height}px`,
        }}
      />
    </div>
  );
}