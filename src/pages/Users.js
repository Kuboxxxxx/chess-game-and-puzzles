import { UserCard } from "../components/UserCard";
import { UserSignup } from "../components/UserForm";
import { Container } from "@mui/material";
import { CurrentUserCard } from "../components/SelectedUser";

export const Users = ({ user, setNewUser, currentUser, setCurrentUser }) => {
  let getCurrentUser = JSON.parse(localStorage.getItem("currentUser")) || []
  return <div>
    <Container style={{
      display: "flex",
      textAlign: "center",
    }}>
    {getCurrentUser.length === 0 ? (
        <Container>No user selected</Container>
      ) : (
        <Container style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <CurrentUserCard />
        </Container>
      )}
    </Container>
    <UserSignup setNewUser={setNewUser} />
    <Container style={{ 
      display: "flex", 
      flexWrap: "wrap", 
      marginTop: "60px", 
      justifyContent: "space-evenly", 
      
      }}>
      
      {user.map((user) => (
        <UserCard key={user.id} userid={user.id} setNewUser={setNewUser} user={user} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      ))}
      
        </Container>
  </div>;
};
