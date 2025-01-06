export type ProjectGroups = {
    name: string;
    id: string;
    text: string;
    imagesPerRow: number;
    projects: {source: string; route: string; alt: string}[]
}[];

export type ImageGallery = {
    path: string | string[]; 
    width: number; 
    height: number; 
    side: 'left' | 'right'; 
    start?: number 
}[];

export type TextDescription = (string | BulletList)[];
export type BulletList = string[];

export function IsBulletList(textDescriptionElement: string | BulletList): textDescriptionElement is BulletList {
    return Array.isArray(textDescriptionElement as BulletList) === true;
}

export function IsPathList(path: string | string []): path is string[] { 
    return Array.isArray(path as string[]) === true;
}

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
    text?: TextDescription;
    video?: { id: string; altThumb?: string; };
    images?: ImageGallery;
}

export type SmallProject = {
    name: string;
    designer?: string;
    inHouse?: boolean;
    materials?: string;
    text?: TextDescription;
    images?: ImageGallery;
};

export type SmallProjects = {
    groupName: string;
    route: string;
    group: SmallProject[]
};

export type Projects = Project[];
export type MixedProjects = (Project | SmallProjects)[]