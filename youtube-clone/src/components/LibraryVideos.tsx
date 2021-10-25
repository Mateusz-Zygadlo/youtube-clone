import { SubscriptionContainer } from "./styles/SubscriptionsPage/SubscriptionContainer";
import { SubscriptionParagraph } from "./styles/SubscriptionsPage/SubscriptionParagraph";
import { SubscriptionVideoSection } from "./styles/SubscriptionsPage/SubscriptionVideoSection";
import { SubscriptionVideo } from "./styles/SubscriptionsPage/SubscriptionVideo";
import { SubscriptionVideoImage } from "./styles/SubscriptionsPage/SubscriptionVideoImage";
import { SubscriptionDescriptionVideo } from "./styles/SubscriptionsPage/SubscriptionDescriptionVideo";
import { SubscriptionTitleVideo } from "./styles/SubscriptionsPage/SubscriptionTitleVideo";
import { SubscriptionOwnerVideo } from "./styles/SubscriptionsPage/SubscriptionOwnerVideo";
import { SubscriptionStats } from "./styles/SubscriptionsPage/SubscriptionStats";
import { SubscriptionView } from "./styles/SubscriptionsPage/SubscriptionView";
import { SubscriptionDate } from "./styles/SubscriptionsPage/SubscriptionDate";

interface Props{
    video: any;
}

export const LibraryVideos: React.FC<Props> = ({ video }) => {
    return(
        <SubscriptionContainer>
            <SubscriptionParagraph>Library</SubscriptionParagraph>
            <SubscriptionVideoSection>
                {video.map((item: any) => (
                    <SubscriptionVideo key={item.titleVideo}>
                        <SubscriptionVideoImage background={item.background}></SubscriptionVideoImage>
                        <SubscriptionDescriptionVideo>
                            <SubscriptionTitleVideo>{item.titleVideo}</SubscriptionTitleVideo>
                            <SubscriptionOwnerVideo>{item.ownerChannel}</SubscriptionOwnerVideo>
                            <SubscriptionStats>
                                <SubscriptionView>{item.views}</SubscriptionView>
                                <SubscriptionDate>{item.data}</SubscriptionDate>
                            </SubscriptionStats>
                        </SubscriptionDescriptionVideo>
                    </SubscriptionVideo>
                ))}
            </SubscriptionVideoSection>
        </SubscriptionContainer>
    );
}