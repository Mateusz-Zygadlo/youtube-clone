import { ChannelVideoSection } from "../styles/Channel/ChannelVideoSection";
import { ChannelVideoParagraph } from "../styles/Channel/ChannelVideoParagraph";
import { MusicChannelSpace } from "../styles/explore/MusicChannelSpace";
import { MusicVideoInfo } from "../styles/explore/MusicVideoInfo";
import { MusicBackground } from "../styles/explore/MusicBackground";
import { MusicInfo } from "../styles/explore/MusicInfo";
import { AlbumName } from "../styles/explore/AlbumName";
import { AlbumDescription } from "../styles/explore/AlbumDescription";
import { AlbumTracksCount } from "../styles/explore/AlbumTracksCount";

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