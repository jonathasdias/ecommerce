import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import Home from './pages/home/Home.tsx'
import Products from './pages/products/Products.tsx'
import ProductDetails from './pages/productDetails/ProductDetails.tsx'
import Cart from './pages/cart/Cart.tsx'
import ProductsByCategory from './pages/productsByCategory/ProductsByCategory.tsx'

import { Provider } from 'react-redux'
import store from '@redux/store.ts'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { register } from 'swiper/element/bundle';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import './ui/styles/index.css'

register();

const queryClient = new QueryClient();

const router = createBrowserRouter([{
  element: <App />,
  path: '/',
  children: [
    {path: '/', element: <Home />},
    {path: '/products', element: <Products />},
    {path: '/products/:productId', element: <ProductDetails />},
    {path: '/products/categories', element: <ProductsByCategory />},
    {path: '/cart', element: <Cart />},
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)