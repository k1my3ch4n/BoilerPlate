import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@layout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '',
    Component: lazy(() => import('./pages/Main')),
  },
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: 'blog',
        Component: lazy(() => import('./pages/Blog')),
      },
      {
        path: 'blog/:postId',
        Component: lazy(() => import('./pages/BlogDetail')),
      },
    ],
  },
]);
