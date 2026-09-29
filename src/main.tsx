// Ensure window.fetch has both getter and setter in iframe sandboxes
(function () {
  try {
    if (typeof window !== 'undefined') {
      let _fetch = window.fetch;
      const descriptor = {
        get: () => _fetch,
        set: (fn: typeof fetch) => {
          _fetch = fn;
        },
        configurable: true,
        enumerable: true,
      };
      try {
        Object.defineProperty(window, 'fetch', descriptor);
      } catch {}
      if (typeof Window !== 'undefined' && Window.prototype) {
        try {
          Object.defineProperty(Window.prototype, 'fetch', descriptor);
        } catch {}
      }
    }
  } catch {}
})();

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
