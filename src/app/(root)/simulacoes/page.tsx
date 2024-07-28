import { pageHeader } from "@/constants";
import Header from "@/components/shared/Header";
import SimulsTable from "@/components/shared/SimulsTable";

import { getAllSimulations } from "@/lib/actions/simul.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SimulationsPage = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const simuls = await getAllSimulations();

  return (
    <>
      <Header
        title={pageHeader.simulações.title}
        subtitle={pageHeader.simulações.subTitle}
      />
      <div className="mb-8" />

      <SimulsTable simulations={simuls} />
    </>
  );
};

export default SimulationsPage;
