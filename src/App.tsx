import React, { ReactElement } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SelectorSectionContainer from "./containers/SelectorSectionContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingContainer from "./containers/LandingContainer";

const App: React.FC = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navigation>
          <Routes>
            <Route path="/" element={<LandingContainer />} />
            <Route path="/selection" element={<SelectorSectionContainer />} />
          </Routes>
        </Navigation>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
