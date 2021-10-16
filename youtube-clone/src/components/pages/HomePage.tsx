import React, { useState, useEffect } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from '../Navbar';
import { CategorySection } from '../CategorySection';
import { MainContent } from '../styles/MainContent';


export const HomePage: React.FC = () => {
    const [isOpen, setNavOpen] = useState<boolean>(true);
    const [isLogin, setLogin] = useState<boolean>(false);
    const [widthSize, setWidthSize] = useState<number>(1400);

    useEffect(() => {
        const resizeFunc = () => {
            if(window.innerWidth){
                if(window.innerWidth > 1300 && !isOpen){
                    setNavOpen(true);
                }else if(window.innerWidth < 1300 && window.innerWidth > 700 && isOpen){
                    setNavOpen(false);
                }
                setWidthSize(window.innerWidth);
            }
        }

        window.addEventListener('resize', resizeFunc);

        return () => {
            window.removeEventListener('resize', resizeFunc);
        }
    });

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