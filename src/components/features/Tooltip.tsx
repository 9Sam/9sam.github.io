import { ReactNode } from "react";

interface Props {
   children: ReactNode;
   tooltip?: string;
}

function Tooltip({ children, tooltip }: Props): JSX.Element {
   return (
      <div className="group relative inline-block">
         {children}
         <span
            className="invisible absolute top-full mt-2 rounded 
      bg-dark p-1 text-white opacity-0 transition group-hover:visible group-hover:opacity-100"
         >
            {tooltip}
         </span>
      </div>
   );
}

export default Tooltip;
