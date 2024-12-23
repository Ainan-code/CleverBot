import NavigationLink from './shared/NavigationLink';

  import { AppBar, Toolbar } from '@mui/material';
import Logo from './shared/Logo';
import { useAuth } from '../context/AuthContext';
  
  const Header = () => {

    const auth = useAuth();
    return (
      <AppBar sx={{bgcolor: "transparent", position: "static", boxShadow: "none"}}>

   <Toolbar sx={{display: "flex", }}>

    <Logo/>
   <div>
    {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#4CAF50"
                to="/chat"
                text="Go To Chat"
                textColor="white"
              />
              <NavigationLink
                bg="#4CAF50"
                textColor="white"
                to="/"
                text="logout"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#4CAF50"
                to="/login"
                text="Login"
                textColor="white"
              />
              <NavigationLink
                bg="#4CAF50"
                textColor="white"
                to="/signup"
                text="Signup"
              />
            </>
          )}
        </div>
   </Toolbar>
      </AppBar>
    )
  }
  
  export default Header;