import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
import MobileAlert from "@/components/mobile-alert";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

function useMobileDetection() {
  const [shouldRenderMobileAlert, setShouldRenderMobileAlert] = useState(false);

  const isMobileOrTablet = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (isMobileOrTablet) {
      setShouldRenderMobileAlert(true);
    } else {
      console.log("Desktop screen detected");
    }
  }, [isMobileOrTablet]);

  return shouldRenderMobileAlert;
}

export default function App({ Component, pageProps }: AppProps) {
  const shouldRenderMobileAlert = useMobileDetection();

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {shouldRenderMobileAlert ? <MobileAlert /> : <Component {...pageProps} />}

    </>
  );
}
