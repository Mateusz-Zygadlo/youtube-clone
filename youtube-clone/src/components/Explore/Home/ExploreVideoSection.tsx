import { ExploreVideos } from '../Home/ExploreVideos';

interface Props{
    video: any;
}

export const ExploreVideoSection: React.FC<Props> = ({ video }) => {
    return(
        <>
            <ExploreVideos video={video} />
        </>
    );
}