import { Navbar } from "../../Navbar";
import { CategorySection } from "../../CategorySection";
import { MainContent } from "../../styles/MainContent";
import { GlobalStyle } from '../../styles/GlobalStyle';
import { VideoPlace } from '../../styles/VideoPlace';
import { NewsChannel } from '../../Explore/NewsChannel';
import { NewsAboutSection } from '../../Explore/NewsAboutSection';
 
interface Props{
    openNavFunc(props: boolean): void;
    isOpen: boolean;
    isLogin: boolean;
    setMobileWidthFunc(props: boolean): void;
    mobileWidth: boolean;
    openNav(props: boolean): void;
    minimum: boolean;
}

export const NewsAboutPage: React.FC<Props> = ({ openNavFunc, isOpen, isLogin, setMobileWidthFunc, mobileWidth, openNav, minimum }) => {
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
                    <NewsAboutSection />
                </VideoPlace>
            </MainContent>
        </>
    )
}