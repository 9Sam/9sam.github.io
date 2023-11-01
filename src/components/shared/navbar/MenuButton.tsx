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
         className="ml-3 inline-flex items-center rounded-lg p-2 text-sm hover:fill-l-primary focus:outline-none dark:fill-white dark:text-white  dark:hover:fill-d-primary dark:focus:ring-d-primary md:hidden"
         aria-controls="mobile-menu-2"
         aria-expanded="false"
         ref={buttonRef}
      >
         <MdMenu className="h-5 w-5" fill="dark" />
      </button>
   );
}

export default MenuButton;
