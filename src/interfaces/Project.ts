export interface ImageI {
   name: string;
   text: string;
   src: string;
   object: string;
}

interface WindowI {
   topColor: string;
   bottomColor: string;
   
}

export interface ProjectI {
   id: number;
   name: string;
   description: string;
   points?: string[];
   front?: string;
   window?: WindowI;
   main?: boolean;
   tags?: string[];
   github?: string;
   link?: string;
   images?: ImageI[];
}
