import { LikedContainer } from "./styles/LikedSection/LikedContainer";
import { FirstVideo } from "./styles/LikedSection/FirstVideo";
import { LikedVideoBackgroundFirst } from "./styles/LikedSection/LikedVideoBackgroundFirst";
import { LikedTitleVideoFirst } from "./styles/LikedSection/LikedTitleVideoFirst";
import { LikedVideoNumber } from "./styles/LikedSection/LikedVideoNumber";
import { LikedVideoSection } from './styles/LikedSection/LikedVideoSection';
import { LikedVideo } from "./styles/LikedSection/LikedVideo";
import { LikedVideoImage } from "./styles/LikedSection/LikedVideoImage";
import { LikedDescriptionVideo } from "./styles/LikedSection/LikedDescriptionVideo";
import { LikedTitleVideo } from "./styles/LikedSection/LikedTitleVideo";
import { LikedOwnerChannel } from "./styles/LikedSection/LikedOwnerChannel";

export const PlaylistsSection = () => {
    return(
        <LikedContainer>
            <FirstVideo>
                <LikedVideoBackgroundFirst></LikedVideoBackgroundFirst>
                <LikedTitleVideoFirst>One</LikedTitleVideoFirst>
                <LikedVideoNumber>154 videos</LikedVideoNumber>
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