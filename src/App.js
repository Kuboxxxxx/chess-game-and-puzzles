import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { NavigationBar } from "./components/NavigationMenu";
import { useState } from "react";

export const App = () => {
  const userList = JSON.parse(localStorage.getItem("userList")) || [];
  
  const [user, setNewUser] = useState(userList)

  return (
    <div>
      <BrowserRouter>
        <NavigationBar />

        <AppRoutes user={user} setNewUser={setNewUser}/>
      </BrowserRouter>
    </div>
  );
};
