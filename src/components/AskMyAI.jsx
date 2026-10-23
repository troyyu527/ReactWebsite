import React, { useEffect, useRef, useState } from 'react';
import '../css/askmyai.css';

// Floating "Ask my AI" button on every page: opens Troy's AI assistant (the MyAIPersona app) in a panel.
// The iframe is created on the first open only, so the portfolio's first load is unchanged.
// Dev (`npm start`) uses the local assistant; set REACT_APP_ASK_AI_URL to override.
const ASK_AI_URL =
  process.env.REACT_APP_ASK_AI_URL ||
  (process.env.NODE_ENV === 'development'
    ? 'http://localhost:5173/?embed=1'
    : 'https://troyyu527.github.io/MyAIPersona/?embed=1');

function AskMyAI() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const fabRef = useRef(null);
  const closeRef = useRef(null);

  const openPanel = () => {
    setLoaded(true);
    setOpen(true);
  };
  const closePanel = () => setOpen(false);
  const wasOpen = useRef(false);

  useEffect(() => {
    // After closing, give focus back to the button (it is hidden while the panel is open).
    if (!open && wasOpen.current) fabRef.current?.focus();
    wasOpen.current = open;
    if (!open) return undefined;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') closePanel();
    };
    window.addEventListener('keydown', onKey);
    document.body.classList.add('askai-open'); // stops the page scrolling behind the full-screen panel on phones
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('askai-open');
    };
  }, [open]);

  return (
    <>
      <div
        id="askai-panel"
        className={`askai-panel${open ? ' is-open' : ''}`}
        role="dialog"
        aria-label="Ask my AI — Troy's AI assistant"
        aria-hidden={!open}
      >
        <div className="askai-bar">
          <span className="askai-title">Ask my AI</span>
          <button ref={closeRef} type="button" className="askai-close" onClick={closePanel} aria-label="Close the AI assistant">
            ×
          </button>
        </div>
        {loaded && <iframe className="askai-frame" title="Troy's AI assistant" src={ASK_AI_URL} allow="fullscreen" />}
      </div>
      <button
        ref={fabRef}
        type="button"
        className={`askai-fab${open ? ' is-hidden' : ''}`}
        onClick={openPanel}
        aria-expanded={open}
        aria-controls="askai-panel"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M4 4h16v13H9l-5 4z" />
        </svg>
        Ask my AI
      </button>
    </>
  );
}

export default AskMyAI;
