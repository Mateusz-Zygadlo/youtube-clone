import { MobileCategoryContainer } from './styles/categorySection/MobileCategoryContainer';
import { MobileIconCard } from './styles/categorySection/MobileIconCard';
import { Icon } from './styles/navbar/Icon';
import { Paragraph } from './styles/categorySection/Paragraph';

export const MobileCategory = () => {
    return(
        <>
            <MobileCategoryContainer>
                <MobileIconCard>
                    <Icon className="material-icons">home</Icon>
                    <Paragraph mobile='mobile'>Home</Paragraph>
                </MobileIconCard>
                <MobileIconCard>
                    <Icon className="material-icons">explore</Icon>
                    <Paragraph mobile='mobile'>Explore</Paragraph>
                </MobileIconCard>
                <MobileIconCard>
                    <Icon className="material-icons">subscriptions</Icon>
                    <Paragraph mobile='mobile'>Subscription</Paragraph>
                </MobileIconCard>
                <MobileIconCard>
                    <Icon className="material-icons">video_library</Icon>
                    <Paragraph mobile='mobile'>Library</Paragraph>
                </MobileIconCard>
            </MobileCategoryContainer>
        </>
    )
}