import ShowPage from "@/components/shared/ShowPage";
import SimulText from "@/components/shared/SimulText";
import React from "react";

const ProfilPage = () => {
  return (
    <div className="flex-col flex gap-8 items-center lg:flex lg:flex-row">
      <ShowPage />
      <SimulText />
    </div>
  );
};

export default ProfilPage;
