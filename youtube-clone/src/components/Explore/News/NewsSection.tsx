import { NewsVideos } from "./NewsVideos";
import { NewsChannelSection } from "./NewsChannelSection";

export const NewsSection = () => {
    return(
        <>
            <NewsVideos sectionParagraph="Top Stories" /> 
            <NewsVideos sectionParagraph="Live Now - News" /> 
            <NewsChannelSection sectionParagraph="Sections" />
        </>
    );
}