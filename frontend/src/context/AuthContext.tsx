import { createContext } from "react";

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


const AuthContextProvider = ({children}: {children: React.ReactNode}) => {

    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, , setIsLoggedIn] = useState(false);
    
    // fetch the user cookies and check if it is valid;
    useEffect(() => {
    }, []);
   
    const login: UserAuth["login"] = async (email, password) => {
    }
}