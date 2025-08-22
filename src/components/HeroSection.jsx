import React from "react";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { imageItems } from "../data/appData";
import { useNavigate } from "react-router-dom";

function HeroSection() {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/about')
  }

  return (
    <>
      <Box component="section">
        <Card
          sx={{
            height: {
              xs: "450px",
              sm: "400px",
              lg: "500px",
            },
            display: "flex",
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            src={`${imageItems.heroSectionBgImage}`}
            alt="bg image"
          />
          <CardMedia
            component="img"
            src={`${imageItems.heroSectionImage}`}
            sx={{
              position: "absolute",
              width: { sm: "20rem", lg: "25rem" },
              right: "5rem",
              top: "4rem",
              display: { xs: "none", md: "initial" },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "5rem",
              width: {
                xs: "90%",
                sm: "80%",
                md: "50%",
              },
              marginLeft: { xs: "1rem", sm: "5rem" },
            }}
          >
            <Typography
              component="h3"
              sx={{
                fontSize: {
                  xs: "1.5em",
                  sm: "2em",
                  lg: "2.5em",
                },
              }}
              gutterBottom
              color="#123838d1"
            >
              Welcome CraftLand Lorem ipsum dolor sit amet.
            </Typography>
            <Typography
              component="h5"
              variant="h5"
              gutterBottom
              color="#40468f"
            >
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </Typography>
            <Button
              variant="contained"
              sx={{ marginY: "2rem", padding: "15px", bgcolor: "#7051cb" }}
              onClick={handleClick}
            >
              Read More
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default HeroSection;
