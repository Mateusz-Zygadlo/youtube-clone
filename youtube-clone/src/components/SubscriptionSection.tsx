import { SubscriptionVideos } from "./SubscriptionVideos"

interface Props{
    video: any;
}

export const SubscriptionSection: React.FC<Props> = ({ video }) => {
    return(
        <>
            <SubscriptionVideos video={video} />
        </>
    )
}