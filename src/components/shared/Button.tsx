import React from 'react';

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
   primary: "bg-primary",
   secondary: "bg-secondary text-white",
   success: "bg-success",
   warning: "bg-warning",
   danger: "bg-danger"
}

function Button({type, htmlType = 'button', disabled, icon, children, onClick}: buttonI) {
  return (
    <button type={htmlType} className={`rounded shadow hover:opacity-80 text-dark py-1.5 px-2 transition ease-out duration-500 ${type ? buttonClasses[type] : ""} ${disabled ? "opacity-60 hover:opacity-60 cursor-not-allowed":""}`} disabled={disabled} onClick={onClick}>
      {icon ? <i className='float-left mr-2 my-auto'>{icon}</i> : ""}<span className='float-left'>{children}</span>
   </button>
  )
}

export default Button