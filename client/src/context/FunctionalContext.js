import React, { useContext, useEffect, useState } from 'react'

const FunctionalContext = React.createContext()

export function useFunc(){
    return useContext(FunctionalContext)
}

export function FuncProvider({children}) {
    const [Portfolio, setPortfolio] = useState([])
    
    useEffect(()=>{
        console.log(Portfolio)

    }, [Portfolio])

    const value= {
        Portfolio, 
        setPortfolio, 

    }

    return (
        <FunctionalContext.Provider value={value}>
            {children}
        </FunctionalContext.Provider>
  )
}