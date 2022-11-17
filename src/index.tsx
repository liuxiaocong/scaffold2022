import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Page/Template';
import 'antd/dist/antd.css';
import './reset.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(<Page />);
