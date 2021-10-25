import React, { useState } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from '../Navbar';
import { CategorySection } from '../CategorySection';
import { MainContent } from '../styles/MainContent';
import { VideoPlace } from "../styles/VideoPlace";
import { TrendingBar } from "../styles/Home/TrendingBar/Trendingbar";
import { TrendingName } from "../styles/Home/TrendingBar/TrendingName";
import { HomePageVideoSection } from "../Home/HomePageVideoSection";
import { loadResults } from '../FirebaseVideos';

interface Props{
    openNavFunc(props: boolean): void;
    isOpen: boolean;
    isLogin: boolean;
    setMobileWidthFunc(props: boolean): void;
    mobileWidth: boolean;
    openNav(props: boolean): void;
    minimum: boolean;
    setLoginFunc(props: boolean): void;
}

export const HomePage: React.FC<Props> = ({ openNavFunc, isLogin, isOpen, setMobileWidthFunc, mobileWidth, openNav, minimum, setLoginFunc }) => {
    const trendingArr = ['Javascript', 'Computer', 'Chess', 'Ruby', 'Music', 'Python', 'Movies', 'Adobe', 'Blender', 'Live', 'SpaceX', 'Tesla', 'Robots', 'Cnc', 'Seminars', 'Facebook', 'Instagram']

    const [video, setVideos] = useState<any>([]);

    const setVideosFunc = (props: any) => {
        setVideos(props);
    }

    loadResults(setVideosFunc, 'HomePageVideos');

    return(
        <>
            <GlobalStyle />
            <Navbar 
                openNavFunc={openNav} 
                isOpen={isOpen} 
                isLogin={isLogin}
                setMobileWidthFunc={setMobileWidthFunc}
                mobileWidth={mobileWidth}
                setLoginFunc={setLoginFunc} />
            <MainContent>
                <CategorySection isOpen={isOpen} openNavFunc={openNav} isLogin={isLogin} />
                <VideoPlace mobileWidth={mobileWidth} minimum={minimum}>
                    <TrendingBar mobileWidth={mobileWidth} minimum={minimum}>
                        {trendingArr.map((item) => (
                            <TrendingName key={item}>{item}</TrendingName>
                        ))}
                    </TrendingBar>
                    <HomePageVideoSection video={video} />
                </VideoPlace>
            </MainContent>
        </>
    )
}