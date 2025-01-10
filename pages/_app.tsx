import "@/styles/service.css";
import "@/styles/globals.css";
import "@/styles/tower.css";
import "@/styles/contact.css";
import "@/styles/lobal.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
