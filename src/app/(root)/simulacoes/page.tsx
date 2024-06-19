import { pageHeader } from "@/app/constants";
import Header from "@/components/shared/Header";
import MuscleForm from "@/components/shared/MuscleForm";

const SimulationsPage = () => {
  return (
    <>
      <Header
        title={pageHeader.simulações.title}
        subtitle={pageHeader.simulações.subTitle}
      />

      <MuscleForm />
    </>
  );
};

export default SimulationsPage;
