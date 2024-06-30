import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './ui/styles/index.css'
import { Provider } from 'react-redux'
import store from './model/redux/store.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.tsx'
import Products from './pages/products/Products.tsx'
import { register } from 'swiper/element/bundle';
import ProductDetails from './pages/productDetails/ProductDetails.tsx'
import Cart from './pages/cart/Cart.tsx'

register();

const router = createBrowserRouter([{
  element: <App />,
  path: '/',
  children: [
    {path: '/', element: <Home />},
    {path: '/products', element: <Products />},
    {path: '/products/:productId', element: <ProductDetails />},
    {path: '/cart', element: <Cart />},
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)