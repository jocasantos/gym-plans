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
import { getMuscleMassProps } from "@/lib/utils";

const ShowPage = () => {
  const test = {
    height: 200,
    age_start: 14,
    genre: "feminino",
  };

  const muscleMassLevel = getMuscleMass(test);
  const genre = test.genre;

  return (
    <>
      <div className="flex">
        <div className="flex-col items-center space-y-6 flex">
          <Card className="">
            <CardHeader className="pb-2">
              <CardDescription>Pelo menos</CardDescription>
              <CardTitle className="text-4xl">
                {genre == "masculino"
                  ? muscleMassTable.masculino[muscleMassLevel]
                  : muscleMassTable.feminino[muscleMassLevel]}
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
                <CardTitle className="text-4xl">17-18 Kg</CardTitle>
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
          <Card className="">
            <CardHeader className="pb-2">
              <CardDescription>No máximo</CardDescription>
              <CardTitle className="text-4xl">19-20 Kg</CardTitle>
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
