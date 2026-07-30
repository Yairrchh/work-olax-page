import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { ContactUsPage } from '../Pages/ContactUsPage'
import { ProductsPage } from '../Pages/ProductsPage'
import { UsPage } from '../Pages/UsPage'
import { NotFound } from '../Pages/NotFound'
import { HowToBuySection } from '../Pages/HowToStock'
import { SuppliersPage } from '../Pages/SlupplierList'
import './App.css'
import { Navbar } from '../Components/Navbar'
import { OlaxPageProvider } from '../Context'

const AppRoutes = () => {
  let routes = useRoutes([
      {path: '/', element: <Home/>},
      {path: '/us-page', element: <UsPage/>},
      {path: '/products', element: <ProductsPage/>},
      {path: '/contact', element: <ContactUsPage/>},
      {path: '/how-to-buy', element: <HowToBuySection/>},
      {path: '/suppliers-list', element: <SuppliersPage/>},
      {path: '/*', element: <NotFound/>},
  ]);
  return routes
}

function App() {

  return (
    <OlaxPageProvider>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
      </BrowserRouter>
    </OlaxPageProvider>
  )
}

export default App
