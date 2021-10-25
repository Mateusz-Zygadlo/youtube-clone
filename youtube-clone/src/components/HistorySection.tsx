import { HistoryVideos } from './HistoryVideos';

interface Props{
    video: any;
}

export const HistorySection: React.FC<Props> = ({ video }) => {
    return(
        <>
            <HistoryVideos video={video} />
        </>
    )
}