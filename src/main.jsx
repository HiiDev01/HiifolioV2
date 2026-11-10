import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/themes.css';
import './styles/global.css';
import './styles/navigation.css';
import './styles/grid.css';
import './styles/cards.css';
import './styles/responsive.css';

createRoot(document.getElementById('root')).render(<App />);
