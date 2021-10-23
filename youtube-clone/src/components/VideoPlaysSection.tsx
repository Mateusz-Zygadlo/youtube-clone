import { VideoPlaysReaction } from "./styles/PlaysVideo/VideoPlaysReaction";
import { VideoPlaysReactionCard } from "./styles/PlaysVideo/VideoPlaysReactionCard";
import { Icon } from "./styles/navbar/Icon";
import { VideoPlaysChannelSection } from "./styles/PlaysVideo/VideoPlaysChannelSection";
import { VideoPlaceChannelInfo } from "./styles/PlaysVideo/VideoPlaceChannelInfo";
import { ChannelButton } from "./styles/Channel/ChannelButton";
import { VideoPlaysChannel } from "./styles/PlaysVideo/VideoPlaysChannel";
import { VideoPlaceAvatar } from "./styles/PlaysVideo/VideoPlaceAvatar";
import { VideoPlaceInfo } from "./styles/PlaysVideo/VideoPlaceInfo";
import { VideoPlaceChannelName } from "./styles/PlaysVideo/VideoPlaceChannelName";
import { VideoPlaysChannelSubscriptions } from "./styles/PlaysVideo/VideoPlaysChannelSubscriptions";
import { VideoPlaysDescriptionSection } from "./styles/PlaysVideo/VideoPlaysDescriptionSection";
import { VideoPlaysDescriptionParagraph } from "./styles/PlaysVideo/VideoPlaysDescriptionParagraph";
import { VideoPlaysCommentSection } from "./styles/PlaysVideo/VideoPlaysCommentSection";
import { PlaysVideoAddComment } from "./styles/PlaysVideo/PlaysVideoAddComment";
import { PlaysVideoAddInputComment } from "./styles/PlaysVideo/PlaysVideoAddInputComment";
import { VideoPlaysSubmitComment } from "./styles/PlaysVideo/VideoPlaysSubmitComment";
import { VideoPlaysConfirmation } from "./styles/PlaysVideo/VideoPlaysConfirmation";
import { VideoPlaysButtonsSection } from "./styles/PlaysVideo/VideoPlaysButtonsSection";
import { VideoPlaysAllCommentSection } from "./styles/PlaysVideo/VideoPlaysAllCommentSection";
import { VideoPlaysCommentContainer } from "./styles/PlaysVideo/VideoPlaysCommentContainer";
import { PlaysVideoCommentStats } from "./styles/PlaysVideo/PlaysVideoCommentStats";
import { VideoPlaysStatsParagraph } from "./styles/PlaysVideo/VideoPlaysStatsParagraph";
import { VideoPlaysCommentPlace } from "./styles/PlaysVideo/VideoPlaysCommentPlace";
import { VideoPlaysReactionSection } from "./styles/PlaysVideo/VideoPlaysReactionSection";
import { VideoPlaceIconsComment } from "./styles/PlaysVideo/VideoPlaceIconsComment";
import { VideoPlaysIcon } from "./styles/PlaysVideo/VideoPlaysIcon";
import { PlaysVideoBackground } from "./styles/PlaysVideo/PlaysVideoBackground";
import { PlaysVideoStats } from "./styles/PlaysVideo/PlaysVideoStats";
import { PlaysVideoTitle } from "./styles/PlaysVideo/PlaysVideoTitle";
import { PlaysVideoReactionStats } from "./styles/PlaysVideo/PlaysVideoReactionStats";
import { PlaysVideoViews } from "./styles/PlaysVideo/PlaysVideoViews";
import { PlaysVideoSection } from "./styles/PlaysVideo/PlaysVideoSection";
import { VideoPlaysParagraph } from "./styles/PlaysVideo/VideoPlaysParagraph";

