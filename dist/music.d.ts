export interface Video {
    title: string;
    url: string;
}
declare function search(query: string): Promise<Video>;
export default search;
