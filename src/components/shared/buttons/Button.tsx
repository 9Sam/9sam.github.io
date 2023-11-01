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
         className={`rounded border-[1px] border-l-primary py-1.5 px-2 text-dark opacity-80 shadow transition duration-300 ease-out hover:opacity-100 dark:border-d-primary dark:text-dark ${
            type ? buttonClasses[type] : ""
         } ${disabled ? "cursor-not-allowed opacity-60 hover:opacity-60" : ""}`}
         disabled={disabled}
         onClick={onClick}
      >
         {icon ? <i className="float-left my-auto mr-2">{icon}</i> : ""}
         <span className="float-left">{children}</span>
      </button>
   );
}

export default Button;
