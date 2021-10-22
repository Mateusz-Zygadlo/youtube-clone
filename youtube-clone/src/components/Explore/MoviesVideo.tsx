import { ChannelChannelsContainer } from "../styles/Channel/ChannelChannelsContainer";
import { ChannelVideoParagraph } from "../styles/Channel/ChannelVideoParagraph";
import { MoviesVideoSpace } from "../styles/explore/MoviesVideoSpace";
import { MoviesVideoBackground } from "../styles/explore/MoviesVideoBackground";
import { ChannelHomeVideoTitle } from "../styles/Channel/ChannelHomeVideoTitle";
import { MoviesVideos } from "../styles/explore/MoviesVideo";

interface Props{
    movieSectionName: string;
}

export const MoviesVideo: React.FC<Props> = ({ movieSectionName }) => {
    return(
        <ChannelChannelsContainer>
            <ChannelVideoParagraph>{movieSectionName}</ChannelVideoParagraph>
            <MoviesVideoSpace>
                <MoviesVideos>
                    <MoviesVideoBackground></MoviesVideoBackground>
                    <ChannelHomeVideoTitle>This is a title</ChannelHomeVideoTitle>
                </MoviesVideos>
            </MoviesVideoSpace>
        </ChannelChannelsContainer>
    );
}