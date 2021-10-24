import { ExploreContainer } from '../../styles/Explore/ExploreContainer';
import { ExploreSectionBar } from './ExploreSectionBar';
import { ExploreVideoContainer } from '../../styles/Explore/Home/ExploreVideoContainer';
import { ExploreParagraph } from '../../styles/Explore/Home/ExploreParagraph';
import { ExploreVideoSection } from '../../Explore/Home/ExploreVideoSection';


export const ExploreTrends = () => {
    return(
        <ExploreContainer>
            <ExploreSectionBar />
            <ExploreVideoContainer>
                <ExploreParagraph>Trending videos</ExploreParagraph>
                <ExploreVideoSection />
            </ExploreVideoContainer>
        </ExploreContainer>
    )
}