import React, {createContext, useState} from "react";


export const AppContext = createContext();

const AppProvider = ({children}) =>{

    const [isUserLogged, setIsUserLogged] = useState(false);
    const [logedUserName, setLogedUserName ] = useState('zenek')

    const userLoginHandler = (value) => setIsUserLogged(value);
    const userNameHandler = (name) => setLogedUserName(name);


    return (
        <AppContext.Provider value={{isUserLogged, userLoginHandler, logedUserName, userNameHandler}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;