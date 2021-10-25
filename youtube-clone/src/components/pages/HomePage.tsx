import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from '../Navbar';
import { CategorySection } from '../CategorySection';
import { MainContent } from '../styles/MainContent';
import { VideoPlace } from "../styles/VideoPlace";
import { TrendingBar } from "../styles/Home/TrendingBar/Trendingbar";
import { TrendingName } from "../styles/Home/TrendingBar/TrendingName";
import { HomePageVideoSection } from "../Home/HomePageVideoSection";
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
import { app } from '../Firebase';

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
    const newArr: any[] = [];
    const db = getFirestore(app);

    const loadResults = async (db: any) => {
        newArr.length = 0;
        const resultCollection = query(collection(db, 'HomePageVideos'))
        const resultSnapshot = await getDocs(resultCollection)

        console.log(resultSnapshot);

        const results = resultSnapshot.docs.map(doc => {
            const background = doc.data().background;
            const data = doc.data().data;
            const ownerChannel = doc.data().ownerChannel;
            const titleVideo = doc.data().titleVideo;
            const views = doc.data().views;

            newArr.push({
                background,
                data,
                ownerChannel,
                titleVideo,
                views
            })
        })

        return newArr;
    }

    loadResults(db);

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
                    <HomePageVideoSection newArr={newArr} />
                </VideoPlace>
            </MainContent>
        </>
    )
}