import ReactDOM from 'react-dom/client';
import { QueryProvider } from './providers/Query';
import { Router } from './providers/Router';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('root element not found');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <QueryProvider>
    <Router />
  </QueryProvider>
);
