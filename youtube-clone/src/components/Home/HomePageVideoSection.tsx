import { HomePageVideos } from "./HomePageVideos";

interface Props{
    video: any;
}

export const HomePageVideoSection : React.FC<Props> = ({ video }) => {
    return(
        <>
            <HomePageVideos video={video} />
        </>
    );
}