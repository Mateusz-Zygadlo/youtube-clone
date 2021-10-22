import { MoviesVideo } from '../Explore/MoviesVideo';

export const MovieSection = () => {
    return(
        <>
            <MoviesVideo movieSectionName='Recommended movies for you' />
            <MoviesVideo movieSectionName='Top Selling' />
        </>
    );
}