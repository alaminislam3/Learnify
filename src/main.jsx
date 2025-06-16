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
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Context/AuthProvider';

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
  {path: '*' , Component: NotFound},
  {path: '/login' , Component: Login},
  {path: '/register' , Component: Register},
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </StrictMode>,
)
