"use client";

import { useState, useEffect } from "react";
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
import { Calendar, CircleAlert, Pill, PillBottle, Tablets } from "lucide-react";

export default function Medicamentos() {
  const patientid = "37439d05-9b3b-4896-88e0-4ee7b7221a8b";

  //MOCK DATA

  const medPrescriptions = [
    {
      id: 1,
      status: true,
      name: "Paracetamol",
      concentration: "500mg",
      startDate: new Date("2024-11-20"),
      endDate: new Date("2024-12-16"),
      indications: "Tomar cada 6-8h",
      dosageForm: "Pastilla",
      routeOfAdministration: "Oral",
      precautions: "No tomar más de la cantidad indicada",
    },
    {
      id: 2,
      status: false,
      name: "Ibuprofeno",
      concentration: "200mg",
      startDate: new Date("2024-8-15"),
      endDate: new Date("2024-10-2"),
      indications: "Tomar cada 6-8h",
      dosageForm: "Pastilla",
      routeOfAdministration: "Oral",
      precautions: "Puede causar irritación gástrica",
    },
    {
      id: 3,
      status: true,
      name: "Salbutamol",
      concentration: "100mcg",
      startDate: new Date("2025-2-26"),
      endDate: new Date("2025-5-7"),
      indications: "Inhalar de 1 a 2 veces según lo precise",
      dosageForm: "Inhalador",
      routeOfAdministration: "Inhalación",
      precautions: "Puede causar taquicardia",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen w-full p-6 bg-gray-50 overflow-y-scroll">
        <div className="flex mt-5">
          <PillBottle className="mr-2 w-10 h-8" />
          <h1 className="text-3xl font-bold mb-5">Recetas médicas</h1>
        </div>
        <Card className="h-[400px]">
          <CardHeader>
            <CardTitle className="text-lg">Medicamentos recetados</CardTitle>
            <CardDescription>
              Lista de sus medicamentos recetados con notas del doctor.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {medPrescriptions
                .filter((prescription) => prescription.status === true)
                .map((prescription) => (
                  <Card key={prescription.id} className="h-[275px]">
                    <CardHeader>
                      <CardTitle className="text-lg flex justify-between border-b pb-2">
                        <div className="flex">
                          <Tablets className="mr-2 w-5 text-purple-600" />
                          {prescription.name} - {prescription.concentration}
                        </div>
                        <div className="flex">
                          <Calendar className="w-4 mr-2 text-blue-500" />
                          {new Date(prescription.startDate).toLocaleString(
                            "es-ES",
                            {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                            }
                          )}{" "}
                          -{" "}
                          {new Date(prescription.endDate).toLocaleString(
                            "es-ES",
                            {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                            }
                          )}
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col">
                      <div className="flex-1">
                        <p className="font-semibold mb-2">
                          {prescription.indications}
                        </p>
                        <p className="text-blue-900">
                          {prescription.routeOfAdministration}
                        </p>
                      </div>
                      <div className="mt-[90px]">
                        <div className="flex">
                          <CircleAlert className="text-red-600 w-5 mr-2" />
                          <p className="text-red-700">
                            {prescription.precautions}
                          </p>
                        </div>{" "}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </CardContent>
        </Card>
        <Card className="mt-6 h-[400px]">
          <CardHeader>
            <CardTitle>Historial de medicamentos recetados</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader className="font-bold text-lg text-black">
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Dosis</TableHead>
                  <TableHead>Fecha de inicio</TableHead>
                  <TableHead>Fecha de finalización</TableHead>
                  <TableHead>Estatus</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-md">
                {medPrescriptions.map((medshistory) => (
                  <TableRow key={medshistory.id}>
                    <TableCell>{medshistory.name}</TableCell>
                    <TableCell> {medshistory.concentration}</TableCell>
                    <TableCell>
                      {new Date(medshistory.startDate).toLocaleString("es-ES", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </TableCell>
                    <TableCell>
                      {new Date(medshistory.endDate).toLocaleString("es-ES", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </TableCell>
                      <TableCell
                        className={`rounded-full font-semibold text-center `}
                      >
                        <div className={`rounded-full font-semibold text-center p-2 ${
                          medshistory.status === true
                            ? "text-blue-500 w-20 bg-blue-50"
                            : "text-orange-600 w-20 bg-orange-50"
                        }`}>
                        {medshistory?.status === true ? "Activo" : "Inactivo"}
                      </div>
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
