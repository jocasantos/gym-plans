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

const SimulationsPage = () => {
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
          <TableRow>
            <TableCell className="font-medium">01-01-24</TableCell>
            <TableCell className="justify-center">20</TableCell>
            <TableCell>M</TableCell>
            <TableCell>17</TableCell>
            <TableCell className="text-right">PDF</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default SimulationsPage;
