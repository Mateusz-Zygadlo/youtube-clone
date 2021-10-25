import { Video } from "../styles/Home/Video/Video";
import { VideoImage } from "../styles/Home/Video/VideoImage";
import { ShortText } from "../styles/Home/Video/ShortText";
import { Avatar } from "../styles/Navbar/Avatar";
import { DescriptionVideo } from "../styles/Home/Video/DescriptionVideo";
import { TitleVideo } from "../styles/Home/Video/TitleVideo";
import { OwnerChannel } from "../styles/Home/Video/OwnerChannel";
import { Statistic } from "../styles/Home/Video/Statistic";
import { Views } from "../styles/Home/Video/Views";
import { Data } from "../styles/Home/Video/Data";
import { VideoSection } from "../styles/Home/Video/VideoSection";

interface Props{
    video: any;
}

export const HomePageVideos: React.FC<Props> = ({ video }) => {
    return(
        <>
            {video ? 
                <VideoSection>
                    {video.map((item: any) => (
                        <Video key={item.titleVideo}>
                            <VideoImage background={item.background}></VideoImage>
                            <ShortText>
                                <Avatar></Avatar>
                                <DescriptionVideo>
                                    <TitleVideo>{item.titleVideo}</TitleVideo>
                                    <OwnerChannel>{item.ownerChannel}</OwnerChannel>
                                    <Statistic>
                                        <Views>{item.views} views</Views>
                                        <Data>{item.data}</Data>
                                    </Statistic>
                                </DescriptionVideo>
                            </ShortText>
                        </Video>
                    ))}
                </VideoSection>
            :
                <div>Loading</div>
            }
        </>
    );
}