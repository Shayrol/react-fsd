import { createBrowserRouter } from "react-router-dom";
import BoardsPage from "../pages/boards/ui";
import { HomePage } from "../pages/home";
import { TestAPage } from "../pages/testA";
import { TestBPage } from "../pages/testB";
import { Layout } from "../widgets/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout을 감싸서 Navbar, Footer 유지
    children: [
      { index: true, element: <HomePage /> },
      { path: "testA", element: <TestAPage /> },
      { path: "testB", element: <TestBPage /> },
      { path: "boards", element: <BoardsPage /> },
    ],
  },
]);
