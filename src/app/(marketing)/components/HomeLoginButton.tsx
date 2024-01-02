"use client";

import { Button } from "@/shared/components/button";
import { useRouter } from "next/navigation";
import React from "react";

const HomeLoginButton: React.FC = (props) => {
  const router = useRouter();
  const navigateToLoginPage = () => {
    router.push("/login");
  };
  return (
    <Button
      onClick={navigateToLoginPage}
      className="relative w-full  h-[43px] bg-[#e9ebf0] shadow-[0px_10px_25px_#101e361a] text-gray-900 hover:text-white"
    >
      Log in
    </Button>
  );
};

export default HomeLoginButton;
