import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { LoginApi } from "../api/LoginApi";
import { useState } from "react";
import {
  Alert,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

const SignUpComponent: React.FC = () => {
  const { setLoggedIn, updateUserInfo } = useAuth();
  const [openAlert, setAlertOpen] = useState(false);
  const [knowledgeLevel, setKnowledgeLevel] = useState("beginner");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginDTO = {
      userName: data.get("email")?.toString(),
      password: data.get("password")?.toString(),
      knowledgeLevel: knowledgeLevel,
    };
    // setLoggedIn(true);
    // setUserInfo({
    //   email: loginDTO.email ? loginDTO.email : "",
    //   knowledgeLevel: knowledgeLevel,
    // });
    LoginApi.login(loginDTO)
      .then((response: any) => {
        setAlertOpen(true);
        setLoggedIn(true);
        updateUserInfo(
          loginDTO.userName ? loginDTO.userName : "",
          response.data,
          knowledgeLevel
        );
      })
      .catch(() => {});
  };

  return (
    <Container component="main" maxWidth="xs">
      {openAlert && <Alert severity="success">Success!</Alert>}

      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <FormControl>
                <FormLabel id="nft-knowledge-level-group-label">
                  Please select your NFT Knowledge Level
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="nft-knowledge-level-group-label"
                  name="nft-knowledge-level-group"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setKnowledgeLevel((event.target as HTMLInputElement).value);
                  }}
                  value={knowledgeLevel}
                >
                  <FormControlLabel
                    value="beginner"
                    control={<Radio />}
                    label="Beginner"
                  />
                  <FormControlLabel
                    value="Intermediate"
                    control={<Radio />}
                    label="Intermediate"
                  />
                  <FormControlLabel
                    value="Pro"
                    control={<Radio />}
                    label="Pro"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpComponent;
