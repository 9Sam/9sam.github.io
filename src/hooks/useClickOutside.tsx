import { useEffect } from "react";

type Props = [
   ref: any,
   buttonRef: any,
   isOpen: boolean,
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
];

function useClickOutside([ref, buttonRef, isOpen, setIsOpen] : Props) {
   const handleClickOutside = (event: any) => {
      if (
         ref.current &&
         !ref.current.contains(event.target) &&
         buttonRef.current &&
         !buttonRef.current.contains(event.target as Node)
      ) 
      {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [isOpen]);
}

export default useClickOutside;
