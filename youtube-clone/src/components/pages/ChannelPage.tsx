import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from "../Navbar";
import { MainContent } from "../styles/MainContent";
import { CategorySection } from "../CategorySection";
import { VideoPlace } from "../styles/VideoPlace";
import { ChannelDescription } from "../styles/Channel/ChannelDescription";
import { ChannelImage } from "../styles/Channel/ChannelImage";
import { ChannelMainSection } from "../styles/Channel/ChannelMainSection"; 
import { ChannelAvatar } from "../styles/Channel/ChannelAvatar";
import { ChannelName } from "../styles/Channel/ChannelName";
import { ChannelInfo } from "../styles/Channel/ChannelInfo";
import { ChannelSubscription } from "../styles/Channel/ChannelSubscription";
import { ChannelStatsInfo } from "../styles/Channel/ChannelStatsInfo";
import { ChannelButton } from "../styles/Channel/ChannelButton";

interface Props{
    openNavFunc(props: boolean): void;
    isOpen: boolean;
    isLogin: boolean;
    setMobileWidthFunc(props: boolean): void;
    mobileWidth: boolean;
    openNav(props: boolean): void;
    minimum: boolean;
}

export const ChannelPage: React.FC<Props> = ({ openNavFunc, isOpen, isLogin, setMobileWidthFunc, mobileWidth, openNav, minimum }) => {
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
                    <ChannelDescription>
                        <ChannelImage></ChannelImage>
                        <ChannelMainSection>
                            <ChannelStatsInfo>
                                <ChannelAvatar></ChannelAvatar>
                                <ChannelInfo>
                                    <ChannelName>Channel Name</ChannelName>
                                    <ChannelSubscription>3,4k subscriptions</ChannelSubscription>
                                </ChannelInfo>
                            </ChannelStatsInfo>
                            <ChannelButton>Subscription</ChannelButton>
                        </ChannelMainSection>
                    </ChannelDescription>
                </VideoPlace>
            </MainContent>
        </>
    );
}