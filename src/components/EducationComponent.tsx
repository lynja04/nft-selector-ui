import React from "react";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ImageList, ImageListItem, Paper } from "@mui/material";

function Item(props: {
  item: {
    name:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    description:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  };
}) {
  return (
    <Grid item xs={12} md={6} sx={{ m: 1 }}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1, marginLeft: 4, marginRight: 4 }}>
            <Typography component="h2" variant="h5">
              {props.item.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Learn some stuff with links
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {props.item.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Educate
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Educate
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Educate
            </Typography>
            <ImageList
              sx={{ width: "65%", height: "65%" }}
              cols={1}
              rowHeight={164}
            >
              <ImageListItem>
                <img
                  src={`https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg`}
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

const EducationComponent = () => {
  const items = [
    {
      name: "What actually is an NFT?",
      description: "... nft explanation...",
    },
    {
      name: "Something else about NFTs",
      description: "Something else about NFTs",
    },
  ];

  return (
    <div>
      <Carousel autoPlay={false} navButtonsAlwaysVisible={true}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Button
        fullWidth
        sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
        onClick={() => {
          window.location.href = "http://localhost:3000/selection";
        }}
      >
        Ready to move on?
      </Button>
    </div>
  );
};

export default EducationComponent;
