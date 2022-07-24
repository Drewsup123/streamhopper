export interface ISearchResult {
    "name": string;
    "relevance": number;
    "type": "tv_series" | string;
    "id": number;
    "year": number;
    "result_type": "title" | string;
    "tmdb_id": number;
    "tmdb_type": "tv" | string;
    "image_url": string | null; 
}

export interface ITypeResult {
    "source_id": number;
    "name": string;
    "type": string;
    "region": string;
    "ios_url": string | null;
    "android_url": string | null;
    "web_url": string | null;
    "format": "HD" | "SD" | string;
    "price": number;
    "seasons": number;
    "episodes": number;
}