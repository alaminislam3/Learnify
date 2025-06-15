import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import AllArticles from './Pages/AllArticles';
import PostArticle from './Pages/PostArticle';
import MyArticles from './Pages/MyArticles';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {index: true , Component: Home},
      {path: '/allarticles' , Component: AllArticles},
      {path: '/postarticle' , Component: PostArticle},
      {path: '/myarticles' , Component: MyArticles},
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
