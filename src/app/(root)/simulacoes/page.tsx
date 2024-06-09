import { UserButton } from "@clerk/nextjs";
import React from "react";

const SimulationsPage = () => {
  return (
    <div>
      <p>SimulationsPage</p>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SimulationsPage;
