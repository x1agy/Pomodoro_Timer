import React from "react";
import './Header.css'
import { GitHub } from "@mui/icons-material";

const Header = () => {
    return(
        <div
            className="Header"
        >
            <h1
                className="headerTitle"
            >Pomodoro Timer</h1>

            <div
                className="headerLinks"
            >
                <h3>made by x1agy:</h3>
                <a 
                    href="https://github.com/x1agy"
                    target="_blank"
                    rel="noreferrer"
                ><GitHub /></a>
            </div>
        </div>
    )
}

export default Header