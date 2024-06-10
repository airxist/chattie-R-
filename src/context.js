import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [ authImg, setAuthImg ] = useState(true);

    return (
        <UserContext.Provider value={{
            authImg,
            setAuthImg
        }}>
            {children}
        </UserContext.Provider>
    )
}

const useGlobalContext = () => useContext(UserContext);

export {
    UserProvider,
    useGlobalContext
}