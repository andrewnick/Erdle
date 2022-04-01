import { SyntheticEvent } from "react";
import { MouseEvent } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const usePWAInstaller = () => {
  const deferredPrompt = useRef<BeforeInstallPromptEvent>(null);
  const [showButton, setShowButton] = useState(false);

  const handleInstallPrompt = (e: BeforeInstallPromptEvent) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();

    // Stash the event so it can be triggered later.
    deferredPrompt.current = e;

    // Update UI to notify the user they can add to home screen
    setShowButton(true);
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleInstallPrompt);
    return () =>
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
  }, []);

  const handlePWAInstall = (e: MouseEvent<HTMLButtonElement>) => {
    // hide our user interface that shows our A2HS button
    setShowButton(false);
    // Show the prompt
    deferredPrompt.current.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.current.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt.current = null;
    });
  };

  return [showButton, handlePWAInstall];
};

export default usePWAInstaller;
