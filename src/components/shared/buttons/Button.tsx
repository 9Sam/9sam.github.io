type buttonT = "primary" | "secondary" | "success" | "warning" | "danger";
type htmlTypeT = "button" | "submit" | "reset" | undefined;

interface buttonI {
   type?: buttonT;
   htmlType?: htmlTypeT;
   children: any;
   icon?: any;
   disabled?: boolean;
   onClick?: any;
}

const buttonClasses = {
   primary:
      "text-l-primary bg-white hover:bg-l-primary hover:text-white dark:text-d-primary dark:bg-dark dark:hover:bg-d-primary dark:hover:text-dark",
   secondary: "bg-secondary text-white",
   success: "bg-success",
   warning: "bg-warning",
   danger: "bg-danger",
};

function Button({
   type,
   htmlType = "button",
   disabled,
   icon,
   children,
   onClick,
}: buttonI) {
   return (
      <button
         type={htmlType}
         className={`rounded shadow opacity-80 border-[1px] border-l-primary dark:border-d-primary hover:opacity-100 text-dark dark:text-dark py-1.5 px-2 transition ease-out duration-300 ${
            type ? buttonClasses[type] : ""
         } ${disabled ? "opacity-60 hover:opacity-60 cursor-not-allowed" : ""}`}
         disabled={disabled}
         onClick={onClick}
      >
         {icon ? <i className="float-left mr-2 my-auto">{icon}</i> : ""}
         <span className="float-left">{children}</span>
      </button>
   );
}

export default Button;
