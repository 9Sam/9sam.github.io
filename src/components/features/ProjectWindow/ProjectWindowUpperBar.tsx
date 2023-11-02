import BarButton from "./BarButton";

type Props = {
   color: string;
}

function ProjectWindowUpperBar({color}: Props){
   return (
      <div className={`w-full h-4 rounded-tl rounded-tr`} style={{backgroundColor: color}}>
         <div className="flex flex-row gap-2 justify-end mr-2 py-1.5">
            <BarButton color="green"/>
            <BarButton color="yellow"/>
            <BarButton color="red"/>
         </div>
      </div>
   );
}

export default ProjectWindowUpperBar;