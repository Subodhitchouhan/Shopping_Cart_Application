import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

  const {cart} = useSelector((state) => state);  // useSelector hook ka use krke mene iss tarah cart ka data find krliya 
  console.log("Printing Cart");  
  console.log(cart);                            // issse cart ka data console me print hojyega 
  const [totalAmount, setTotalAmount] = useState(0);  //useState hook ka ue kiya cart ke ander jitne bhi item hai ouske totalAmout ko set krne ke liye 

  useEffect( () => {   //cart ke ander jb bhi koi change hoga 
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );   // total amount hm isss tarah se calculate krege using reduce function 
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ?    // condition  agar cart ki length non empty hai 
    
    (<div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">

      <div className="lg:w-[70%]">
        {  // if condition is true hai toh sari ki sari cartitem ko diplay krdo 
          cart.map( (item,index) => {    // map funtion ka use kiya jise jo bhi cartitem ko humne add to cart kiya hai wo display hojaye 
            return <CartItem key={item.id} item={item} itemIndex={index} />  // cart item component display hoga 
          } )
        }
      </div>

        {/* ye bhi chalega same condition prr pass wala box summary wala */}

      <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">

        <div className="mt-20">
          <p className="text-xl text-[#166534] uppercase font-[600]">Your Cart</p>  {/*  ye heading hai  */}
          <p className="text-5xl font-[600] text-[#15803d] uppercase mb-4">Summary</p>  {/* ye bhi heading hai  */}
          <p className="font-[600] text-xl text-slate-700">
            Total Items: <span className="font-normal">{cart.length}</span>    {/* ye total item dikahayega count ki kitni itemss hai jo cart me hai */}
          </p>
        </div>

        <div className="mb-20">
          <p className="text-slate-700 text-xl font-[600] mb-5 ">Total Amount: 
            <span className="font-bold ml-2 text-black">${totalAmount.toFixed(2)}</span>   {/* is tarah hum total amoont dikhayege  */}
          </p>
          <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
          border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in">
            CheckOut Now    {/* checkout now ka button haiii  */}
          </button>
        </div>

      </div>

      {/* if condition is false then this will show  */}
          
    </div>) : 
    (<div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
      <h1 className="font-[600] text-xl">Your Cart is Empty !</h1>    {/* heading  */} 
      <Link to={"/"}>
        <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">
          Shop Now                                     {/* shop now ka button ispr click krne ese hum home page pr pahuch jate hai */}
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
