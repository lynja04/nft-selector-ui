import axios, { AxiosPromise } from "axios";

export const LoginApi = {
  login(loginDTO: {
    password: string | undefined;
    knowledgeLevel: string | undefined;
    userName: string | undefined;
  }): Promise<AxiosPromise> {
    return axios.post("http://localhost:8080/login/", loginDTO);
  },
};
