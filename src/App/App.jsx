import { BrowserRouter, useRoutes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Home } from '../Pages/Home'
import { ContactUsPage } from '../Pages/ContactUsPage'
import { ProductsPage } from '../Pages/ProductsPage'
import { ProductDetailPage } from '../Pages/ProductDetailPage'
import { UsPage } from '../Pages/UsPage'
import { NotFound } from '../Pages/NotFound'
import { HowToBuySection } from '../Pages/HowToStock'
import { SuppliersPage } from '../Pages/SlupplierList'
import { Login } from '../Pages/Login'
import './App.css'
import { Navbar } from '../Components/Navbar'
import { OlaxPageProvider } from '../Context'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppRoutes = () => {
  let routes = useRoutes([
      {path: '/', element: <Home/>},
      {path: '/us-page', element: <UsPage/>},
      {path: '/products', element: <ProductsPage/>},
      {path: '/product/:id', element: <ProductDetailPage/>},
      {path: '/contact', element: <ContactUsPage/>},
      {path: '/how-to-buy', element: <HowToBuySection/>},
      {path: '/suppliers-list', element: <SuppliersPage/>},
      {path: '/login', element: <Login/>},
      {path: '/*', element: <NotFound/>},
  ]);
  return routes
}

function App() {

  return (
    <OlaxPageProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <AppRoutes/>
      </BrowserRouter>
    </OlaxPageProvider>
  )
}

export default App
