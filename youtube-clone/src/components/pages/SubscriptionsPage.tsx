import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from "../Navbar";
import { MainContent } from "../styles/MainContent";
import { CategorySection } from "../CategorySection";
import { VideoPlace } from "../styles/VideoPlace";
import { SubscriptionContainer } from "../styles/subscriptionsPage/SubscriptionContainer";
import { SubscriptionParagraph } from "../styles/subscriptionsPage/SubscriptionParagraph";
import { SubscriptionVideoSection } from "../styles/subscriptionsPage/SubscriptionVideoSection";
import { SubscriptionVideo } from "../styles/subscriptionsPage/SubscriptionVideo";
import { SubscriptionVideoImage } from "../styles/subscriptionsPage/SubscriptionVideoImage";
import { SubscriptionDescriptionVideo } from "../styles/subscriptionsPage/SubscriptionDescriptionVideo";
import { SubscriptionTitleVideo } from "../styles/subscriptionsPage/SubscriptionTitleVideo";
import { SubscriptionOwnerVideo } from "../styles/subscriptionsPage/SubscriptionOwnerVideo";
import { SubscriptionStats } from "../styles/subscriptionsPage/SubscriptionStats";
import { SubscriptionView } from "../styles/subscriptionsPage/SubscriptionView";
import { SubscriptionDate } from "../styles/subscriptionsPage/SubscriptionDate";
  
interface Props{
    openNavFunc(props: boolean): void;
    isOpen: boolean;
    isLogin: boolean;
    setMobileWidthFunc(props: boolean): void;
    mobileWidth: boolean;
    openNav(props: boolean): void;
    minimum: boolean;
}

export const SubscriptionsPage: React.FC<Props> = ({ openNavFunc, isOpen, isLogin, setMobileWidthFunc, mobileWidth, openNav, minimum }) => {
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
                    <SubscriptionContainer>
                        <SubscriptionParagraph>This is a subscription paragraph</SubscriptionParagraph>
                        <SubscriptionVideoSection>
                            <SubscriptionVideo>
                                <SubscriptionVideoImage></SubscriptionVideoImage>
                                <SubscriptionDescriptionVideo>
                                    <SubscriptionTitleVideo>this is a title this is a title this is a title</SubscriptionTitleVideo>
                                    <SubscriptionOwnerVideo>this is a Owner video</SubscriptionOwnerVideo>
                                    <SubscriptionStats>
                                        <SubscriptionView>3.4k views</SubscriptionView>
                                        <SubscriptionDate>2 years ago</SubscriptionDate>
                                    </SubscriptionStats>
                                </SubscriptionDescriptionVideo>
                            </SubscriptionVideo>
                        </SubscriptionVideoSection>
                    </SubscriptionContainer>
                </VideoPlace>
            </MainContent>
        </>
    )
}