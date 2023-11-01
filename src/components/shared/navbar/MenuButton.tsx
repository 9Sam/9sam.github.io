import { MdMenu } from "react-icons/md";
import { useMenuContext } from "../../../context/MenuContext";
import { useEffect, useRef } from "react";

type Props = {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MenuButton({ isOpen, setIsOpen }: Props) {
   const buttonRef = useRef<HTMLButtonElement | null>(null);
   const { setMenuButtonRef } = useMenuContext();

   useEffect(() => {
      setMenuButtonRef(buttonRef);
   }, []);

   return (
      <button
         onClick={() => setIsOpen(!isOpen)}
         data-collapse-toggle="mobile-menu"
         type="button"
         className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:fill-l-primary dark:hover:fill-d-primary focus:outline-none  dark:fill-white dark:text-white dark:focus:ring-d-primary"
         aria-controls="mobile-menu-2"
         aria-expanded="false"
         ref={buttonRef}
      >
         <MdMenu className="w-5 h-5" fill="dark" />
      </button>
   );
}

export default MenuButton;
