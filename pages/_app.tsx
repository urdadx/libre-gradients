import { useEffect } from "react";
import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

function useMobileDetection() {
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        alert("Mobile device detected");
      }
    };

    handleResize(); // Initial check on component mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setTheme]);
}

export default function App({ Component, pageProps }: AppProps) {
  useMobileDetection();
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  );
}
