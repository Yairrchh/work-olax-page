import { BrowserRouter, useRoutes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Home } from '../Pages/Home'
import { ContactUsContent } from '../Pages/ContactUsPage'
import { ProductsPage } from '../Pages/ProductsPage'
import { ProductDetailPage } from '../Pages/ProductDetailPage'
import { UsPageContent } from '../Pages/UsPage'
import { NotFound } from '../Pages/NotFound'
import { HowToBuySection } from '../Pages/HowToStock'
import { SuppliersPage } from '../Pages/SlupplierList'
import { Login } from '../Pages/Login'
import './App.css'
import { Navbar } from '../Components/Navbar'
import { Layout } from '../Components/Layout'
import { OlaxPageProvider } from '../Context'

const ContactAndUsPage = () => (
  <Layout>
    <ContactUsContent/>
    <UsPageContent/>
  </Layout>
)

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
      {path: '/us-page', element: <ContactAndUsPage/>},
      {path: '/products', element: <ProductsPage/>},
      {path: '/product/:id', element: <ProductDetailPage/>},
      {path: '/contact', element: <ContactAndUsPage/>},
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
        <main className="pb-16 lg:pb-0">
          <AppRoutes/>
        </main>
      </BrowserRouter>
    </OlaxPageProvider>
  )
}

export default App
