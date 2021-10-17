import React, { useState, useEffect } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from '../Navbar';
import { CategorySection } from '../CategorySection';
import { MainContent } from '../styles/MainContent';
import { VideoPlace } from "../styles/VideoPlace";
import { TrendingBar } from "../styles/TrendingBar/Trendingbar";
import { TrendingName } from "../styles/TrendingBar/TrendingName";
import { VideoSection } from "../styles/Video/VideoSection";
import { Video } from "../styles/Video/Video";
import { VideoImage } from "../styles/Video/VideoImage";
import { ShortText } from "../styles/Video/ShortText";
import { Avatar } from "../styles/navbar/Avatar";
import { DescriptionVideo } from "../styles/Video/DescriptionVideo";
import { TitleVideo } from "../styles/Video/TitleVideo";
import { OwnerChannel } from "../styles/Video/OwnerChannel";
import { Statistic } from "../styles/Video/Statistic";
import { Views } from "../styles/Video/Views";
import { Data } from "../styles/Video/Data";


export const HomePage: React.FC = () => {
    const [isOpen, setNavOpen] = useState<boolean>(true);
    const [isLogin, setLogin] = useState<boolean>(true);
    const [mobileWidth, setMobileWidth] = useState<boolean>(false);
    const [minimum, setMinimum] = useState<boolean>(false);

    const setMobileWidthFunc = (props: boolean): void => {
        setMobileWidth(!props);
    }

    useEffect(() => {
        const resizeFunc = () => {
            if(window.innerWidth){
                if(window.innerWidth > 1300){
                    setNavOpen(true);
                    setMobileWidth(false);
                }else if(window.innerWidth < 1300 && window.innerWidth > 700){
                    setNavOpen(false);
                    setMobileWidth(true);
                }else{
                    setMinimum(true);
                    setMobileWidth(true);
                    setNavOpen(false);
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

    const trendingArr = ['Javascript', 'Computer', 'Chess', 'Ruby', 'Music', 'Python', 'Movies', 'Adobe', 'Blender', 'Live', 'SpaceX', 'Tesla', 'Robots', 'Cnc', 'Seminars', 'Facebook', 'Instagram']

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
                <VideoPlace mobileWidth={mobileWidth} minimum={minimum}>
                    <TrendingBar mobileWidth={mobileWidth} minimum={minimum}>
                        {trendingArr.map((item) => (
                            <TrendingName key={item}>{item}</TrendingName>
                        ))}
                    </TrendingBar>
                    <VideoSection>
                        <Video>
                            <VideoImage></VideoImage>
                            <ShortText>
                                <Avatar></Avatar>
                                <DescriptionVideo>
                                    <TitleVideo>this is title in youtube clone with github react typescript and styled components</TitleVideo>
                                    <OwnerChannel>youtube channel</OwnerChannel>
                                    <Statistic>
                                        <Views>3.4k views</Views>
                                        <Data>2 years ago</Data>
                                    </Statistic>
                                </DescriptionVideo>
                            </ShortText>
                        </Video>
                    </VideoSection>
                </VideoPlace>
            </MainContent>
        </>
    )
}