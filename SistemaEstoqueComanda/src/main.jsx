import {hydrateRoot} from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');

// Create *and* render a root with hydration.
const root = hydrateRoot(rootElement, <App />);
// Unlike with createRoot, you don't need a separate root.render() call here
