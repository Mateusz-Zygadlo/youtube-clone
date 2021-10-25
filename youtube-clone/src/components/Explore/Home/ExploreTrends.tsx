import { ExploreContainer } from '../../styles/Explore/ExploreContainer';
import { ExploreSectionBar } from './ExploreSectionBar';
import { ExploreVideoContainer } from '../../styles/Explore/Home/ExploreVideoContainer';
import { ExploreParagraph } from '../../styles/Explore/Home/ExploreParagraph';
import { ExploreVideoSection } from '../../Explore/Home/ExploreVideoSection';

interface Props{
    video: any;
}

export const ExploreTrends: React.FC<Props> = ({ video }) => {
    return(
        <ExploreContainer>
            <ExploreSectionBar />
            <ExploreVideoContainer>
                <ExploreParagraph>Trending videos</ExploreParagraph>
                <ExploreVideoSection video={video} />
            </ExploreVideoContainer>
        </ExploreContainer>
    )
}