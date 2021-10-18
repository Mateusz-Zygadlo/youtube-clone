import { ExploreSection } from './styles/explore/ExploreSection';
import { ExploreCategoryCard } from './styles/explore/ExploreCategoryCard';
import { Icon } from './styles/navbar/Icon';
import { Paragraph } from './styles/navbar/Paragraph';

export const ExploreSectionBar = () => {
    return(
        <ExploreSection>
            <ExploreCategoryCard>
                <Icon className="material-icons">trending_up</Icon>
                <Paragraph>Trending</Paragraph>
            </ExploreCategoryCard>
            <ExploreCategoryCard>
                <Icon className="material-icons">volume_up</Icon>
                <Paragraph>Music</Paragraph>
            </ExploreCategoryCard>
            <ExploreCategoryCard>
                <Icon className="material-icons">local_movies</Icon>
                <Paragraph>Movies</Paragraph>
            </ExploreCategoryCard>
            <ExploreCategoryCard>
                <Icon className="material-icons">stream</Icon>
                <Paragraph>Live</Paragraph>
            </ExploreCategoryCard>
            <ExploreCategoryCard>
                <Icon className="material-icons">sports_esports</Icon>
                <Paragraph>Gaming</Paragraph>
            </ExploreCategoryCard>
            <ExploreCategoryCard>
                <Icon className="material-icons">article</Icon>
                <Paragraph>News</Paragraph>
            </ExploreCategoryCard>
            <ExploreCategoryCard>
                <Icon className="material-icons">sports</Icon>
                <Paragraph>Sports</Paragraph>
            </ExploreCategoryCard>
            <ExploreCategoryCard>
                <Icon className="material-icons">lightbulb</Icon>
                <Paragraph>Learning</Paragraph>
            </ExploreCategoryCard>
            <ExploreCategoryCard>
                <Icon className="material-icons">accessibility</Icon>
                <Paragraph>Fashion and Beauty</Paragraph>
            </ExploreCategoryCard>
        </ExploreSection>
    )
}