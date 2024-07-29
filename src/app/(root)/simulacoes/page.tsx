import { pageHeader } from "@/constants";
import Header from "@/components/shared/Header";
import SimulsTable from "@/components/shared/SimulsTable";

import { getAllSimulations } from "@/lib/actions/simul.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.actions";

const SimulationsPage = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const simuls = await getAllSimulations(user);

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
