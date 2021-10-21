import { ChannelVideoSection } from "./styles/Channel/ChannelVideoSection";
import { ChannelVideoParagraph } from "./styles/Channel/ChannelVideoParagraph";
import { ChannelVideoSpace } from "./styles/Channel/ChannelVideoSpace";
import { ChannelHomeVideo } from "./styles/Channel/ChannelHomeVideo";
import { ChannelHomeVideoBackground } from "./styles/Channel/ChannelHomeVIdeoBackground";
import { ChannelHomeVideoTitle } from "./styles/Channel/ChannelHomeVideoTitle";
import { Link } from 'react-router-dom';

export const ChannelPlaylists = () => {
    return(
        <ChannelVideoSection>
            <ChannelVideoParagraph>Uploads</ChannelVideoParagraph>
            <ChannelVideoSpace>
                <ChannelHomeVideo>
                    <ChannelHomeVideoBackground></ChannelHomeVideoBackground>
                    <ChannelHomeVideoTitle>This is a title</ChannelHomeVideoTitle>
                    <ChannelHomeVideoTitle>
                        <Link to='/channel/playlists/one'>VIEW FULL PLAYLIST</Link>
                    </ChannelHomeVideoTitle>
                </ChannelHomeVideo>
            </ChannelVideoSpace>
        </ChannelVideoSection>
    );
}