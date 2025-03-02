import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>    {/*  BrowserRouter ke help se hum Routes create krr skte hai  */}
        <Provider store={store}>        {/*  provider is used for Redux applications  */}
          <App />    
          <Toaster/>      {/*  ye alagaya hai toast use krene ke liye  */}
        </Provider>
    </BrowserRouter>



  
);
