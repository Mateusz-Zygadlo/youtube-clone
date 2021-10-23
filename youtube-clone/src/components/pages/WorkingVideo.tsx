import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from "../Navbar";
import { MainContent } from "../styles/MainContent";
import { VideoPlaysContainer } from "../styles/PlaysVideo/VideoPlaysContainer";
import { VideoPlaysSection } from '../VideoPlaysSection';
import { ProposedVideos } from '../ProposedVideos';
   
interface Props{
    openNavFunc(props: boolean): void;
    isOpen: boolean;
    isLogin: boolean;
    setMobileWidthFunc(props: boolean): void;
    mobileWidth: boolean;
    openNav(props: boolean): void;
    minimum: boolean;
}

export const WorkingVideo: React.FC<Props> = ({ openNavFunc, isOpen, isLogin, setMobileWidthFunc, mobileWidth, openNav, minimum }) => {
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
                <VideoPlaysContainer>
                    <VideoPlaysSection />
                    <ProposedVideos />
                </VideoPlaysContainer>
            </MainContent>
        </>
    );
}