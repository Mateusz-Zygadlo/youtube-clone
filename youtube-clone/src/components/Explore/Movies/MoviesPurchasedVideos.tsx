import { ChannelChannelsContainer } from "../../styles/Channel/ChannelChannelsContainer";
import { ChannelVideoParagraph } from "../../styles/Channel/ChannelVideoParagraph";
import { MoviesVideoSpace } from "../../styles/Explore/MoviesVideoSpace";
import { MoviesVideoBackground } from "../../styles/Explore/MoviesVideoBackground";
import { ChannelHomeVideoTitle } from "../../styles/Channel/ChannelHomeVideoTitle";
import { MoviesVideos } from "../../styles/Explore/MoviesVideo";

interface Props{
    movieSectionName: string;
}

export const MoviesPurchasedVideos: React.FC<Props> = ({ movieSectionName }) => {
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