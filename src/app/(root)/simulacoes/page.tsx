import { pageHeader } from "@/constants";
import Header from "@/components/shared/Header";
import SimulsTable from "@/components/shared/SimulsTable";

import { getAllSimulations } from "@/lib/actions/simul.actions";

const SimulationsPage = async () => {
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
