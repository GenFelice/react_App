import { createContext } from "react";
import * authService from "../services/auth"
export const AuthContext = createContext({
    user: null,
    login: async () => {},
    logout: () => {}
});

export function AuthProvider ((children))
{
 const [user,setUser]= useState(null);

    return <AuthContext.Provider value={user,login,logout}
></AuthContext.Provider>
}