import React from "react";
import { UserConsumer } from "./UserContext";
const ComponanetC = () => {
  return (
    <UserConsumer>
      {(username) => {
        return <h1>{username}</h1>;
      }}
    </UserConsumer>
  );
};
export default ComponanetC;
