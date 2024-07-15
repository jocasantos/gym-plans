"use client";

import { pageHeader } from "@/app/constants";
import Header from "@/components/shared/Header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getSimulationsForUser } from "@/lib/actions/simul.actions";
import { ISimul } from "@/lib/database/models/simul.model";
import React, { useEffect, useState } from "react";

// Define the type for the component props
interface SimulationsPageProps {
  userId: string;
}

// Define the type for the simulation data
interface Simulation {
  _id: string;
  data: ISimul;

  // Add other relevant fields here
}

const SimulationsPage: React.FC<SimulationsPageProps> = ({ userId }) => {
  const [simulations, setSimulations] = useState<Simulation[]>([]);

  useEffect(() => {
    const fetchSimulations = async () => {
      try {
        const data = await getSimulationsForUser(userId);
        setSimulations(data);
        console.log("Simulations:", data);
      } catch (error) {
        console.error("Error fetching simulations:", error);
      }
    };

    fetchSimulations();
  }, [userId]);

  return (
    <>
      <Header
        title={pageHeader.simulações.title}
        subtitle={pageHeader.simulações.subTitle}
      />
      <div className="mb-8" />
      <Table>
        <TableCaption>Lista das simulações realizadas.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Data</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead>Género</TableHead>
            <TableHead>Idade_inicio</TableHead>
            <TableHead className="text-right">Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {simulations.map((simulation) => (
            <TableRow key={simulation.id}>
              <TableCell className="font-medium">{simulation.date}</TableCell>
              <TableCell className="justify-center">{simulation.age}</TableCell>
              <TableCell>{simulation.gender}</TableCell>
              <TableCell>{simulation.startAge}</TableCell>
              <TableCell className="text-right">
                <a href={simulation.downloadLink}>PDF</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default SimulationsPage;
