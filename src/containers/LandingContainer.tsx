import React, { ReactElement } from "react";
import { useAuth } from "../contexts/AuthContext";
import SignUpContainer from "./SignUpContainer";
import EducationContainer from "./EducationContainer";
import SelectorSectionContainer from "./SelectorSectionContainer";

const LandingContainer = () => {
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

  return <>{loggedIn ? getLandingComponent() : <SignUpContainer />}</>;
};

export default LandingContainer;
