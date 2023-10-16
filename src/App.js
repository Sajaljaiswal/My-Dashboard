import "./App.css";
import HomePage from "./Screens/HomePage";
import AfterHomePage from "./AfterHomePage";
import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <AfterHomePage />
        </>
      ) : (
        <>
          <HomePage />
        </>
      )}
    </div>
  );
}

export default App;
