import { ChannelVideoSection } from "./styles/Channel/ChannelVideoSection";
import { ChannelVideoParagraph } from "./styles/Channel/ChannelVideoParagraph";
import { ChannelSpace } from "./styles/Channel/ChannelSpace";
import { ChannelShortInfo } from "./styles/Channel/ChannelShortInfo";
import { ChannelAvatar } from "./styles/Channel/ChannelAvatar";
import { ChannelNameSub } from "./styles/Channel/ChannelNameSub";
import { ChannelSubscriptionCount } from "./styles/Channel/ChannelSubscriptionCount";
import { ChannelButton } from "./styles/Channel/ChannelButton";

export const ChannelsSection = () => {
    return(
        <ChannelVideoSection>
            <ChannelVideoParagraph>Subscription</ChannelVideoParagraph>
            <ChannelSpace>
                <ChannelShortInfo>
                    <ChannelAvatar noMargin='noMargin'></ChannelAvatar>
                    <ChannelNameSub>Channel test</ChannelNameSub>
                    <ChannelSubscriptionCount>3.4k subs</ChannelSubscriptionCount>
                    <ChannelButton tiny='tiny'>Subscribe</ChannelButton>
                </ChannelShortInfo>
            </ChannelSpace>
        </ChannelVideoSection>
    );
}