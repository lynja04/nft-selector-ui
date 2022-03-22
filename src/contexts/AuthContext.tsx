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
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
  updateUserInfo: Function;
};

const AuthContext = createContext<AuthContextType>({
  userInfo: { userName: "", knowledgeLevel: "", userId: -1 },
  updateUserInfo: () => {},
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

  const updateUserInfo = (
    userName: string,
    userId: number,
    knowledgeLevel: string
  ) => {
    setUserInfo({
      userName: userName,
      userId: userId,
      knowledgeLevel: knowledgeLevel,
    });
  };

  return (
    <AuthContext.Provider
      value={{ userInfo, loggedIn, setLoggedIn, updateUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuth };
