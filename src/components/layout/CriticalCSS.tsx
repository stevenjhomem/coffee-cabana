export default function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical base styles */
        :root {
          --background: #ffffff;
          --foreground: #171717;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --background: #0a0a0a;
            --foreground: #ededed;
          }
        }
        body {
          background: var(--background);
          color: var(--foreground);
          font-family: Arial, Helvetica, sans-serif;
          margin: 0;
          padding: 0;
          border: none;
          outline: none;
        }
        html {
          margin: 0;
          padding: 0;
          border: none;
          outline: none;
        }
        *, *::before, *::after {
          box-sizing: border-box;
        }
        video {
          object-fit: cover;
          object-position: center;
        }
        video::-webkit-media-controls,
        video::-webkit-media-controls-enclosure {
          display: none !important;
        }
        video[poster] {
          object-fit: cover;
          object-position: center;
        }
        .no-translate {
          -webkit-translate: no;
          translate: no;
        }
        .brand-name {
          -webkit-translate: no !important;
          translate: no !important;
        }
      `
    }} />
  )
}
