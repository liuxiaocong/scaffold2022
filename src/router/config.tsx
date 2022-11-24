import React from 'react';
import { PATH } from 'constants/path';
import Template from 'pages/TemplatePage';
import Home from 'pages/HomePage';
import New from 'pages/NewsPage';
import { RouteObject } from 'react-router-dom';

const ROUTERS: RouteObject[] = [
    {
        path: PATH.TEMPLATE,
        element: <Template />,
    },
    {
        path: PATH.New,
        element: <New />,
    },
    {
        path: PATH.HOME,
        element: <Home />,
    },
];

export {
    PATH,
    ROUTERS,
};
