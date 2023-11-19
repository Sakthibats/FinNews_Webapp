import React, { useContext, useEffect, useState } from 'react'

const FunctionalContext = React.createContext()

export function useFunc(){
    return useContext(FunctionalContext)
}

export function FuncProvider({children}) {
    const [Portfolio, setPortfolio] = useState([])
    const [num, setnum] = useState(0)
    
    useEffect(()=>{
        console.log(Portfolio)

    }, [Portfolio])

    const value= {
        Portfolio, 
        setPortfolio, 
        setnum,
        num
    }

    return (
        <FunctionalContext.Provider value={value}>
            {children}
        </FunctionalContext.Provider>
  )
}