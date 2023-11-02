type Props = {
   color: string;
}

function BarButton({color}: Props) {
   const colors: any = {
      green: "bg-green-500",
      yellow: "bg-yellow-500",
      red: "bg-red-500",
   } 
   return <div className={`${colors[color]} button w-1.5 h-1.5 rounded-full hover:opacity-50`}></div>;
}

export default BarButton;