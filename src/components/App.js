import React from 'react';
import { createRoot } from "react-dom/client";
import '../../static/css/App.css';
import HomePage from '../views/HomePage';

const container = document.getElementById('app');
const root = createRoot(container);

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

root.render(<App />)
export default App;


