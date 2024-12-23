import { createContext, useContext, useState, useEffect } from "react";
import { checkAuthStatus, loginUser, LogoutUser, signupUser } from "../helpers/api-requests";


type User = {
    fullName: string;
    email: string;

}
type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    
    login: (email: string, password: string) => Promise<void>;
    signup: (fullfullName: string, email: string, password: string) => Promise<void>;
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
            setUser({email: data.email, fullName: data.fullName});
            setIsLoggedIn(true);
          }

        }

        fetchUser();
    }, []);
   
    const login =  async (email: string, password: string) => {
        const data = await loginUser(email, password);
         
        if (data) {
            setUser({email: data.email, fullName: data.fullName});
            setIsLoggedIn(true);
           
        }
     

    };

    const signup =  async (fullName: string, email: string, password: string) => {
        const data = await signupUser(fullName, email, password);

        if (data) {
            setUser({email: data.email, fullName: data.fullName});
            setIsLoggedIn(true);
           
        }
      
    };

    const logout =  async () => {
       const data = await LogoutUser();
       if (data) {
        setUser(null);
        setIsLoggedIn(false);
        window.location.reload();
       }
    };

    const value = {
        user, isLoggedIn, login, signup, logout
    };


    return  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};


export const useAuth = () => useContext(AuthContext);