import { MusicAlbumsSection } from "./MusicAlbumsSection";
import { ChannelVideos } from "../Channel/ChannelVideos";

export const MusicSection = () => {
    return(
        <>
            <MusicAlbumsSection albumsName="Today's Biggest Hits" />
            <MusicAlbumsSection albumsName="Celebrating Hispanic Heritage Month" />
            <ChannelVideos sectionParagraph='New This Week' />
        </>
    );
}