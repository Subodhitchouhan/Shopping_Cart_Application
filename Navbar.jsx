import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className="ml-5">
          <img src="../logo.png" className="lg:h-14 md:h-10 h-8" alt=""/>  {/* image hai jisko clickkrne pr home page pr ja rhe hai  */}
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p>Home</p>        {/* home wali link jisko click krege toh home wale page pr pahch jayege */}
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>  { /* ye cart wala icon hai jisko click krege toh cart ke ander chale jayege  */ }
                  {
                    cart.length > 0 &&  // agar cart ki length 0 se jada hai tohh
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex          {/* hara gola */}
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>     //ouske ander kitne item humne cart ke ander bheje hai wo show hoga 
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
