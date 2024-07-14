import { pageHeader } from "@/app/constants";
import Header from "@/components/shared/Header";
import MuscleForm from "@/components/shared/MuscleForm";
import ShowPage from "@/components/shared/ShowPage";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const { userId } = auth();

  if (!userId) redirect("/");

  const user = await getUserById(userId);

  return (
    <>
      {true ? (
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
      {true ? (
        <MuscleForm userId={user._id} creditBalance={user.creditBalance} />
      ) : (
        <ShowPage /> // Show this component after form submission
      )}
    </>
  );
};

export default DashboardPage;
