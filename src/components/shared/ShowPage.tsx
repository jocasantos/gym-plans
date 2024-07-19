import React from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Progress } from "../ui/progress";
import { getMuscleMass } from "@/lib/utils";
import { muscleMassTable } from "@/app/constants";

interface ShowPageProps {
  simul: {
    _id: string;
    age: number;
    genre: string;
    height: number;
    start_age: number;
    author: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
}

const ShowPage = ({ simul }: ShowPageProps) => {
  const simulation = {
    height: simul.height,
    age_start: simul.start_age,
    genre: simul.genre,
  };

  const muscleMassLevel = getMuscleMass(simulation);
  const muscleMassLevelBefore = muscleMassLevel - 1;
  const muscleMassLevelAfter = muscleMassLevel + 1;
  const genre = simulation.genre;

  return (
    <>
      <div className="flex">
        <div className="flex-col items-center space-y-6 flex">
          <Card className="w-[204px]">
            <CardHeader className="pb-2">
              <CardDescription>Pelo menos</CardDescription>
              <CardTitle className="text-4xl">
                {genre == "masculino"
                  ? muscleMassTable.masculino[muscleMassLevelBefore]
                  : muscleMassTable.feminino[muscleMassLevelBefore]}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">Bad genetics</div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </Card>
          <div className="grid items-center justify-center w-[248px] h-[225px] bg-neutral-950 rounded-lg border shadow-sm">
            <Card className="w-[193px] h-[180px] dark border-neutral-950">
              <CardHeader className="pb-2">
                <CardDescription>Em média</CardDescription>
                <CardTitle className="text-4xl">
                  {genre == "masculino"
                    ? muscleMassTable.masculino[muscleMassLevel]
                    : muscleMassTable.feminino[muscleMassLevel]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  Average genetics
                </div>
              </CardContent>
              <CardFooter>
                <Progress className="" value={50} aria-label="50% increase" />
              </CardFooter>
            </Card>
          </div>
          <Card className="w-[204px]">
            <CardHeader className="pb-2">
              <CardDescription>No máximo</CardDescription>
              <CardTitle className="text-4xl">
                {genre == "masculino"
                  ? muscleMassTable.masculino[muscleMassLevelAfter]
                  : muscleMassTable.feminino[muscleMassLevelAfter]}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">Good genetics</div>
            </CardContent>
            <CardFooter>
              <Progress value={75} aria-label="75% increase" />
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ShowPage;
