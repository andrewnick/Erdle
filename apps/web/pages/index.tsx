import { useRef } from "react";
import { SyntheticEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import links from "../data/links";
import usePWAInstaller from "../hooks/usePWAInstaller";

export default function Web() {
  // const [showButton, handlePWAInstall] = usePWAInstaller();
  const deferredPrompt = useRef<BeforeInstallPromptEvent>(null);
  const [showButton, setShowButton] = useState(false);

  const list = {
    padding: "0",
  };

  const buttonDisplay = {
    display: showButton ? "display" : "none",
  };

  const listItem = {
    padding: "10px",
  };

  const handleInstallPrompt = (e) => {
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

  const handlePWAInstall = () => {
    // hide our user interface that shows our A2HS button
    setShowButton(false);
    // Show the prompt
    deferredPrompt?.current?.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt?.current?.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt.current = null;
    });
  };

  return (
    <div>
      <header>
        <div>
          <h1>Erdle</h1>
          <p>Bringing all your &quot;erdle&quot; games into one place</p>
        </div>
        <div>
          <button onClick={handlePWAInstall} style={buttonDisplay}>
            Add to home screen
          </button>
        </div>
      </header>

      <ul style={list}>
        {links.map(({ title, link }, index) => (
          <li style={listItem} key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
