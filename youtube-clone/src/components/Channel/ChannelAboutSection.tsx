import { ChannelAboutContainer } from "../styles/Channel/ChannelAboutContainer";
import { ChannelAboutDescription } from "../styles/Channel/ChannelAboutDescription";
import { ChannelVideoParagraph } from "../styles/Channel/ChannelVideoParagraph";
import { ChannelAboutText } from "../styles/Channel/ChannelAboutText";
import { ChannelAboutStats } from "../styles/Channel/ChannelAboutStats";

export const ChannelAboutSection = () => {
    return(
        <ChannelAboutContainer>
            <ChannelAboutDescription>
                <ChannelVideoParagraph>Description</ChannelVideoParagraph>
                <ChannelAboutText>this is a description</ChannelAboutText>
            </ChannelAboutDescription>
            <ChannelAboutStats>
                <ChannelVideoParagraph borderBottom='borderBottom'>Stats</ChannelVideoParagraph>
                <ChannelVideoParagraph borderBottom='borderBottom'>Joined Jul 18, 2006</ChannelVideoParagraph>
                <ChannelVideoParagraph borderBottom='borderBottom'>893,197 views</ChannelVideoParagraph>
            </ChannelAboutStats>
        </ChannelAboutContainer>
    );
}