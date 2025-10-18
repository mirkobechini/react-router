
import { BrowserRouter, Routes, Route } from "react-router-dom"
//pages
import Homepage from "./pages/Homepage"
import AboutUsPage from "./pages/AboutUsPage"
import ProductsPage from "./pages/ProductsPage"
import ProductPage from "./pages/ProductPage"
import DefaultLayout from "./layouts/DefaultLayout"

//api
const productsEP = "https://fakestoreapi.com/products"


function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>} >
          <Route index element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage productsEP={productsEP} />} />
          <Route path="/products/:id" element={<ProductPage/>} />
        </Route>


      </Routes>
    </BrowserRouter>

  )
}

export default App
