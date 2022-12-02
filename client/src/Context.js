import React, { useContext, useState } from "react";

const Infocontext = React.createContext();

export function useInfo(){
    return useContext(Infocontext)
}

export function InfoProvider({ children }){
    const [score, setscore] = useState(0);

    const context = {
        score, 
        setscore
    }

    return (<Infocontext.Provider value = {context}>{children}</Infocontext.Provider>);
}