import React from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Box, Card, CardMedia } from "@mui/material";
import { imageItems } from "../data/appData";

function Home() {
  return (
    <>
      <Box component="section">
        <Card sx={{ height: "550px", display: "flex" }}>
          <CardMedia
            component="img"
            src={`${imageItems.heroSectionBgImage}`}
            alt="bg image"
            sx={{ height: "100%", display:{
              xs:'none',
              md: 'initial'
            } }}
          />
          <CardMedia
            component="img"
            src={`${imageItems.heroSectionImage}`}
            sx={{position: "fixed", width:'25rem', right: '5rem', top:'10rem' }}
          />
        </Card>
      </Box>
      <ScrollToTopButton />
    </>
  );
}

export default Home;
