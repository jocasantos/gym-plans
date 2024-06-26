import { pageHeader } from "@/app/constants";
import Header from "@/components/shared/Header";
import MuscleForm from "@/components/shared/MuscleForm";
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <Header
        title={pageHeader.home.title}
        subtitle={pageHeader.home.subTitle}
      />
      <div className="mb-8" />
      <MuscleForm />
    </>
  );
};

export default DashboardPage;
