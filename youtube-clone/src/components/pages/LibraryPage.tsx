import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from "../Navbar";
import { MainContent } from "../styles/MainContent";
import { CategorySection } from "../CategorySection";
import { VideoPlace } from "../styles/VideoPlace";
import { LibrarySection } from "../LibrarySection";
import { loadResults } from '../FirebaseVideos';
import { useState } from "react";

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

export const LibraryPage: React.FC<Props>= ({ openNavFunc, isOpen, isLogin, setMobileWidthFunc, mobileWidth, openNav, minimum , setLoginFunc}) => {
    const [video, setVideos] = useState<any>([]);

    const setVideosFunc = (props: any) => {
        setVideos(props);
    }

    loadResults(setVideosFunc, 'LibraryPageVideos');
    
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
                <CategorySection
                    isOpen={isOpen}
                    openNavFunc={openNav}
                    isLogin={isLogin} />
                <VideoPlace 
                    mobileWidth={mobileWidth} 
                    minimum={minimum}
                >
                    <LibrarySection video={video} />
                </VideoPlace>
            </MainContent>
        </>
    )
}