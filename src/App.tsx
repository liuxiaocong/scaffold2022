import React from 'react';
import router from 'router';
import {
    RouterProvider,
} from 'react-router-dom';
// import 'antd/dist/antd.css';
import './variable.css';
import r from './styles/reset.css';

const App = () => {
    return (
        <>
            <h1 className={r.reset}>Title</h1>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
