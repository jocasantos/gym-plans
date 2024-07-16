import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the type for the simulation data
interface Simulation {
  _id: string;
  age: number;
  genre: string;
  height: number;
  start_age: number;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the type for the simulation data
interface SimulsTableProps {
  simulations: Simulation[];
}

const SimulsTable = ({ simulations }: SimulsTableProps) => {
  return (
    <Table>
      <TableCaption>Lista das simulações realizadas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">Data</TableHead>
          <TableHead className="text-center">Idade</TableHead>
          <TableHead className="text-center">Género</TableHead>
          <TableHead className="text-center">Idade_inicio</TableHead>
          <TableHead className="text-right">Download</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {simulations.map((simulation) => (
          <TableRow key={simulation._id}>
            <TableCell className="font-medium">
              {simulation.createdAt?.toString().slice(0, 10)}
            </TableCell>
            <TableCell className="text-center">{simulation.age}</TableCell>
            <TableCell className="text-center">{simulation.genre}</TableCell>
            <TableCell className="text-center">
              {simulation.start_age}
            </TableCell>
            <TableCell className="text-right">
              <a href={"/"}>PDF</a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SimulsTable;
