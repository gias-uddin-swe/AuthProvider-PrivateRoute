import React from "react";
import useAuth from "./../../Hooks/useAuth";

const Register = () => {
  const  user  = useAuth();
  console.log(user);
  return (
    <div>
      <h1>I am register</h1>
    </div>
  );
};

export default Register;
