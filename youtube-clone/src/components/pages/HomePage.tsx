import React, { useState } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from '../Navbar';
import { CategorySection } from '../CategorySection';
import { MainContent } from '../styles/MainContent';


export const HomePage: React.FC = () => {
    const [isOpen, setNavOpen] = useState<boolean>(true);
    const [isLogin, setLogin] = useState<boolean>(false);

    const openNav = (props: boolean): void => {
        setNavOpen(props);
    }

    return(
        <>
            <GlobalStyle />
            <Navbar openNavFunc={openNav} isOpen={isOpen} isLogin={isLogin} />
            <MainContent>
                <CategorySection isOpen={isOpen} openNavFunc={openNav} isLogin={isLogin} />
            </MainContent>
        </>
    )
}