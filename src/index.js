import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Content from './Components/Content.tsx'
import About from "./pages/About/index.tsx";
import FakeProject from './pages/FakeProject/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/fakeproject",
    element: <FakeProject />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

