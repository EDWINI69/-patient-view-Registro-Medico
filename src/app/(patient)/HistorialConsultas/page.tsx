"use client";

import { useEffect, useState } from "react";
import ConsultationCard from "@/app/(patient)/HistorialConsultas/consultacard/infodcard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Microscope, NotepadText } from "lucide-react";
import { Sidebar } from "@/components/sidebar";

export default function ConsultationsList() {
  const patientid = "d8e2f93f-3b9f-4b88-981f-56eaa8ddc3e9";

  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenConsultation = (consultation) => {
    setSelectedConsultation(consultation);
    setIsOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedConsultation(null), 300);
  };

  // const doctorMap = data2.reduce((acc, doctor) => {
  //   acc[doctor.id] = doctor.firstName + " " + doctor.lastName;
  //   return acc;
  // }, {});

  // const apptMap = data3.reduce((acc, appt) => {
  //   acc[appt.id] = appt.appointmentDate;
  //   return acc;
  // }, {});

  // const consultations = data1.map((consult) => ({
  //   id: consult.id,
  //   date: consult.lastModifiedDate,
  //   doctor: doctorMap[consult.doctorId] || "No asignado",
  //   reason: consult.reasonForVisit,
  //   currentHistory: consult.currentHistory,
  //   physicalExam: consult.physicalExamination,
  //   appointmentHistory: apptMap[consult.appointmentId] || "No asignado",
  //   relatedAppointments: data3
  //     .filter((appt) => appt.doctorId === consult.doctorId)
  //     .map((appt) => appt.appointmentDate)
  //     .sort((a, b) => new Date(a).getTime() - new Date(b).getTime()),
  //   diagnoses: {
  //     allergies:
  //       data4.allergies.map((allergy) => allergy.title).join(", ") || "Ninguna",
  //     disabilities:
  //       data4.illnesses.map((illnesses) => illnesses.title).join(", ") ||
  //       "Ninguna",
  //     diseases:
  //       data4.discapacities
  //         .map((discapacities) => discapacities.title)
  //         .join(", ") || "Ninguna",
  //     riskFactors:
  //       data4.riskFactors.map((riskFactors) => riskFactors.title).join(", ") ||
  //       "Ninguno",
  //   },
  //   prescriptions:
  //     data5.map((med) => med.medication.name).join(", ") || "Ninguno",
  //   status: consult.status,
  // }));

  const alergias = [];
  const enfermedades = [];
  const discapacidades = [];
  const riskFactors = [];
  const Medicamentos = [];
  const data3 = [];
  const data1 = [
    { id: 1, reasonForVisit: "dolor de ano", lastModifiedDate: new Date() },
  ];
  const doctores = [{ doctorId: 2 }];

  const consultations = [
    {
      id: 2,
      date: new Date(),
      doctor: "Knekro",
      reason: "Fan de Pokemon",
      currentHistory: "no se",
      physicalExam: "dolor de oreja",
      appointmentHistory: "lol",
      relatedAppointments: data3
        .filter((appt) => appt.doctorId === doctores[0].doctorId)
        .map((appt) => appt.appointmentDate)
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime()),
      diagnoses: {
        allergies:
          alergias.map((allergy) => allergy.title).join(", ") || "Ninguna",
        disabilities:
          enfermedades.map((illnesses) => illnesses.title).join(", ") ||
          "Ninguna",
        diseases:
          discapacidades
            .map((discapacities) => discapacities.title)
            .join(", ") || "Ninguna",
        riskFactors:
          riskFactors.map((riskFactors) => riskFactors.title).join(", ") ||
          "Ninguno",
      },
      prescriptions:
        Medicamentos.map((med) => med.medication.name).join(", ") ||
        "Ninguno creo",
      status: true,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="container mx-auto p-6 mt-5">
        <div className="flex">
          <NotepadText className="mr-2 w-10 h-8" />
          <h1 className="text-3xl font-bold mb-5">
            Historial de Consultas Médicas
          </h1>
        </div>
        <Card className="p-3 mt-4">
          <CardHeader>
            <CardTitle>Historial de consultas</CardTitle>
            <CardDescription>
              Vea a detalle sus consultas médicas realizadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className=" grid gap-6 md:grid-cols-3">
              {data1.map((datas) => (
                <Card
                  className="flex flex-col mt-3 h-[325px] w-[400px] shadow-md bg-white p-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  key={datas.id}
                >
                  <div className="flex-1">
                    <strong className="text-xl mb-3">Razón de la visita</strong>
                    <div className="border-b mb-1"></div>
                    <p className="text-lg text-gray-600 mt-4">
                      {datas.reasonForVisit}
                    </p>
                  </div>
                  <div className="flex">
                    <Calendar className="mr-2 h-5 x-5 text-blue-500" />
                    <p className="mb-1 text-gray-500">
                      {new Date(datas.lastModifiedDate).toLocaleString(
                        "es-ES",
                        {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                  <div className="flex">
                    <Microscope className="mr-2 h-5 x-5 text-green-700" />
                    <span className="mb-4 text-gray-500">
                      {" "}
                      Dr. {consultations[0].doctor}
                    </span>
                  </div>
                  <button
                    className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-300"
                    onClick={() => handleOpenConsultation(consultations)}
                  >
                    Ver detalles
                  </button>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {selectedConsultation && (
          <ConsultationCard
            consultation={selectedConsultation}
            onClose={handleCloseConsultation}
            isOpen={isOpen}
          />
        )}
      </div>
    </div>
  );
}
