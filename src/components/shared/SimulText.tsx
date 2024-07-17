import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SimulText = () => {
  return (
    <Card className="max-w-96 min-w-72 text-justify">
      <CardHeader>
        <CardTitle>Importância do Treino</CardTitle>
        <CardDescription>
          Ganhar massa muscular é um processo que exige dedicação, consistência
          e um planeamento adequado. Para atingir <b>90%</b> dos valores
          apresentados, são necessários pelo menos <b>5 anos</b> de treino de
          hipertrofia bem planeados.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Volume Adequado</p>
            <p className="text-sm text-muted-foreground">
              Realizar um número adequado de séries e repetições para cada grupo
              muscular.
            </p>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Intensidade alta</p>
            <p className="text-sm text-muted-foreground">
              A intensidade dos exercícios deve ser adequada ao objetivo de
              hipertrofia.
            </p>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              Progressão de Carga
            </p>
            <p className="text-sm text-muted-foreground">
              Deve existir algum tipo de progressão ao longo do planeamento de
              treino.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p>
          A jornada para o ganho de massa muscular é gradual, mas com dedicação
          e esforço contínuo, os resultados serão alcançados.
        </p>
      </CardFooter>
    </Card>
  );
};

export default SimulText;
