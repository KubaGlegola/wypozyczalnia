import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './global-styles/index.scss';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/homePage/HomePage';
import OfferPage from './pages/OfferPage/OfferPage';
import FaqPage from './pages/FaqPage/FaqPage';
import RegulationsPage from './pages/RegulationsPage/RegulationsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';

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
        element: <OfferPage />,
        children: [
          {
            path: ':category',
            element: <OfferPage />,
          },
        ],
      },
      {
        path: '/kontakt',
        element: <ContactPage />,
      },
      {
        path: '/faq',
        element: <FaqPage />,
      },
      {
        path: '/regulamin',
        element: <RegulationsPage />,
      },
      {
        path: '/politykaprywatnosci',
        element: <PrivacyPolicyPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
