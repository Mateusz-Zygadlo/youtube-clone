import { LikedContainer } from "./styles/LikedSection/LikedContainer";
import { FirstVideo } from "./styles/LikedSection/FirstVideo";
import { LikedVideoBackgroundFirst } from "./styles/LikedSection/LikedVideoBackgroundFirst";
import { LikedTitleVideoFirst } from "./styles/LikedSection/LikedTitleVideoFirst";
import { LikedVideoNumber } from "./styles/LikedSection/LikedVideoNumber";
import { PublicFolder } from "./styles/LikedSection/PublicFolder";
import { LikedVideoSection } from './styles/LikedSection/LikedVideoSection';
import { LikedVideo } from "./styles/LikedSection/LikedVideo";
import { LikedVideoImage } from "./styles/LikedSection/LikedVideoImage";
import { LikedDescriptionVideo } from "./styles/LikedSection/LikedDescriptionVideo";
import { LikedTitleVideo } from "./styles/LikedSection/LikedTitleVideo";
import { LikedOwnerChannel } from "./styles/LikedSection/LikedOwnerChannel";

export const WatchLaterVideos = () => {
    return(
        <LikedContainer>
            <FirstVideo>
                <LikedVideoBackgroundFirst></LikedVideoBackgroundFirst>
                <LikedTitleVideoFirst>Watch later</LikedTitleVideoFirst>
                <LikedVideoNumber>154 videos</LikedVideoNumber>
                <PublicFolder>Public</PublicFolder>
            </FirstVideo>
            <LikedVideoSection>
                <LikedVideo>
                    <LikedVideoImage></LikedVideoImage>
                    <LikedDescriptionVideo>
                        <LikedTitleVideo>this is a title</LikedTitleVideo>
                        <LikedOwnerChannel>Owner Channel</LikedOwnerChannel>
                    </LikedDescriptionVideo>
                </LikedVideo>
            </LikedVideoSection>
        </LikedContainer>
    );
}