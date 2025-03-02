import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";  // humari API URL 
  const [loading, setLoading] = useState(false);       // Loading screen ke liye 
  const [posts, setPosts] = useState([]);             // sara data post wale var ke ander store krwa liya using useState hook 

  async function fetchProductData() {   //async function likha hai iska kaam hai loading ko true or false krna
    setLoading(true);

    try{
      const res = await fetch(API_URL);  //url mese data ko fetch krna
      const data = await res.json();     //isko json format me convert krna 

      setPosts(data);    // data ko dikhana 
    }
    catch(error) {     //agar error aagya tohhh 
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {      // useEffect ka use krke jb hum pheli baar render krege tb ye function call ho jayega 
    fetchProductData();   
  },[])

  return (
    <div>
      {
        loading ? <Spinner />  :   //agar loading true hai toh Spinner ko dikha do
        posts.length > 0 ?        //agar post ki length 0 se jada hai //mtlb post wale array me sara data aagya hai 
        (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
        gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]">
          {                        // toh hum pure data ko show krwayege jiske humne card banaye hai using map function 
            posts.map( (post) => (      //iss tarah se map function ka use krke hum sara post ke ander ka jo data humko mila hai url mese fetch krek wo hum display krwa denge UI pr 
            <Product key = {post.id} post={post}/>  // 1 product ka card component hum banaye hai // taki sara data card ke form me display ho //esa krne ke liye map function ka use kiya 
          ) )
          }
        </div>) :   //agar post.length o nhi ai mltlb condition failed //koi data nhi aaya 
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="font-bold">No Data Found</p>  {/* toh ye dikha denaa */}
        </div> 
      }
    </div>
  );
};

export default Home;
