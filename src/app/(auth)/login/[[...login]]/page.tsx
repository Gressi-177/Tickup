import { SignIn } from "@clerk/nextjs";
import React, { FC } from "react";

const LoginPage: React.FC = () => {
  return <SignIn redirectUrl={"/dashboard"} />;
};

export default LoginPage;
