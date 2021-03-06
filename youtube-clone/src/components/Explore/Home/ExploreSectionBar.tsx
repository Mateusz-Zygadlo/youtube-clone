import { ExploreSection } from '../../styles/Explore/Home/ExploreSection';
import { ExploreCategoryCard } from '../../styles/Explore/Home/ExploreCategoryCard';
import { Icon } from '../../styles/Navbar/Icon';
import { Paragraph } from '../../styles/Navbar/Paragraph';
import { Link } from 'react-router-dom';

export const ExploreSectionBar = () => {
    return(
        <ExploreSection>
            <Link to='/explore/trending/now'>
                <ExploreCategoryCard>
                    <Icon className="material-icons">trending_up</Icon>
                    <Paragraph>Trending</Paragraph>
                </ExploreCategoryCard>
            </Link>
            <Link to='/explore/music/home'>
                <ExploreCategoryCard>
                    <Icon className="material-icons">volume_up</Icon>
                    <Paragraph>Music</Paragraph>
                </ExploreCategoryCard>
            </Link>
            <Link to='/explore/movies/browse'>
                <ExploreCategoryCard>
                    <Icon className="material-icons">local_movies</Icon>
                    <Paragraph>Movies</Paragraph>
                </ExploreCategoryCard>
            </Link>
            <Link to='/explore/live/home'>
                <ExploreCategoryCard>
                    <Icon className="material-icons">stream</Icon>
                    <Paragraph>Live</Paragraph>
                </ExploreCategoryCard>
            </Link>
            <Link to='/explore/gaming'>
                <ExploreCategoryCard>
                    <Icon className="material-icons">sports_esports</Icon>
                    <Paragraph>Gaming</Paragraph>
                </ExploreCategoryCard>
            </Link>
            <Link to='/explore/news/home'>
                <ExploreCategoryCard>
                    <Icon className="material-icons">article</Icon>
                    <Paragraph>News</Paragraph>
                </ExploreCategoryCard>
            </Link>
            <Link to='/explore/sports'>
                <ExploreCategoryCard>
                    <Icon className="material-icons">sports</Icon>
                    <Paragraph>Sports</Paragraph>
                </ExploreCategoryCard>
            </Link>
            <Link to='/explore/learning'>
                <ExploreCategoryCard>
                    <Icon className="material-icons">lightbulb</Icon>
                    <Paragraph>Learning</Paragraph>
                </ExploreCategoryCard>
            </Link>
            <Link to='/explore/fashion'>
                <ExploreCategoryCard>
                    <Icon className="material-icons">accessibility</Icon>
                    <Paragraph>Fashion and Beauty</Paragraph>
                </ExploreCategoryCard>
            </Link>
        </ExploreSection>
    )
}