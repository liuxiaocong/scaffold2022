import React from 'react';
import router from 'router';
import {
    RouterProvider,
} from 'react-router-dom';
import 'styles/variable.css';
import 'styles/reset.css';

import 'antd/dist/antd.css';

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
