import "../styles/normalize.css";
import "../styles/skeleton.css";

import "../styles/global.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}