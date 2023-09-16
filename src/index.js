

import './index.css';
import "./App.css"
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import MainPage from './components/addLinks/mainPage';
import ProfilePage from './components/profile/ProfilePage';
import Preview from './components/Preview/Preview';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import App from './App.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/Profile",
    element: <ProfilePage />,
  },
  {
    path: "/Privew",
    element: <Preview/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);