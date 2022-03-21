import React from "react";
import { Paper, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useAuth } from "../contexts/AuthContext";
import { VotingApi } from "../api/VotingApi";

const SelectorSectionComponent = () => {
  const { userInfo } = useAuth();

  const castVote = (category: string) => {
    const voteDTO = {
      userId: userInfo.userId,
      category: category,
    };
    VotingApi.castVote(voteDTO).then((response) => {});
  };

  return (
    <div>
      <Typography component="h2" variant="h5">
        Vote for your favorite NFT!
      </Typography>
      <Paper sx={{ m: 2 }}>
        <Stack spacing={2}>
          <div style={{ height: "65%", width: "100%" }}>
            <CardMedia
              component="img"
              image="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
              alt="nft1"
            />
          </div>
          <Button
            fullWidth
            sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
            onClick={() => {
              castVote("Art");
            }}
          >
            Vote!
          </Button>
        </Stack>
      </Paper>
      <Paper sx={{ m: 2 }}>
        <Stack spacing={2}>
          <div style={{ height: "65%", width: "100%" }}>
            <CardMedia
              component="img"
              height="200"
              width={"200"}
              image="https://techcrunch.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-19-at-9.58.02-AM.png?w=730&crop=1"
              alt="nft2"
            />
          </div>
          <Button
            fullWidth
            sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
            onClick={() => {
              castVote("Sports");
            }}
          >
            Vote!
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};

export default SelectorSectionComponent;
