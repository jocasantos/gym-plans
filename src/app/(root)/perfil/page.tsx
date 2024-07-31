import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import { createUser, getUserById } from "@/lib/actions/user.actions";
import { getAllSimulations } from "@/lib/actions/simul.actions";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";

const Profile = async ({ searchParams }: SearchParamProps) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const simulacoes = await getAllSimulations(user);

  return (
    <>
      <Header title="Perfil" />

      <section className="profile">
        <div className="profile-balance">
          <p className="p-14-medium md:p-16-medium">CRÉDITOS DISPONÍVEIS</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2>
          </div>
        </div>

        <div className="profile-image-manipulation">
          <p className="p-14-medium md:p-16-medium">SIMULAÇÕES REALIZADAS</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/stars.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{simulacoes?.length}</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
