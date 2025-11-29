import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'          // Tailwind styles
import Header from './components/Header/index.jsx'
import Home from './Pages/Home/index.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes> 
          <Route path={'/'} exact={true} element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
