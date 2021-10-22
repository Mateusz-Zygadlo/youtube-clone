import { LiveVideos } from '../../components/Explore/LiveVideos';

export const LiveSection = () => {
    return(
        <>
            <LiveVideos sectionParagraph='Live Now' />
            <LiveVideos sectionParagraph='Recent Live Streams' />
        </>
    )
}