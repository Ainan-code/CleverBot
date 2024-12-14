import { createContext, useContext, useState, useEffect } from "react";

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
    const [isLoggedIn, , setIsLoggedIn] = useState(false);
    
    // fetch the user cookies and check if it is valid;
    useEffect(() => {
    }, []);
   
    const login =  async (email, password) => {

    };

    const signup =  async (name,email, password) => {
        
    };

    const logout =  async () => {

    };

    const value = {
        user, isLoggedIn, login, signup, logout
    };


    return  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};


export const useAuth = () => useContext(AuthContext);