import { ChannelStatsInfo } from "../../styles/Channel/ChannelStatsInfo";
import { VideoViews } from "../../styles/Channel/VideoViews";
import { VideoDate } from "../../styles/Channel/VideoDate";
import { ChannelVideoContainer } from "../../styles/Channel/ChannelVideoContainer";
import { ChannelVideoParagraph } from "../../styles/Channel/ChannelVideoParagraph";
import { ChannelHomeVideoSection } from "../../styles/Channel/ChannelHomeVideoSection";
import { ChannelHomeVideo } from "../../styles/Channel/ChannelHomeVideo";
import { ChannelHomeVideoBackground } from "../../styles/Channel/ChannelHomeVIdeoBackground";
import { ChannelHomeVideoTitle } from "../../styles/Channel/ChannelHomeVideoTitle";

interface Props{
    gamingNameSection: string;
}

export const GamingUploadsVideos: React.FC<Props> = ({ gamingNameSection }) => {
    return(
        <ChannelVideoContainer noBorder='noBorder'>
            <ChannelVideoParagraph>{gamingNameSection}</ChannelVideoParagraph>
            <ChannelHomeVideoSection>
                <ChannelHomeVideo>
                    <ChannelHomeVideoBackground></ChannelHomeVideoBackground>
                    <ChannelHomeVideoTitle>This is a title</ChannelHomeVideoTitle>
                    <ChannelStatsInfo>
                        <VideoViews>3.4k views</VideoViews>
                        <VideoDate>2 days ago</VideoDate>
                    </ChannelStatsInfo>
                </ChannelHomeVideo>
            </ChannelHomeVideoSection>
        </ChannelVideoContainer>
    );
}