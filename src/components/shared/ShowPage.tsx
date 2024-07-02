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

const ShowPage = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex-col items-center space-y-6 flex">
          <Card className="">
            <CardHeader className="pb-2">
              <CardDescription>At Least</CardDescription>
              <CardTitle className="text-4xl">15-16 Kg</CardTitle>
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
                <CardDescription>Average</CardDescription>
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
              <CardDescription>Maximum</CardDescription>
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
