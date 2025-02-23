import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./widgets/layout";
import TestAPage from "./pages/testA/index";
import TestBPage from "./pages/testB/index";
import RootPage from "./features/HomPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout을 감싸서 Navbar, Footer 유지
    children: [
      { index: true, element: <RootPage /> },
      { path: "testA", element: <TestAPage /> },
      { path: "testB", element: <TestBPage /> },
    ],
  },
]);

export default function App() {
  // return <RootPage />;
  return <RouterProvider router={router} />;
}
