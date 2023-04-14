import { VFC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
  user: UserProfile;
};

const style = {
  border: "solid 1px #ccc",
  borderRadius: "8px",
  padding: "0 16px",
  margin: "8px"
};
export const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <div style={style}>
      <dl>
        <dt>Name</dt>
        <dd>{user.name}</dd>
        <dt>E-mail</dt>
        <dd>{user.email}</dd>
        <dt>Address</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
