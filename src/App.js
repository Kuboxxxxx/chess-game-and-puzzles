import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { NavigationBar } from "./components/NavigationMenu";

export const App = () => {
<<<<<<< HEAD
  return <div>
    <BrowserRouter>
    <NavigationBar />
    
    <AppRoutes />
    </BrowserRouter>
  </div>;
=======
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />

        <AppRoutes />
      </BrowserRouter>
    </div>
  );
>>>>>>> c34df50e7f961ad21cc1ab570b375b84b2574819
};
