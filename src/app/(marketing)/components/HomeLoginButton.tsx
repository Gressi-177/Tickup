"use client";

import { Button } from "@/shared/components/button";
import { useRouter } from "next/navigation";
import React from "react";

const HomeLoginButton: React.FC = (props) => {
  const router = useRouter();
  const navigateToLoginPage = () => {
    router.push("/login");
  };
  return <Button onClick={navigateToLoginPage}>This is a button</Button>;
};

export default HomeLoginButton;
