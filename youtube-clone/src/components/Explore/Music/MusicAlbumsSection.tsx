import { ChannelVideoSection } from "../../styles/Channel/ChannelVideoSection";
import { ChannelVideoParagraph } from "../../styles/Channel/ChannelVideoParagraph";
import { MusicChannelSpace } from "../../styles/Explore/MusicChannelSpace";
import { MusicVideoInfo } from "../../styles/Explore/MusicVideoInfo";
import { MusicBackground } from "../../styles/Explore/MusicBackground";
import { MusicInfo } from "../../styles/Explore/MusicInfo";
import { AlbumName } from "../../styles/Explore/AlbumName";
import { AlbumDescription } from "../../styles/Explore/AlbumDescription";
import { AlbumTracksCount } from "../../styles/Explore/AlbumTracksCount";

interface Props{
    albumsName: string;
}

export const MusicAlbumsSection: React.FC<Props>= ({ albumsName }) => {
    return(
        <ChannelVideoSection>
            <ChannelVideoParagraph>{albumsName}</ChannelVideoParagraph>
            <MusicChannelSpace>
                <MusicVideoInfo>
                    <MusicBackground></MusicBackground>
                    <MusicInfo>
                        <AlbumName>this is a name album test</AlbumName>
                        <AlbumDescription>This is a description in album no name test This is a description in album no name test</AlbumDescription>
                        <AlbumTracksCount>50 tracks</AlbumTracksCount>
                    </MusicInfo>
                </MusicVideoInfo>
            </MusicChannelSpace>
        </ChannelVideoSection>
    );
}