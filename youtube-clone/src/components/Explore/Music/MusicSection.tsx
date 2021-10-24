import { MusicAlbumsSection } from "./MusicAlbumsSection";
import { MusicVideos } from "./MusicVideos";

export const MusicSection = () => {
    return(
        <>
            <MusicAlbumsSection albumsName="Today's Biggest Hits" />
            <MusicAlbumsSection albumsName="Celebrating Hispanic Heritage Month" />
            <MusicVideos sectionParagraph='New This Week' />
        </>
    );
}