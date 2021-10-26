import { ExploreVideo } from '../../styles/Explore/Home/ExploreVideo';
import { ExploreVideoImage } from '../../styles/Explore/Home/ExploreVideoImage';
import { ExploreDescriptionVideo } from '../../styles/Explore/Home/ExploreDescriptionVideo';
import { ExploreTitleVideo } from '../../styles/Explore/Home/ExploreTitleVideo';
import { ExploreStats } from '../../styles/Explore/Home/ExploreStats';
import { ExploreOwnerVideo } from '../../styles/Explore/Home/ExploreOwnerVideo';
import { ExploreViews } from '../../styles/Explore/Home/ExploreViews';
import { ExploreDate } from '../../styles/Explore/Home/ExploreDate';
import { Link } from 'react-router-dom';

interface Props{
    video: any;
}

export const ExploreVideos: React.FC<Props> = ({ video }) => {
    return(
        <>
            {video.map((item: any) => (
                <ExploreVideo key={item.views}>
                    <ExploreVideoImage background={item.background}></ExploreVideoImage>
                    <ExploreDescriptionVideo>
                        <ExploreTitleVideo>
                            <Link to='/working-video'>{item.titleVideo}</Link>
                        </ExploreTitleVideo>
                        <ExploreStats>
                            <ExploreOwnerVideo>
                                <Link to='/channel'>{item.ownerChannel}</Link>
                            </ExploreOwnerVideo>
                            <ExploreViews>{item.views}</ExploreViews>
                            <ExploreDate>{item.data}</ExploreDate>
                        </ExploreStats>
                    </ExploreDescriptionVideo>
                </ExploreVideo>
            ))}
        </>
    )
}