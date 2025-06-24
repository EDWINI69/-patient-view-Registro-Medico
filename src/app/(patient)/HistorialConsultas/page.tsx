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

  const consultation = [ 
    {
      id: 1,
    date: new Date("2024-06-18"),
    doctor: "Harry Mason",
    reasonForVisit: "Dolor abdominal persistente.",
    currentHistory: "Paciente refiere dolor abdominal bajo desde hace 5 días, con episodios de náuseas y falta de apetito. No presenta fiebre.",
    physicalExam: "Sensibilidad en cuadrante inferior derecho, sin signos de rebote ni rigidez abdominal.",
    appointmentHistory: "Consulta previa hace 3 meses por gastritis leve.",
    relatedAppointments: [],
    diagnoses: {
      allergies: "Ninguna",
      disabilities: "Ninguna",
      diseases: "Probable apendicitis incipiente",
      riskFactors: "Dieta alta en grasas, estrés",
    },
    prescriptions: ["Analgésico leve.", "derivación a estudios por ecografía abdominal"],
    status: "Completado"
},
 {
    id: 2,
    date: new Date("2024-07-05"),
    doctor: "Harry Mason",
    reasonForVisit: "Revisión de estudios por dolor abdominal.",
  currentHistory: "Paciente vuelve con resultados de ecografía que muestran inflamación leve del apéndice. Refiere que el dolor ha aumentado ligeramente, con molestias al caminar.",
  physicalExam: "Dolor localizado en fosa iliaca derecha, leve resistencia muscular. No fiebre, pero se observa incomodidad al tacto.",
  appointmentHistory: "Consulta previa el 18 de junio por dolor abdominal.",
  relatedAppointments: ["2024-06-18"],
  diagnoses: {
    allergies: "Ninguna",
    disabilities: "Ninguna",
    diseases: "Apendicitis aguda no complicada",
    riskFactors: "Dieta baja en fibra, antecedentes familiares de apendicitis",
  },
  prescriptions: ["Derivación a cirugía general para apendicectomía programada.", "Reposo relativo.", "Analgésico: paracetamol 500 mg cada 8h si hay dolor."],
  status: "Completado"
  }

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
              {consultation.map((datas) => (
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
                    <Calendar className="mr-2 h-5 x-5 text-gray-500" />
                    <p className="mb-1 text-gray-500">
                      {new Date(datas.date).toLocaleString(
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
                    <Microscope className="mr-2 h-5 x-5 text-blue-500" />
                    <span className="mb-4 text-gray-500">
                      {" "}
                      Dr. {datas.doctor}
                    </span>
                  </div>
                  <button
                    className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-300"
                    onClick={() => handleOpenConsultation(consultation[datas.id - 1 ])}
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
