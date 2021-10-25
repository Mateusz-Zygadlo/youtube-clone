import { GlobalStyle } from "../../styles/GlobalStyle";
import { Navbar } from "../../Navbar";
import { MainContent } from "../../styles/MainContent";
import { CategorySection } from "../../CategorySection";
import { VideoPlace } from "../../styles/VideoPlace";
import { ChannelDescriptionSection } from "../../Channel/ChannelDescriptionSection";
import { ChannelVideos } from "../../Channel/ChannelVideos";
 
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

export const ChannelVideoPage: React.FC<Props> = ({ openNavFunc, isOpen, isLogin, setMobileWidthFunc, mobileWidth, openNav, minimum, setLoginFunc }) => {
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
                    <ChannelDescriptionSection />
                    <ChannelVideos sectionParagraph='Uploads' />
                </VideoPlace>
            </MainContent>
        </>
    );
}