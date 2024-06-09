import { UserButton } from "@clerk/nextjs";
import React from "react";

const ProfilPage = () => {
  return (
    <div>
      <p>ProfilPage</p>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default ProfilPage;
