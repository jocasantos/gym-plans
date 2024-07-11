"use client";

import { pageHeader } from "@/app/constants";
import Header from "@/components/shared/Header";
import MuscleForm, { MuscleFormProps } from "@/components/shared/MuscleForm";
import ShowPage from "@/components/shared/ShowPage";
import React, { useState } from "react";

const DashboardPage = () => {
  // State to control whether to show the form or the ShowPage component
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  // Callback function to be called after form submission
  const handleFormSubmit = (values: any) => {
    console.log("Form Submitted", values);
    setFormData(values);
    setIsSubmitted(true); // Update state to show the ShowPage component
  };

  return (
    <>
      {!isSubmitted ? (
        <Header
          title={pageHeader.home.title}
          subtitle={pageHeader.home.subTitle}
        />
      ) : (
        <Header
          title={pageHeader.homeSubmit.title}
          subtitle={pageHeader.homeSubmit.subTitle}
        />
      )}

      <div className="mb-8" />
      {!isSubmitted ? (
        <MuscleForm onSubmit={handleFormSubmit} /> // Pass the callback to MuscleForm
      ) : (
        <ShowPage /> // Show this component after form submission
      )}
    </>
  );
};

export default DashboardPage;
