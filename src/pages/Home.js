import { Box, Button, Container, Typography } from "@mui/material";
import { Chessboard } from "react-chessboard";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "space-evenly",
            margin: "20px",
          }}
        >
          <Box>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eu augue dui. Sed maximus justo leo, quis accumsan leo efficitur
              a. Praesent vehicula ex at libero varius dapibus. Donec posuere
              lacus id urna efficitur, sit amet tincidunt nisl interdum. Nunc
              sed arcu metus. Proin blandit lorem eget nisi malesuada, ut
              dignissim felis tristique. Etiam quam felis, suscipit sit amet
              fermentum eget, convallis ac tortor. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; Donec
              dolor diam, tempor eget auctor at, laoreet et libero. Proin et
              tellus ut turpis interdum cursus sit amet ut nulla. Cras a
              suscipit sem. Fusce egestas, erat dictum vehicula pulvinar, mauris
              tellus iaculis nulla, eu consectetur quam tellus eu lacus. Etiam
              vehicula viverra augue, suscipit dictum diam ornare eu. Nulla
              pellentesque quis felis ultricies pulvinar.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Link Link to="/playchess" style={{ textDecoration: "none" }}>
              <Button 
              variant="contained" 
              size="large" 
              style={{
                background: "#839A9B", 
                color: "black", 
                fontWeight:"bold"}} >
                Play Chess
              </Button>
            </Link>
            <Link Link to="/puzzles" style={{ textDecoration: "none" }}>
              <Button 
              variant="contained" 
              size="large"
              style={{
                background: "#839A9B", 
                color: "black", 
                fontWeight:"bold"}}>
                Solve Puzzles
              </Button>
            </Link>
          </Box>
        </Box>
        <Box sx={{ width: "50%", margin: "20px" }}>
          <Chessboard />
        </Box>
      </Box>
    </Container>
  );
};
