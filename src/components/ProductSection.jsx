import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { productSection, imageItems } from "../data/appData";
import { Link } from "react-router-dom";

function ProductSection() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `linear-gradient(
         rgba(69 68 100 / 99%),
          rgba(246 177 122 / 10%)
        ), url(${imageItems.productSectionBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          fixed
          sx={{
            paddingY: "150px",
          }}
        >
          <Grid container columnSpacing={3} rowSpacing={5}>
            {productSection.map((elem) => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 3,
                }}
                key={elem.id}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "2rem",
                    backgroundColor: "#5c6272",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={elem.icon}
                    sx={{ width: { xs: "10%", sm: "30%" } }}
                  />
                  <Typography
                    component={Link}
                    to={elem.link}
                    sx={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    {elem.label}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                    }}
                  >
                    {elem.info}
                  </Typography>
                  <Typography
                    component={Link}
                    to={`https://icons8.com`}
                    sx={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    Icon by Icons8
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ProductSection;
