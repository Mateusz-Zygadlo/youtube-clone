import { Navbar } from "../../Navbar";
import { CategorySection } from "../../CategorySection";
import { MainContent } from "../../styles/MainContent";
import { GlobalStyle } from '../../styles/GlobalStyle';
import { VideoPlace } from '../../styles/VideoPlace';
import { LearningChannel } from '../../Explore/Learning/LearningChannel';
import { LearningSection } from '../../Explore/Learning/LearningSection';
  
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

export const LearningPage: React.FC<Props> = ({ openNavFunc, isOpen, isLogin, setMobileWidthFunc, mobileWidth, openNav, minimum, setLoginFunc }) => {
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
                    <LearningChannel />
                    <LearningSection />
                </VideoPlace>
            </MainContent>
        </>
    )
}