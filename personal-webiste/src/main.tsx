import React from 'react';
import { createRoot } from 'react-dom/client';

// simple root component; you can expand this or import from other files
const App: React.FC = () => {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Welcome to the Vite React app!</h1>
      <p>Start editing <code>src/main.tsx</code> to get going.</p>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Root element not found');
}
