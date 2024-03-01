import { ShopPage } from '@pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <ShopPage />,
  },
]);
