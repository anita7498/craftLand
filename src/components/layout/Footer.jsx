import {
  Box,
  List,
  ListItem,
  Typography,
  Container,
  Grid,
  IconButton,
  Icon,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { NavLink } from "react-router-dom";
import React from "react";
import { basicDetail, footerDetail, navigationItems } from "../../data/appData";

function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#D6BD98",
          paddingY: 15,
          color: "#524C42",
        }}
      >
        <Container fixed>
          <Grid container columnSpacing={12} rowSpacing={5}>
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  component="h5"
                  paddingBottom={3}
                  fontWeight={500}
                >
                  {basicDetail.title}
                </Typography>
                <Box>
                  <Typography variant="body1" component="h6">
                    {basicDetail.moto}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {footerDetail.map((item) => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 3,
                }}
                key={item.id}
              >
                <Box>
                  <Typography
                    variant="h5"
                    component="h5"
                    paddingBottom={3}
                    fontWeight={500}
                  >
                    {item.name}
                  </Typography>

                  <List sx={{ paddingY: 0 }}>
                    {item.links.map((link) => (
                      <ListItem
                        key={link.id}
                        sx={{ padding: 0, paddingBottom: 2 }}
                      >
                        {/* Improvement scope - use titlecase function */}
                        <Typography
                          component={NavLink}
                          to={link.path}
                          sx={{
                            textDecoration: "none",
                            paddingBottom: "8px",
                          }}
                        >
                          {link.label.toLocaleUpperCase()}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid>
            <Box
              sx={{
                paddingY: 5,
                display: "flex",
                flexDirection: {
                  xs: "column",
                  lg: "row",
                },
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1" component="h5">
                Copywrite &copy; All rights reserved Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Cum, quaerat?
              </Typography>
              <Typography>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
              </Typography>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
