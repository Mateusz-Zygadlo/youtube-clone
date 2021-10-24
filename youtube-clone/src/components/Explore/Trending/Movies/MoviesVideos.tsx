import { ExploreVideoContainer } from '../../../styles/Explore/Home/ExploreVideoContainer';
import { ExploreVideo } from '../../../styles/Explore/Home/ExploreVideo';
import { ExploreVideoImage } from '../../../styles/Explore/Home/ExploreVideoImage';
import { ExploreDescriptionVideo } from '../../../styles/Explore/Home/ExploreDescriptionVideo';
import { ExploreTitleVideo } from '../../../styles/Explore/Home/ExploreTitleVideo';
import { ExploreStats } from '../../../styles/Explore/Home/ExploreStats';
import { ExploreOwnerVideo } from '../../../styles/Explore/Home/ExploreOwnerVideo';
import { ExploreViews } from '../../../styles/Explore/Home/ExploreViews';
import { ExploreDate } from '../../../styles/Explore/Home/ExploreDate';
import { ExploreDescription } from '../../../styles/Explore/Home/ExploreDescription';

export const MoviesVideos = () => {
    return(
        <ExploreVideoContainer>
            <ExploreVideo>
                <ExploreVideoImage></ExploreVideoImage>
                <ExploreDescriptionVideo>
                    <ExploreTitleVideo>Movies section</ExploreTitleVideo>
                    <ExploreStats>
                        <ExploreOwnerVideo>Owner Video</ExploreOwnerVideo>
                        <ExploreViews>4.5M views</ExploreViews>
                        <ExploreDate>2 days ago</ExploreDate>
                    </ExploreStats>
                    <ExploreDescription>this is a descriptionthis is a descriptionthis is a descriptionthis is a descriptionthis is a descriptionthis is a descriptionthis is a descriptionthis is a descriptionthis is a descriptionthis is a descriptionthis is a descriptionthis is a descriptionthis is a descriptionthis is a descriptionthis is a description</ExploreDescription>
                </ExploreDescriptionVideo>
            </ExploreVideo>
        </ExploreVideoContainer>
    )
}