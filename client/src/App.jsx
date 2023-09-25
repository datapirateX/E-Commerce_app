import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
  Redirect
} from 'react-router-dom'
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index path='/' element={<Home />} />
    <Route path='/products/:catergory' element={<ProductList />} />
    <Route path='/product/:id' element={<Product />} />
    <Route path='/cart' element={<Cart />} />
    {/* <Route path='/login'>
      {user ? <Redirect to="/"/> : <Login />}
      </Route>
      <Route path='/register'>
      {user ? <Redirect to="/"/> : <Register />}
      </Route> */}
    

    </>

  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;