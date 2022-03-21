import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

type AuthContextType = {
  userInfo: { userName: string; knowledgeLevel: string; userId: number };
  setUserInfo: Dispatch<
    SetStateAction<{ userName: string; knowledgeLevel: string; userId: number }>
  >;
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType>({
  userInfo: { userName: "", knowledgeLevel: "", userId: -1 },
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
    userId: -1,
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
