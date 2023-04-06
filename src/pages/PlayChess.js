import { ChessGame } from "../components/ChessGame";
import { Container } from "@mui/material";
import { CurrentUserCard } from "../components/SelectedUser";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


export const PlayChess = ({currentUser, setCurrentUser, setNewUser}) => {
  let getCurrentUser = JSON.parse(localStorage.getItem("currentUser")) || []
  return (
    <div>
      <ChessGame setNewUser={setNewUser} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Container style={{
      display: "flex",
      textAlign: "center",
    }}>
    {getCurrentUser.length === 0 ? (
        <Container style={{
          display: "flex",
          margin: "30px auto",
          justifyContent: "center"
        }}>
          
          <Link style={{ textDecoration: 'none',color: '#463730'}} color="inherit" Link to="/users">
            <Button type="submit" size="medium"  variant="contained"
                style={{
                background: "#839A9B", 
                color: "black", 
                marginBottom: "30px",
                fontWeight:"bold"}}>
                Please select user!
                
            </Button>
          </Link>
          
        </Container>
      ) : (
        <Container style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <CurrentUserCard />
        </Container>
      )}
    </Container>
    </div>
  );
};
