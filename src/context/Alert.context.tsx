import React, { createContext } from 'react'

export const AlertContext = createContext({});

type PropsT = {
   children: React.ReactNode;
}

function AlertContextProvider(props:PropsT) {
  return (
   <AlertContext.Provider
      value={"hola"}>
      {props.children}
   </AlertContext.Provider>
  )
}

export default AlertContext;