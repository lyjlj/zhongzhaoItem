import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Activty from './pages/activty';
import Development from './pages/development';
import Home from './pages/Home';
import Introduce from './pages/Introduce';
import Qxjj from './pages/qxjj';
import Tzyj from './pages/tzyj';
import Zzry from './pages/zzry';

export const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "introduce",
    element: <Introduce />,
  },
  {
    path: "activity",
    element: <Activty />,
  },
  {
    path: "development",
    element: <Development />,
  },
  {
    path: "qxjj",
    element: <Qxjj />,
  },
  {
    path: "tzyj",
    element: <Tzyj />,
  },
  {
    path: "zzry",
    element: <Zzry />,
  },
]);