import {MdDeleteSweep} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item}) => {             // cart ke ander ka itemko humiss tarah lekr aayegge 
  const dispatch = useDispatch();

  const removeFromCart = () => {          // remove kese krege cart ke ande wale item ko ouska logic 
    dispatch(remove(item.id)); 
    toast.error("Item Removed");
  }

  /// cart item ko banayege 

  return (
    <div className="p-4 border-b-2 last:border-none border-slate-700">

      <div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">

        <div className="md:w-[30%] w-full flex justify-center items-center">
          <img src={item.image} alt="" className="w-[40%] md:w-[50%] lg:w-full"/>     {/* item ki image banaye  */}
        </div>
        <div className="md:w-[70%] w-full flex flex-col gap-5">
          <h1 className="text-xl font-[600] text-slate-700">{item.title}</h1>      {/* item ka title laye */}
          <h1 className="text-slate-700">{
            item.description.split(" ").slice(0,15).join(" ") + "..."}                {/* item ka description  */}
          </h1>
          <div className="flex justify-between">
            <p className="font-bold text-[#16a34a] text-lg">${item.price}</p>       {/* item ki price */}
            <div
            onClick={removeFromCart}                                                   // iconn delete wala 
            className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center
             hover:bg-red-400 group transition-all">
              <MdDeleteSweep fontSize={25} className="group-hover:text-white text-red-800 transition-all"/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
