 import {store }from "@/redux/index"
 import { Navigate } from "react-router-dom";
const Auth=(props)=>{
    const token=store.getState().user.token;
    if(!token){
      return <Navigate to="/login"></Navigate>
    };
   return props.children
}
export default Auth