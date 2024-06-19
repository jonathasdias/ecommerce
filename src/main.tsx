import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './ui/styles/index.css'
import { Provider } from 'react-redux'
import store from './model/redux/store.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.tsx'
import About from './pages/about/About.tsx'
import Products from './pages/products/Products.tsx'
import { register } from 'swiper/element/bundle';
import ProductDetails from './pages/productDetails/ProductDetails.tsx'

register();

const router = createBrowserRouter([{
  element: <App />,
  path: '/',
  children: [
    {path: '/', element: <Home />},
    {path: '/about', element: <About />},
    {path: '/products', element: <Products />},
    {path: '/products/:productId', element: <ProductDetails />},
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)