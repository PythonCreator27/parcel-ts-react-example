import ReactDOM from 'react-dom';
import { App } from './App';
import './styles/tailwind.css';

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(<App />);
}
