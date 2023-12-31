import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import index from './styles/index.css';

function Main() {

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);