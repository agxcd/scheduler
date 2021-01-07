import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (!replace) {
      setMode(mode);
      setHistory([...history, newMode]);
    }
    setMode(newMode);
  };

  const back = () => {
    if (history[history.length - 1] !== initial) {
      let previous = history.pop();
      setHistory([...previous]);
      setMode(history[history.length - 1]);
    }
  };

  return { mode, transition, back };
}
