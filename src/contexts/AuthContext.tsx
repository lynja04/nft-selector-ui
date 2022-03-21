import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

type AuthContextType = {
  userInfo: { userName: string; knowledgeLevel: string };
  setUserInfo: Dispatch<
    SetStateAction<{ userName: string; knowledgeLevel: string }>
  >;
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType>({
  userInfo: { userName: "", knowledgeLevel: "" },
  setUserInfo: () => {},
  loggedIn: false,
  setLoggedIn: () => {},
});

type AuthContextProviderProps = {
  children: ReactElement;
};

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    knowledgeLevel: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{ userInfo, setUserInfo, loggedIn, setLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuth };
