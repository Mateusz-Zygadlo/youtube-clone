import React from "react";
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


interface Props{
    openNavFunc(props: boolean): void;
    isOpen: boolean;
    isLogin: boolean;
    setMobileWidthFunc(props: boolean): void;
    mobileWidth: boolean;
    openNav(props: boolean): void;
    minimum: boolean;
}

export const HomePage: React.FC<Props> = ({ openNavFunc, isLogin, isOpen, setMobileWidthFunc, mobileWidth, openNav, minimum }) => {
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
                                    <TitleVideo>This is title in youtube clone with github react typescript and styled components</TitleVideo>
                                    <OwnerChannel>Youtube channel</OwnerChannel>
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