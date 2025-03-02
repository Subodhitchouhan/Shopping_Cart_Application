import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>   {/* define kiya Navbar ko  */}
        </div>
        <Routes>  {/* outes define kiye  */}
          <Route path="/" element={<Home/>} />    {/* ye humara home page ka route hai  */}
          <Route path="/cart" element={<Cart/>} />  {/* ye humara cart page ka route hai  */}
        </Routes>
  </div>)
};

export default App;
