
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homepage from "./pages/Homepage"
import AboutUsPage from "./pages/AboutUsPage"
import ProductsPage from "./pages/ProductsPage"

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/products" element={<ProductsPage />} />


            </Routes>
          </BrowserRouter>

          )
}

export default App
