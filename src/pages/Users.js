import { UserList } from "../components/UserList";
import { UserSignup } from "../components/UserForm";

export const Users = () => {
  return <div>
    <UserSignup />
    <UserList />
  </div>;
};
