import ytsearch from "yt-search";

export interface Video {
    title: string,
    url: string,
}

async function search(query: string): Promise<Video>
{
    try {
        const result = await ytsearch(query)
        if (!result.videos) return { title: "", url: "" };
        const video = result.videos[Math.floor(Math.random()*result.videos.length)];
        return {
            title: video.title,
            url: video.url,
        }
    } catch {
        console.error("Error")
    }
    return { title: "", url: "" };
}

export default search;
