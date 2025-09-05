import { createBrowserRouter, redirect } from 'react-router';
import Login from './layouts/Login';
import Main from './layouts/Main';

const requireAuth = async () => {
  console.log("🚀 ~ requireAuth ~ requireAuth:", 123123)

  throw redirect('/login'); 
  
}
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    loader: requireAuth,
    children: [
      {
        index: true,
        element: <div>欢迎页面</div>
      },
    ]
  },
  {
    path: '/login',
    Component: Login
  },
  // 404 页面
  {
    path: '*',
    element: <div>页面未找到</div>
  }
]);