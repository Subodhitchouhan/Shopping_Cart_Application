import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {  // onClick function jb addToCart wale button pr click krege  
    dispatch(add(post));  // isse postka data add hojyega cart me // mtlb cart wale page  me 
    toast.success("Item added to Cart");  // isse toast dikhega add to cart wala
  }

  const removeFromCart = () => {  //onClick function jb cart me particular post ad hojyegi toh wahan se remove krne ke liye  
    dispatch(remove(post.id));    //ye jo post cart me add hui hai ousko remove krdega  
    toast.error("Item removed from Cart"); // ye toast show hoga 
  }

  return (
    <div className="flex flex-col items-center justify-between w-full gap-3 p-4 rounded-xl 
    border-2 border-[#00095] shadow-lg hover:shadow-2xl hover:scale-[1.03]
    md:hover:scale-[1.05] transition ease-in">
      <div>
        <p className="text-[#1d783e] font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}     {/* post me jo title naam key ke ander j vakue hai wo dikha do  */}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0,10).join(" ") + "..."}     {/* post me jo description pada hai wo dikha do  */} {/* description ko split krege based on space ... phir 0 se 10 ek words dikha do ....pir ouske last me join krdo ye teen dots ...  */}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full" alt=""/>   {/* post ki imag dikha do  */}
      </div>

      <div className="flex justify-between items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>   {/* post ki prize dikha do  */}
        </div>
        
        {   // 2 button mese ek button dikhaoge product me 

          cart.some((p) => p.id === post.id) ?   //jo current item jahan hum stand krr rhe hai wo cart ke ander present hai  ki nhi // wo check krege hum iss condition se 
          (<button   // if condition is true hai toh ye button show hoga remove cart wala 
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={removeFromCart}>    {/* jb remove cart wale button pr click krege toh ye OnClick function run hoga */}
            Remove Item
          </button>) :
          (<button     // if condition is false thenn add to cart wala button show hoga
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={addToCart}>   {/* jb add to cart wale button pr click krege toh ye onClick function chalega   */}
            Add to Cart 
          </button>)
        }
      </div>
     

    </div>
  );
};

export default Product;
