import { HomePageVideos } from "./HomePageVideos";

interface Props{
    newArr: string[];
}

export const HomePageVideoSection : React.FC<Props> = ({ newArr }) => {
    return(
        <>
            <HomePageVideos newArr={newArr} />
        </>
    );
}