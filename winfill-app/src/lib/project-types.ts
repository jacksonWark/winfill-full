export type ProjectGroups = {
    name: string;
    id: string;
    text: string;
    imagesPerRow: number;
    projects: {source: string; route: string; alt: string}[]
}[];

export type Project = {
    name: string;
    category: string;
    location: string;
    started?: number;
    status: string;
    designer?: string;
    inHouse?: boolean;
    route: string;
    conceptImage?: string;
    text?: string[];
    video?: { id: string; altThumb?: string; };
    images?: string[];
}

export type Projects = Project[];