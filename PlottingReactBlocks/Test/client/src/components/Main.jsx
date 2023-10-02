import React from "react";
import Subcontent from "./Subcontent";
import '../styles/main.css'

const Main = (props) => {
    return(
        <div className="mainMain">
            {props.children}
        </div>
    )
}

export default Main;
