import { Navbar } from "../../Navbar";
import { CategorySection } from "../../CategorySection";
import { MainContent } from "../../styles/MainContent";
import { GlobalStyle } from '../../styles/GlobalStyle';
import { VideoPlace } from '../../styles/VideoPlace';
import { NewsChannel } from '../../Explore/News/NewsChannel';
import { NewsChannelPageSection } from "../../Explore/News/NewsChannelPageSection";
 
interface Props{
    openNavFunc(props: boolean): void;
    isOpen: boolean;
    isLogin: boolean;
    setMobileWidthFunc(props: boolean): void;
    mobileWidth: boolean;
    openNav(props: boolean): void;
    minimum: boolean;
}

export const NewsChannelPage: React.FC<Props> = ({ openNavFunc, isOpen, isLogin, setMobileWidthFunc, mobileWidth, openNav, minimum }) => {
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
                <CategorySection
                    isOpen={isOpen}
                    openNavFunc={openNav}
                    isLogin={isLogin} />
                <VideoPlace 
                    mobileWidth={mobileWidth} 
                    minimum={minimum}
                >
                    <NewsChannel />
                    <NewsChannelPageSection />
                </VideoPlace>
            </MainContent>
        </>
    )
}