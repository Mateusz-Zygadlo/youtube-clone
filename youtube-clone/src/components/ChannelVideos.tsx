import { ChannelVideoSection } from "./styles/Channel/ChannelVideoSection";
import { ChannelVideoParagraph } from "./styles/Channel/ChannelVideoParagraph";
import { ChannelVideoSpace } from "./styles/Channel/ChannelVideoSpace";
import { ChannelHomeVideo } from "./styles/Channel/ChannelHomeVideo";
import { ChannelHomeVideoBackground } from "./styles/Channel/ChannelHomeVIdeoBackground";
import { ChannelHomeVideoTitle } from "./styles/Channel/ChannelHomeVideoTitle";
import { ChannelStatsInfo } from "./styles/Channel/ChannelStatsInfo";
import { VideoViews } from "./styles/Channel/VideoViews";
import { VideoDate } from "./styles/Channel/VideoDate";

export const ChannelVideos = () => {
    return(
        <ChannelVideoSection>
            <ChannelVideoParagraph>Uploads</ChannelVideoParagraph>
            <ChannelVideoSpace>
            <ChannelHomeVideo>
                    <ChannelHomeVideoBackground></ChannelHomeVideoBackground>
                    <ChannelHomeVideoTitle>This is a title</ChannelHomeVideoTitle>
                    <ChannelStatsInfo>
                        <VideoViews>3.4k views</VideoViews>
                        <VideoDate>2 days ago</VideoDate>
                    </ChannelStatsInfo>
                </ChannelHomeVideo>
            </ChannelVideoSpace>
        </ChannelVideoSection>
    );
}