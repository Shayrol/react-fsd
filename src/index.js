import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import TestAPage from "./pages/testA";
// import TestBPage from "./pages/testB";
// import Layout from "./widgets";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // Layout을 감싸서 Navbar, Footer 유지
//     children: [
//       { index: true, element: <App /> },
//       { path: "testA", element: <TestAPage /> },
//       { path: "testB", element: <TestBPage /> },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
