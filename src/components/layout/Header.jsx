import {
  AppBar,
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navigationItems } from "../../data/appData";
import { NavLink, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";

function Header() {
  function navStyle({ isActive }) {
    return {
      textDecoration: "none",
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#ffcc00" : "whitesmoke",
    };
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOnClick() {
    setIsMenuOpen((prevState) => !prevState);
  }

  const navigate = useNavigate();

  function handleNavClick(link) {
    navigate(link);
  }

  return (
    <>
      <Box>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "#1A3636",
            height: {
              xs: "64px",
            },
            paddingX: {
              xs: "5px",
              md: "24px",
            },
          }}
          elevation={3}
        >
          <Toolbar
            sx={{
              height: { xs: "64px" },
              paddingX: {
                xs: "16px",
                md: "24px",
              },
            }}
          >
            {/* icon */}
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <Typography variant="h3" component="h1" sx={{ lineHeight: 1 }}>
                Craft Land
              </Typography>
              <Typography
                variant="body2"
                component="h6"
                sx={{ marginLeft: 2, lineHeight: 1 }}
              >
                Welcome to craft land
              </Typography>
            </Box>

            {/* Viewport md: 900px and above  */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "center",
                justifyContent: "space-evenly",
                columnGap: 3,
              }}
            >
              {navigationItems.map((elem) => (
                <Typography key={elem.id}>
                  <NavLink to={`/${elem.label}`} style={navStyle}>
                    {elem.label.toUpperCase()}
                  </NavLink>
                </Typography>
              ))}
            </Box>
            
            {/* Viewport xs: 0px and above */}
            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <IconButton
                title="menu"
                color="inherit"
                onClick={handleMenuOnClick}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
        {/* improvement scope- use mediaQuery */}
        {isMenuOpen ? (
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
              position: "fixed",
              zIndex:'999',
              right: 0,
              width: {xs:'100%',sm:"60%"},
              border: "1px solid whitesmoke",
            }}
          >
            <List
              sx={{
                width: "100%",
                // maxWidth: 360,
                bgcolor: "#1A3636",
              }}
              component="nav"
            >
              {navigationItems.map((elem) => (
                <Fragment key={elem.id}>
                  <ListItemButton onClick={() => handleNavClick(elem.label)}>
                    <NavLink to={`/${elem.label}`} style={navStyle}>
                      {elem.label.toUpperCase()}
                    </NavLink>
                  </ListItemButton>
                  <Divider />
                </Fragment>
              ))}
            </List>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Header;
