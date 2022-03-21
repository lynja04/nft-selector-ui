import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "./contexts/AuthContext";
import SignUpContainer from "./containers/SignUpContainer";

const App: React.FC = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const { loggedIn } = useAuth();

  return (
    <ThemeProvider theme={darkTheme}>
      <Navigation>
        {loggedIn ? <div>Welcome!</div> : <SignUpContainer />}
      </Navigation>
    </ThemeProvider>
  );
};

export default App;
