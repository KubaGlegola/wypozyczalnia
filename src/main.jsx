import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './global-styles/index.scss';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/homePage/HomePage';
import Offer from './pages/offer/Offer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/oferta',
        element: <Offer />,
      },
      {
        path: '/kontakt',
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
