import React from 'react';
import Home from './views/Home/Home.jsx';
import '../src/styles/Main.css';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Home />);
