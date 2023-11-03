import React,{ useContext, useEffect } from "react";
import Todo from "./Todo";
import Registration from "./Registration";
import TemparatureConverter from "./TemperatureConverter";
import Navbar from "./Navbar";
import { pageContext, styleContext } from "../App";


function Root() {
    const [style,setStyle,theme,setTheme] = useContext(styleContext)
    const [page,setPage] = useContext(pageContext)
    useEffect(()=>{
        if (theme) {
            setStyle({
                navColor:"#3A3A3A",
                textColor:"white",
                linearColor1:"black",
                linearColor2:"skyblue"
            });
        } else {
            // Handle the other case (e.g., revert to the default style)
            setStyle({
                navColor:"#d3d3d3",
                textColor:"#141416",
                linearColor1:"white",
                linearColor2:"black"
            });
        }
    },[theme,setStyle])
    return ( 
        (<div id="container">
            <Navbar/>
            {page==="todo" && <Todo/>}
            {page==="registration" && <Registration/>}
            {page==="temperature" && <TemparatureConverter/>}
        </div>)
    );
}

export default Root;