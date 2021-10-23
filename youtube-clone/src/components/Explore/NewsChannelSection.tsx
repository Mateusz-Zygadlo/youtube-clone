import { ChannelVideoSection } from "../styles/Channel/ChannelVideoSection";
import { ChannelVideoParagraph } from "../styles/Channel/ChannelVideoParagraph";
import { ChannelSpace } from "../styles/Channel/ChannelSpace";
import { ChannelShortInfo } from "../styles/Channel/ChannelShortInfo";
import { ChannelAvatar } from "../styles/Channel/ChannelAvatar";
import { ChannelNameSub } from "../styles/Channel/ChannelNameSub";
import { ChannelSubscriptionCount } from "../styles/Channel/ChannelSubscriptionCount";
import { ChannelButton } from "../styles/Channel/ChannelButton";

interface Props{
    sectionParagraph: string;
}

export const NewsChannelSection: React.FC<Props> = ({ sectionParagraph }) => {
    return(
        <ChannelVideoSection>
            <ChannelVideoParagraph>{sectionParagraph}</ChannelVideoParagraph>
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