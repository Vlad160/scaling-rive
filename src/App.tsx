import { useCallback, useState } from "react";
import "./App.css";
import animationURL from "/scaling_rive.riv?url";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas-lite";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = useCallback(() => {
    setIsVisible((v) => !v);
  }, []);

  const { RiveComponent } = useRive({
    src: animationURL,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return (
    <div className="container">
      <button onClick={handleToggle}>Toggle</button>
      {isVisible && <RiveComponent />}
    </div>
  );
}

export default App;
