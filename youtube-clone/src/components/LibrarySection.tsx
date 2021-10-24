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

export const LibrarySection = () => {
    return(
        <SubscriptionContainer>
            <SubscriptionParagraph>Library</SubscriptionParagraph>
            <SubscriptionVideoSection>
                <SubscriptionVideo>
                    <SubscriptionVideoImage></SubscriptionVideoImage>
                    <SubscriptionDescriptionVideo>
                        <SubscriptionTitleVideo>this is a title this is a title this is a title</SubscriptionTitleVideo>
                        <SubscriptionOwnerVideo>this is a Owner video</SubscriptionOwnerVideo>
                        <SubscriptionStats>
                            <SubscriptionView>3.4k views</SubscriptionView>
                            <SubscriptionDate>2 years ago</SubscriptionDate>
                        </SubscriptionStats>
                    </SubscriptionDescriptionVideo>
                </SubscriptionVideo>
            </SubscriptionVideoSection>
        </SubscriptionContainer>
    )
}