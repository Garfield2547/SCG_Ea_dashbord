import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Test from "./Pages/Test.jsx";

import Input_1 from "./Personnel/Input_1 ";
import Quit_1 from "./Personnel/Quit_1";
import CoT_C from "./Cost/CoT_C";
import Per_H from "./Personnel/Per_H";
import CoT_P from "./Cost/CoT_P";
import CoT_O from "./Cost/CoT_O";
import CoT_O_Op from "./Cost/CoT_O_Op";



const router = createBrowserRouter([

  {
    path:"/",
    element:<Per_H/>
  },
  {
    path:"/Input",
    element:<Input_1/>
  },
  {
    path:"/QUit",
    element:<Quit_1/>
  },
  {
    path:"/Cot",
    element:<CoT_C/>
  },
  {
    path:"/Cot_O",
    element:<CoT_O/>
  },
  {
    path:"/Cot_P",
    element:<CoT_P/>
  },
  {
    path:"/Cot_O_Op",
    element:<CoT_O_Op/>
  },
  
  
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
