import React, { ReactElement } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "./contexts/AuthContext";
import SignUpContainer from "./containers/SignUpContainer";
import EducationContainer from "./containers/EducationContainer";
import SelectorSectionContainer from "./containers/SelectorSectionContainer";

const App: React.FC = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const { loggedIn, userInfo } = useAuth();

  const getLandingComponent = (): ReactElement => {
    switch (userInfo?.knowledgeLevel) {
      case "beginner": {
        return <EducationContainer />;
      }
      default:
        return <SelectorSectionContainer />;
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Navigation>
        {loggedIn ? getLandingComponent() : <SignUpContainer />}
      </Navigation>
    </ThemeProvider>
  );
};

export default App;
