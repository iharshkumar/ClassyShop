import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'          // Tailwind styles
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';
import Home from './Pages/Home/index.jsx';
import ProductListing from './Pages/ProductListing/index.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes> 
          <Route path={'/'} exact={true} element={<Home />} />
          <Route path={'/productListing'} exact={true} element={<ProductListing/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
