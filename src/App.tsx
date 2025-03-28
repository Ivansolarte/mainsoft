import { useEffect } from "react";
import { Login } from "./pages/login";
import { Routees } from "./routes/routes";
import { useAuthStore } from "./lib/store/authStore";

function App() {
  const { isAuthenticated ,login} = useAuthStore();

  useEffect(() => {    
    console.log("cargando app");
    
    if(sessionStorage.getItem('token')) login();
  }, []) 

  return <>{isAuthenticated ? <Routees /> : <Login />}</>;
}

export default App;
