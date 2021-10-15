import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from '../Navbar';

interface Props {
    setWidthFunc(props: boolean): void;
    width: boolean;
  }

export const HomePage: React.FC<Props> = ({ setWidthFunc, width }) => {
    return(
        <div>
            <GlobalStyle />
            <Navbar setWidthFunc={setWidthFunc} width={width} />
        </div>
    )
}