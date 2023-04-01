import { UserCard } from "../components/UserCard";
import { UserSignup } from "../components/UserForm";
import { Container } from "@mui/material";

export const Users = ({ user, setNewUser, currentUser, setCurrentUser }) => {
  return <div>
    <UserSignup setNewUser={setNewUser} />
    <Container style={{ display: "flex", flexWrap: "wrap", marginTop: "60px", justifyContent: "space-evenly", }}>
      
      {user.map((user) => (
        <UserCard key={user.id} userid={user.id} setNewUser={setNewUser} user={user} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      ))}
      
        </Container>
  </div>;
};
