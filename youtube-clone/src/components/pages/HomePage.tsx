import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from '../Navbar';

export const HomePage: React.FC = () => {
    return(
        <div>
            <GlobalStyle />
            <Navbar />
        </div>
    )
}