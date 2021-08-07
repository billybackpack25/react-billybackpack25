import { createContext, useContext } from "react";

const authContext = createContext();

const site = {
    name: 'BillyBackPack25',
    favicon: '/favicon-32x32.png'
}

export default function ProvideSite({ children }) {
    return (
      <authContext.Provider value={site}>
        {children}
      </authContext.Provider>
    );
}

export function useSite() {
    return useContext(authContext);
}