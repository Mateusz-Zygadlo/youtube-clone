import { ChannelDescription } from "./styles/Channel/ChannelDescription";
import { ChannelImage } from "./styles/Channel/ChannelImage";
import { ChannelMainSection } from "./styles/Channel/ChannelMainSection"; 
import { ChannelAvatar } from "./styles/Channel/ChannelAvatar";
import { ChannelName } from "./styles/Channel/ChannelName";
import { ChannelInfo } from "./styles/Channel/ChannelInfo";
import { ChannelSubscription } from "./styles/Channel/ChannelSubscription";
import { ChannelButton } from "./styles/Channel/ChannelButton";
import { ChannelCategoryBar } from "./styles/Channel/ChannelCategoryBar";
import { ChannelCategoryName } from "./styles/Channel/ChannelCategoryName";
import { ChannelStatsInfo } from "./styles/Channel/ChannelStatsInfo";
import { Name } from "./styles/Channel/Name";
import { Icon } from "./styles/navbar/Icon";

export const ChannelDescriptionSection = () => {
    return(
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
            <ChannelCategoryBar>
                <ChannelCategoryName>
                    <Name>Home</Name>
                    <Name>Videos</Name>
                    <Name>Playlists</Name>
                    <Name>Channels</Name>
                    <Name>About</Name>
                </ChannelCategoryName>
            </ChannelCategoryBar>
        </ChannelDescription>
    );
}