import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 

import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import AllArticles from "./Pages/AllArticles";
import PostArticle from "./Pages/PostArticle";
import MyArticles from "./Pages/MyArticles";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute";
import ArticleDetails from "./Pages/ArticleDetails";
import CategoryList from "./Components/CategoryList";
import CategoryPage from "./Components/CategoryPage";


const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      { index: true, element: <Home /> },
      { path: "/allarticles", element: <AllArticles /> },
      {
        path: "/postarticle",
        element: (
          <PrivateRoute>
            <PostArticle />
          </PrivateRoute>
        ),
      },
      {
        path: "/myarticles",
        element: (
          <PrivateRoute>
            <MyArticles />
          </PrivateRoute>
        ),
      },
      { path: "/article/:id", element: <ArticleDetails /> },
      { path: "/categories", element: <CategoryList /> },
      { path: "/category/:categoryName", element: <CategoryPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

// ✅ Render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
