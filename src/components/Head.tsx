import ReactDOM from 'react-dom';

export const Head: React.FC = ({ children }) => {
    return ReactDOM.createPortal(children, document.head);
};
