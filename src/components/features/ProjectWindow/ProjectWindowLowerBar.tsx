type Props = {
   color: string;
}

function ProjectWindowLowerBar({color}: Props){
   return (
      <div className="w-full h-4 rounded-bl rounded-br" style={{backgroundColor: color}}>
      </div>
   );
}

export default ProjectWindowLowerBar;