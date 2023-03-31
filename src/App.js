import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { NavigationBar } from "./components/NavigationMenu";
import { useState } from "react";

export const App = () => {
  const userList = JSON.parse(localStorage.getItem("userList")) || [];
  const getCurrentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
  
  const [user, setNewUser] = useState(userList)
  const [currentUser, setCurrentUser] = useState(getCurrentUser)

  return (
    <div>
      <BrowserRouter>
        <NavigationBar />

        <AppRoutes user={user} setNewUser={setNewUser} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </BrowserRouter>
    </div>
  );
};
