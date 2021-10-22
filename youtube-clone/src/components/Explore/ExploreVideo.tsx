import { ExploreVideoContainer } from '../styles/explore/ExploreVideoContainer';
import { ExploreVideo } from '../styles/explore/ExploreVideo';
import { ExploreVideoImage } from '../styles/explore/ExploreVideoImage';
import { ExploreDescriptionVideo } from '../styles/explore/ExploreDescriptionVideo';
import { ExploreTitleVideo } from '../styles/explore/ExploreTitleVideo';
import { ExploreStats } from '../styles/explore/ExploreStats';
import { ExploreOwnerVideo } from '../styles/explore/ExploreOwnerVideo';
import { ExploreViews } from '../styles/explore/ExploreViews';
import { ExploreDate } from '../styles/explore/ExploreDate';
import { ExploreDescription } from '../styles/explore/ExploreDescription';

export const ExploreVideos = () => {
    return(
        <ExploreVideoContainer>
            <ExploreVideo>
                <ExploreVideoImage></ExploreVideoImage>
                <ExploreDescriptionVideo>
                    <ExploreTitleVideo>This is a title This is a titleT his is a title This is a title This is a title This is a titleThis is a titleThis is a titleThis is a titleThis is a title This is a titleThis is a titleThis is a titleThis is a titleThis is a title</ExploreTitleVideo>
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