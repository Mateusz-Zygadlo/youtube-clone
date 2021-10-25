import { LibraryVideos } from './LibraryVideos';

interface Props{
    video: any;
}

export const LibrarySection: React.FC<Props> = ({ video }) => {
    return(
        <>
            <LibraryVideos video={video} />
        </>
    )
}