export const VideoPlaysSection = () => {
    return(
        <PlaysVideoSection>
            <PlaysVideoBackground></PlaysVideoBackground>
            <PlaysVideoStats>
                <PlaysVideoTitle>This is a title of video</PlaysVideoTitle>
                <PlaysVideoReactionStats>
                    <PlaysVideoViews>
                        <VideoPlaysParagraph>3.4k views</VideoPlaysParagraph>
                        <VideoPlaysParagraph>2 days ago</VideoPlaysParagraph>
                    </PlaysVideoViews>
                    <VideoPlaysReaction>
                        <VideoPlaysReactionCard>
                            <Icon className="material-icons">arrow_upward</Icon>
                            <VideoPlaysParagraph>1221</VideoPlaysParagraph>
                        </VideoPlaysReactionCard>
                        <VideoPlaysReactionCard>
                            <Icon className="material-icons">arrow_downward</Icon>
                            <VideoPlaysParagraph>221</VideoPlaysParagraph>
                        </VideoPlaysReactionCard>
                        <VideoPlaysReactionCard>
                            <Icon className="material-icons">send</Icon>
                            <VideoPlaysParagraph>Share</VideoPlaysParagraph>
                        </VideoPlaysReactionCard>
                        <VideoPlaysReactionCard>
                            <Icon className="material-icons">bookmarks</Icon>
                            <VideoPlaysParagraph>Save</VideoPlaysParagraph>
                        </VideoPlaysReactionCard>
                        <VideoPlaysReactionCard>
                            <Icon className="material-icons">more_horiz</Icon>
                        </VideoPlaysReactionCard>
                    </VideoPlaysReaction>
                </PlaysVideoReactionStats>
                <VideoPlaysChannelSection>
                    <VideoPlaceChannelInfo>
                        <VideoPlaysChannel>
                            <VideoPlaceAvatar />
                            <VideoPlaceInfo>
                                <VideoPlaceChannelName>Channel name</VideoPlaceChannelName>
                                <VideoPlaysChannelSubscriptions>3.4k subs</VideoPlaysChannelSubscriptions>
                            </VideoPlaceInfo>
                        </VideoPlaysChannel>
                    </VideoPlaceChannelInfo>
                    <ChannelButton>Subscribe</ChannelButton>
                </VideoPlaysChannelSection> 
                <VideoPlaysDescriptionSection>
                    <VideoPlaysDescriptionParagraph>VideoPlaysDescriptionParagraph</VideoPlaysDescriptionParagraph>
                </VideoPlaysDescriptionSection>
                <VideoPlaysCommentSection>
                    <VideoPlaysDescriptionParagraph>46 comments</VideoPlaysDescriptionParagraph>
                    <PlaysVideoAddComment>
                        <VideoPlaceAvatar />
                        <VideoPlaysSubmitComment>
                            <PlaysVideoAddInputComment />
                            <VideoPlaysConfirmation>
                                <VideoPlaysParagraph>Confirm</VideoPlaysParagraph>
                                <VideoPlaysButtonsSection>
                                    <ChannelButton noBackground='noBackground'>Cancel</ChannelButton>
                                    <ChannelButton blueBackground='blueBackground'>Comment</ChannelButton>
                                </VideoPlaysButtonsSection>
                            </VideoPlaysConfirmation>
                        </VideoPlaysSubmitComment>
                    </PlaysVideoAddComment>
                    <VideoPlaysAllCommentSection>
                        <VideoPlaysCommentContainer>
                            <VideoPlaceAvatar />
                            <VideoPlaysCommentPlace>
                                <PlaysVideoCommentStats>
                                    <VideoPlaysStatsParagraph>Channel name</VideoPlaysStatsParagraph>
                                    <VideoPlaysStatsParagraph>2 days ago</VideoPlaysStatsParagraph>
                                </PlaysVideoCommentStats>
                                <VideoPlaysDescriptionParagraph>This is a comment content</VideoPlaysDescriptionParagraph>
                                <VideoPlaysReactionSection>
                                    <VideoPlaceIconsComment>
                                        <VideoPlaysIcon className="material-icons">expand_less</VideoPlaysIcon>
                                        <VideoPlaysParagraph>123</VideoPlaysParagraph>
                                    </VideoPlaceIconsComment>
                                    <VideoPlaceIconsComment>
                                        <VideoPlaysIcon className="material-icons">expand_more</VideoPlaysIcon>
                                    </VideoPlaceIconsComment>
                                </VideoPlaysReactionSection>
                            </VideoPlaysCommentPlace>
                        </VideoPlaysCommentContainer>
                    </VideoPlaysAllCommentSection>
                </VideoPlaysCommentSection>
            </PlaysVideoStats>
        </PlaysVideoSection>
    );
}