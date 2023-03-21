import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { NavigationBar } from "./components/NavigationMenu";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />

        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};
