import { UserCard } from "../components/UserCard";
import { UserSignup } from "../components/UserForm";
import { Container } from "@mui/material";

export const Users = ({ user, setNewUser }) => {
  return <div>
    <UserSignup setNewUser={setNewUser} />
    <Container style={{ display: "flex", marginTop: "60px"}}>
      
      {user.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      
        </Container>
  </div>;
};
