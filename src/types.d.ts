export interface TechnologyI {
   name: string;
   link: string;
   skill: boolean;
   component: React.ReactElement;
}

export type ItemsT = {
   title: string;
   technologies: TechnologyI[];
};
