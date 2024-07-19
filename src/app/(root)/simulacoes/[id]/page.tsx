import ShowPage from "@/components/shared/ShowPage";
import SimulText from "@/components/shared/SimulText";
import { getSimulById } from "@/lib/actions/simul.actions";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const SimulationPage = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth();

  const simul = await getSimulById(id);

  return (
    <div className="flex-col flex gap-8 items-center lg:flex lg:flex-row">
      <ShowPage simul={simul} />
      <SimulText />
    </div>
  );
};

export default SimulationPage;
