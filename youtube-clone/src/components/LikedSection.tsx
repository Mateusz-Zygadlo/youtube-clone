import { LikedVideos } from "./LikedVideos";

interface Props{
    video: any;
}

export const LikedSection: React.FC<Props> = ({ video}) => {
    return(
        <>
            <LikedVideos video={video} />
        </>
    );
}