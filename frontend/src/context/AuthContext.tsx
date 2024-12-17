import { createContext, useContext, useState, useEffect } from "react";
import { checkAuthStatus, loginUser } from "../helpers/api-requests";

type User = {
    name: string;
    email: string;

}
type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;

}

const AuthContext = createContext<UserAuth | null>(null);


export const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [user, setUser] = useState<User | null>(null);
   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    
    // fetch the user cookies and check if it is valid;
    useEffect(() => {
        async function fetchUser() {
          const data = await checkAuthStatus();
          if (data) {
            setUser({email: data.email, name: data.name});
            setIsLoggedIn(true);
          }

        }

        fetchUser();
    }, []);
   
    const login =  async (email: string, password: string) => {
        const data = await loginUser(email, password);
         
        if (data) {
            setUser({email: data.email, name: data.name});
            setIsLoggedIn(true);
        }


    };

    const signup =  async (name: string,email: string, password: string) => {
        
    };

    const logout =  async () => {

    };

    const value = {
        user, isLoggedIn, login, signup, logout
    };


    return  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};


export const useAuth = () => useContext(AuthContext);