"use client";

import { SetStateAction, useEffect, useState } from "react";
import { ClipboardPlus, FileText } from "lucide-react";
import { Sidebar } from "@/components/sidebar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PatientDashboard() {
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");

  const patientid = "37439d05-9b3b-4896-88e0-4ee7b7221a8b";

  const [data1, setData1] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response1 = await fetch(
  //         `https://condemned-raf-itla-d269e995.koyeb.app/api/labtest`
  //       ).then((res) => res.json());
  //       setData1(response1);
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const dataStudies = [
    { id: 1, testName: "Ecografía abdominal" },
    { id: 2, testName: "apendicectomía " }
  ];

  return (
    <div className="max-h-screen flex">
      <Sidebar />

      <div className="container bg-gray-50 p-6 scrollbar overflow-y-scroll">
        <div className="flex">
          <ClipboardPlus className="mr-2 w-10 h-8" />
          <h1 className="text-3xl font-bold mb-5">
            Estudios Médicos Realizados
          </h1>
        </div>

        <Card className="mt-4 h-[800px] scrollbar scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white overflow-y-scroll">
          <CardHeader>
            <CardTitle>Estudios Médicos</CardTitle>
            <CardDescription>
              Vea el resultado de sus estudios médicos realizados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-end mb-4 space-x-2"></div>
            {dataStudies.length === 0 ? (
              <div className="flex items-center justify-center h-[300px]">
                <p className="text-2xl font-bold text-gray-400">
                  No tiene estudios médicos
                </p>
              </div>
            ) : (
              <Table className="space-y-5 mb-5">
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre del estudio</TableHead>
                    <TableHead>Documento</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {dataStudies.map((study) => (
                    <TableRow key={study.id} className="space-y-5 mb-5">
                      <TableCell className="mb-5 p-5">
                        <div className="flex relative">
                          <FileText className="h-6 w-6  mr-2" />
                          {study.testName}
                        </div>
                      </TableCell>
                      <TableCell>
                        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                          Ver documento
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
