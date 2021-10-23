import { ProposedVideoSection } from "./styles/ProposedVideos/ProposedVideoSection";
import { VideoPlaysParagraph } from "./styles/PlaysVideo/VideoPlaysParagraph";
import { ProposedVideo } from "./styles/ProposedVideos/ProposedVideo";
import { ProposedVideoBackground } from "./styles/ProposedVideos/ProposedVideoBackground";
import { ProposedVideoInfo } from "./styles/ProposedVideos/ProposedVideoInfo";
import { ProposedVideoTitle } from "./styles/ProposedVideos/ProposedVideoTitle";
import { ProposedVideChannel } from "./styles/ProposedVideos/ProposedVideoChannel";
import { ProposedVideoStats } from "./styles/ProposedVideos/ProposedVideoStats";

export const ProposedVideos = () => {
    return(
        <ProposedVideoSection>
            <ProposedVideo>
                <ProposedVideoBackground />
                <ProposedVideoInfo>
                    <ProposedVideoTitle>This is a title</ProposedVideoTitle>
                    <ProposedVideChannel>Channel name</ProposedVideChannel>
                    <ProposedVideoStats>
                        <VideoPlaysParagraph>3.4k views</VideoPlaysParagraph>
                        <VideoPlaysParagraph>2 days ago</VideoPlaysParagraph>
                    </ProposedVideoStats>
                </ProposedVideoInfo>
            </ProposedVideo>
        </ProposedVideoSection>
    );
}