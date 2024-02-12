'use client'
import { createContext, useContext, useEffect, useState } from "react";
import PocketBase from "pocketbase";


export const PocketBaseContext = createContext< {client: PocketBase| null} >({client : new PocketBase("http://127.0.0.1:8090").autoCancellation(false)  });

export const PocketBaseProvider = ({ children }:any)  => {
  const [client, setClient] = useState<PocketBase| null>(new PocketBase("http://127.0.0.1:8090").autoCancellation(false))
  
  useEffect(() => {
  const updateClient = () =>  {
    return setClient(new PocketBase("http://127.0.0.1:8090").autoCancellation(false));
  }
  updateClient()
  }
  , [])

  return (
    <PocketBaseContext.Provider value={{client}}>
      {children}
    </PocketBaseContext.Provider>
  );
}


export const usePocketbaseContext = () => {
  const context = useContext(PocketBaseContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};