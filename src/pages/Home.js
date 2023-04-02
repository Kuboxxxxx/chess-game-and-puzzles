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
            <h1>What Is Chess?</h1>
            <div>Chess is a board game played between two players that simulates a war between two kingdoms. It is one of the most popular games in the world. Millions of people play it both recreationally and competitively.</div>
            <div>Chess training and practice supports the development of higher-order thinking skills—like problem solving, decision making, critical thinking, planning, and even creative thinking. Chess training and practice also helps improve general cognitive ability and scholastic achievement—especially in mathematics.</div>
            <div>Chess has been proven to increase your IQ, improve memory function, help develop higher levels of creativity, simultaneously exercise both sides of the brain, help prevent Alzheimer's and dementia, and increase a child's problem solving skills.</div>
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
