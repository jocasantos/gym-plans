"use client";

import React from "react";
import { Button } from "../ui/button";
import { updateCredits } from "@/lib/actions/user.actions";

import { useRouter } from "next/navigation";

const ButtonFree = ({ user }: { user: any }) => {
  const router = useRouter();

  const handleClick = () => {
    updateCredits(user._id, 1);
    router.push("/perfil");
  };

  return (
    <Button onClick={handleClick} variant="outline" className="credits-btn">
      Grátis
    </Button>
  );
};

export default ButtonFree;
