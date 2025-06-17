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
import PrivateRoute from './Components/PrivateRoute';
import ArticleDetails from './Pages/ArticleDetails';
import CategoryList from './Components/CategoryList';
import CategoryPage from './Components/CategoryPage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {index: true , Component: Home},
      {path: '/allarticles' , Component: AllArticles},
      {path: '/postarticle' , 
        element : <PrivateRoute>
          <PostArticle></PostArticle>
           </PrivateRoute> 
        },
      {path: '/myarticles' ,
       element: <PrivateRoute>
           <MyArticles> </MyArticles>
      </PrivateRoute>},
      {path: '/article/:id' , Component: ArticleDetails},
       {
        path: '/categories' , Component: CategoryList
       },
       {
        path: '/category/:categoryName' , Component: CategoryPage
       }

      //       
// <Route path="/categories" element={<CategoryList />} />
// <Route path="/category/:categoryName" element={<CategoryPage />} />
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
