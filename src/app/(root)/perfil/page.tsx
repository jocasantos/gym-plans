import ShowPage from "@/components/shared/ShowPage";
import SimulText from "@/components/shared/SimulText";
import { getMuscleMass } from "@/lib/utils";
import React from "react";

const ProfilPage = () => {
  const test = {
    height: 160,
    age_start: 17,
    genre: "masculino",
  };

  return (
    <div className="flex-col flex gap-8 items-center lg:flex lg:flex-row">
      <ShowPage />
      <SimulText />
      <p>{getMuscleMass(test)}</p>
    </div>
  );
};

export default ProfilPage;
