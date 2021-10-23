import { GamingCategory } from "./GamingCategory";
import { GamingUploadsVideos } from "./GamingUploadsVideos";

export const GamingSection = () => {
    return(
        <>
            <GamingCategory gamingNameSection='Top live games' />
            <GamingUploadsVideos gamingNameSection='Uploads' />
        </>
    );
}