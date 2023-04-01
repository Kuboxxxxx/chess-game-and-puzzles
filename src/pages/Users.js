import { UserCard } from "../components/UserCard";
import { UserSignup } from "../components/UserForm";
import { Container } from "@mui/material";

export const Users = ({ user, setNewUser, currentUser, setCurrentUser }) => {
  return <div>
    <UserSignup setNewUser={setNewUser} />
    <Container style={{ display: "flex", marginTop: "60px"}}>
      
      {user.map((user) => (
        <UserCard key={user.id} userid={user.id} user={user} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      ))}
      
        </Container>
  </div>;
};
