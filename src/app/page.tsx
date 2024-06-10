import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Image from "next/image";

const perks = [
  {
    name: "Resultados Imediatos",
    Icon: ArrowDownToLine,
    description:
      "Responda a algumas perguntas rápidas e obtenha seus resultados instantaneamente.",
  },
  {
    name: "Baseado na Ciência",
    Icon: CheckCircle,
    description:
      "Os nossos resultados são fundamentados em diversos estudos científicos, garantido precisão e confiança.",
  },
  {
    name: "Sem Esteróides",
    Icon: Leaf,
    description:
      "Os resultados do teste são baseados no pressuposto de que o atleta nunca utilizou anabolizantes.",
  },
];

const Home = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <div className="h-28 w-96 relative mb-10">
            <Image src="/1.png" alt="logo" fill />
          </div>
          <h1 className="z-20 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Queres saber quanta{" "}
            <span className="text-blue-600">massa muscular</span> podes ganhar
            no ginásio?
          </h1>
          <p className="mt-6 text-sm max-w-prose text-muted-foreground sm:text-lg">
            Regista-te agora e realiza uma simulação personalizada para saber
            quanta massa muscular podes ganhar naturalmente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-16">
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
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Home;
