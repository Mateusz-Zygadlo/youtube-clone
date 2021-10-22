import { ChannelPinnedVideo } from "../styles/Channel/ChannelPinnedVideo";
import { PinnedVideoBackground } from "../styles/Channel/PinnedVideoBackground";
import { PinnedVideoInfo } from "../styles/Channel/PinnedVideoInfo";
import { PinnedVideoTitle } from "../styles/Channel/PinnedVideoTitle";
import { PinnedVideoDescription } from "../styles/Channel/PinnedVideoDescription";
import { ChannelStatsInfo } from "../styles/Channel/ChannelStatsInfo";
import { VideoViews } from "../styles/Channel/VideoViews";
import { VideoDate } from "../styles/Channel/VideoDate";

export const ChannelPinnedVideoSection = () => {
    return(
        <ChannelPinnedVideo>
            <PinnedVideoBackground></PinnedVideoBackground>
            <PinnedVideoInfo>
                <PinnedVideoTitle>This is a title</PinnedVideoTitle>
                <ChannelStatsInfo>
                    <VideoViews>3.4k views</VideoViews>
                    <VideoDate>2 days ago</VideoDate>
                </ChannelStatsInfo>
                <PinnedVideoDescription>This is video description content</PinnedVideoDescription>
            </PinnedVideoInfo>
        </ChannelPinnedVideo>
    );
}