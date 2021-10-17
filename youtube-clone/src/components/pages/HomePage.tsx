import React, { useState, useEffect } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from '../Navbar';
import { CategorySection } from '../CategorySection';
import { MainContent } from '../styles/MainContent';
import { VideoPlace } from "../styles/VideoPlace";
import { TrendingBar } from "../styles/TrendingBar/Trendingbar";
import { TrendingName } from "../styles/TrendingBar/TrendingName";


export const HomePage: React.FC = () => {
    const [isOpen, setNavOpen] = useState<boolean>(true);
    const [isLogin, setLogin] = useState<boolean>(true);
    const [mobileWidth, setMobileWidth] = useState<boolean>(false);
    const [minimum, setMinimum] = useState<boolean>(false);
    const [isOk, setIsOk] = useState<boolean>(false)


    const setMobileWidthFunc = (props: boolean): void => {
        setMobileWidth(!props);
    }

    useEffect(() => {
        const resizeFunc = () => {
            if(window.innerWidth){
                if(window.innerWidth < 1300){
                    setIsOk(true);
                }else{
                    setIsOk(false);
                }
                if(window.innerWidth > 1300 && !isOpen){
                    setNavOpen(true);
                    setMobileWidth(false);
                }else if(window.innerWidth < 1300 && window.innerWidth > 700 && isOpen){
                    setNavOpen(false);
                    setMobileWidth(true);
                }
                if(window.innerWidth < 700){
                    setMinimum(true);
                }else{
                    setMinimum(false);
                }
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
            <Navbar 
                openNavFunc={openNav} 
                isOpen={isOpen} 
                isLogin={isLogin}
                setMobileWidthFunc={setMobileWidthFunc}
                mobileWidth={mobileWidth} />
            <MainContent>
                <CategorySection isOpen={isOpen} openNavFunc={openNav} isLogin={isLogin} />
                <VideoPlace mobileWidth={mobileWidth} minimum={minimum} isOk={isOk}>
                    <TrendingBar mobileWidth={mobileWidth} minimum={minimum}>
                        <TrendingName>Javascript</TrendingName>
                        <TrendingName>Computer</TrendingName>
                        <TrendingName>Chess</TrendingName>
                        <TrendingName>Ruby</TrendingName>
                        <TrendingName>Music</TrendingName>
                        <TrendingName>Python</TrendingName>
                        <TrendingName>Movies</TrendingName>
                        <TrendingName>Adobe</TrendingName>
                        <TrendingName>Blender</TrendingName>
                        <TrendingName>Live</TrendingName>
                        <TrendingName>SpaceX</TrendingName>
                        <TrendingName>Tesla</TrendingName>
                        <TrendingName>Robots</TrendingName>
                        <TrendingName>Cnc</TrendingName>
                        <TrendingName>Seminars</TrendingName>
                        <TrendingName>Facebook</TrendingName>
                        <TrendingName>Instagram</TrendingName>
                    </TrendingBar>
                </VideoPlace>
            </MainContent>
        </>
    )
}