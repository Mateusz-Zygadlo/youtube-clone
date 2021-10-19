import { SubscriptionContainer } from "./styles/subscriptionsPage/SubscriptionContainer";
import { SubscriptionParagraph } from "./styles/subscriptionsPage/SubscriptionParagraph";
import { SubscriptionVideoSection } from "./styles/subscriptionsPage/SubscriptionVideoSection";
import { SubscriptionVideo } from "./styles/subscriptionsPage/SubscriptionVideo";
import { SubscriptionVideoImage } from "./styles/subscriptionsPage/SubscriptionVideoImage";
import { SubscriptionDescriptionVideo } from "./styles/subscriptionsPage/SubscriptionDescriptionVideo";
import { SubscriptionTitleVideo } from "./styles/subscriptionsPage/SubscriptionTitleVideo";
import { SubscriptionOwnerVideo } from "./styles/subscriptionsPage/SubscriptionOwnerVideo";
import { SubscriptionStats } from "./styles/subscriptionsPage/SubscriptionStats";
import { SubscriptionView } from "./styles/subscriptionsPage/SubscriptionView";
import { SubscriptionDate } from "./styles/subscriptionsPage/SubscriptionDate";

export const HistorySection = () => {
    return(
        <SubscriptionContainer>
            <SubscriptionParagraph>History</SubscriptionParagraph>
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