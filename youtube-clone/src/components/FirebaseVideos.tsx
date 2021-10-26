import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
import { app } from './Firebase';   

export const loadResults = async (hooksFunc: any, collectionName: string) => {
    const homeVideos: any[] = [];
    const db = getFirestore(app);
    const resultCollection = query(collection(db, collectionName))
    const resultSnapshot = await getDocs(resultCollection);

    const results = resultSnapshot.docs.map((doc) => {
        const background = doc.data().background;
        const data = doc.data().data;
        const ownerChannel = doc.data().ownerChannel;
        const titleVideo = doc.data().titleVideo;
        const views = doc.data().views;

        homeVideos.push({
            background,
            data,
            ownerChannel,
            titleVideo,
            views
        })
    })

    hooksFunc(homeVideos);

    return results;
}