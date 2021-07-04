import React, {createContext, useState} from "react";


export const AppContext = createContext();

const AppProvider = ({children}) =>{

    const [isUserLogged, setIsUserLogged] = useState(false);
    const [logedUserName, setLogedUserName ] = useState('test2')
    const [coordsData, setCoordsData] = useState([])

    const userLoginHandler = (value) => setIsUserLogged(value);
    const userNameHandler = (name) => setLogedUserName(name);
    const coordsHandler = (coords) => setCoordsData(coords);


    return (
        <AppContext.Provider value={{isUserLogged, userLoginHandler, logedUserName, userNameHandler, coordsData, coordsHandler}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;