import { createContext, useContext, useState } from "react";

type Props = {
   children: React.ReactNode;
};

type MenuContextT = {
   menuButtonRef: React.RefObject<HTMLButtonElement>;
   setMenuButtonRef: React.Dispatch<
      React.SetStateAction<React.RefObject<HTMLButtonElement>>
   >;
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext: any = createContext({});

function MenuContextProvider({ children }: Props) {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [menuButtonRef, setMenuButtonRef] = useState(null);

   return (
      <MenuContext.Provider value={{ menuButtonRef, setMenuButtonRef, isOpen, setIsOpen }}>
         {children}
      </MenuContext.Provider>
   );
}

const useMenuContext = (): MenuContextT => {
   return useContext(MenuContext);
};

export { MenuContextProvider, useMenuContext };
