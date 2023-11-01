import { createContext, useContext, useState } from "react";

type Props = {
   children: React.ReactNode;
};

type MenuContextT = {
   menuButtonRef: React.RefObject<HTMLButtonElement>;
   setMenuButtonRef: React.Dispatch<
      React.SetStateAction<React.RefObject<HTMLButtonElement>>
   >;
};

const MenuContext: any = createContext({});

function MenuContextProvider({ children }: Props) {
   const [menuButtonRef, setMenuButtonRef] = useState(null);

   return (
      <MenuContext.Provider value={{ menuButtonRef, setMenuButtonRef }}>
         {children}
      </MenuContext.Provider>
   );
}

const useMenuContext = (): MenuContextT => {
   return useContext(MenuContext);
};

export { MenuContextProvider, useMenuContext };
