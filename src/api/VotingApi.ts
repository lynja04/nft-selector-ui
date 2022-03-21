import axios, { AxiosPromise } from "axios";

export const VotingApi = {
  castVote(voteDTO: {
    userId: number | undefined;
    category: string | undefined;
  }): Promise<AxiosPromise> {
    return axios.post("http://localhost:8080/voting/", voteDTO);
  },

  getVotingResults(userId: number): Promise<AxiosPromise> {
    return axios.get(`http://localhost:8080/voting/results/${userId}`);
  },
};
