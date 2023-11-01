export interface ImageI {
   name: string;
   text: string;
   src: string;
   object: string;
}

export interface ProjectI {
   id: number;
   name: string;
   description: string;
   points?: string[];
   front?: string;
   main?: boolean;
   tags?: string[];
   github?: string;
   link?: string;
   images?: ImageI[];
}
