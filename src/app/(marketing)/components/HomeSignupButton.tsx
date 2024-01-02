"use client";

import { Button } from "@/shared/components/button";
import { useRouter } from "next/navigation";
import React from "react";

const HomeSignupButton: React.FC = (props) => {
  const router = useRouter();
  const navigateToSignupPage = () => {
    router.push("/signup");
  };
  return (
    <Button
      onClick={navigateToSignupPage}
      className="relative w-full h-[43px] bg-[#7b68ee] shadow-[0px_10px_25px_#7b68ee66]"
    >
      Sign Up
    </Button>
  );
};

export default HomeSignupButton;
