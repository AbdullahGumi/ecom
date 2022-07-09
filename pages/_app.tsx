import "../styles/globals.css";
import type { AppProps } from "next/app";

//redux
import { Provider } from "react-redux";
import { store } from "../redux/store";

import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
      <Toaster />
    </Provider>
  );
}

export default MyApp;
