import React, { useCallback, useEffect, useState } from "react";
import { Box, Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function ScrollToTopButton() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", setScrollVisibility);
    return () => {
      window.removeEventListener("scroll", setScrollVisibility);
    };
  }, []);

//   Improvement scope - use throttle
  const setScrollVisibility = useCallback(() => {
      window.scrollY > 200 ? setVisible(true) : setVisible(false);
    }, []);

  function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Box>
      {isVisible && <Fab
        onClick={scrollToTop}
        sx={{
          backgroundColor: "#115f5fff",
          color: "white",
          position: "fixed",
          right: "2rem",
          bottom: "2rem",
        }}
      >
        <ArrowUpwardIcon />
      </Fab>}
    </Box>
  );
}

export default ScrollToTopButton;
