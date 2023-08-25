import { connect } from "react-redux";
import {setTheme} from "@/redux/modules/theme/action"
import {useState } from "react";
function Themeicon(props){
    //console.log("theme:"+props.theme);
    const {setTheme,theme}=props;
   const [themeStatus,setThemeStatus]=useState(theme)
    const toggleTheme=()=>{
        setThemeStatus(!themeStatus)
        setTheme(!themeStatus);
    }
   
  return (
    <>
  <i className="iconfont icon-Clothes font-black text-[20px]" onClick={toggleTheme}>
    
  </i>
  </>
  )
}
export default connect(state=>({
   theme: state.theme
}),{
    setTheme
})(Themeicon);