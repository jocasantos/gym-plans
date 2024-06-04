import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <div className="h-28 w-36 relative mb-2">
            {/* <Image src="/logo3.png" alt="logo" fill sizes="100vh" /> */}
          </div>
          <h1 className="z-20 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Queres um plano de treino{" "}
            <span className="text-blue-600">adequado</span> aos teus objetivos?
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Regista-te agora e obtém imediatamente os teus novos treinos! Atinge
            os teus objetivos de forma mais rápida e eficaz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/entrar" className={buttonVariants()}>
              Entrar
            </Link>
            <Link href="/registar">
              <Button variant="ghost">Regista-te &rarr;</Button>
            </Link>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <Image
            src="/mock-expense-tracker.png"
            alt="App image example"
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto", maxWidth: "768px" }}
          />
        </div> */}
      </MaxWidthWrapper>
      {/* Images of the app large and small screen (2) */}
    </>
  );
};

export default Home;
