import { UserButton } from "@clerk/nextjs";
import React from "react";

const CreditsPage = () => {
  return (
    <div>
      <p>CreditsPage</p>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default CreditsPage;
