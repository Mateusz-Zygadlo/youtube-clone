import { WatchLaterVideos } from './WatchLaterVideos'

interface Props{
    video: any;
}

export const WatchLaterSection: React.FC<Props> = ({ video }) => {
    return(
        <>
            <WatchLaterVideos video={video} />
        </>
    );
}