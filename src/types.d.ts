export type ItemsT = {
   title: string;
   technologies: TechnologyI[];
};

export type IsOpenStateT = {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};