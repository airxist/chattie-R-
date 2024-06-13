import { createContext, useContext, useReducer, useState } from "react";
import reducer from "./reducer";

const UserContext = createContext();
const initialState = {
    jose: true
}

const UserProvider = ({children}) => {
    const [ authImg, setAuthImg ] = useState(true);
    const [init, dispatch] = useReducer(reducer, initialState);
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