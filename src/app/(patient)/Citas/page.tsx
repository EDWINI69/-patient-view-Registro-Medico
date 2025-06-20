"use client";

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "@/components/ui/confirmationalert";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  Calendar,
  CalendarIcon,
  ClockIcon,
  Microscope,
  PlusCircle,
  Stethoscope,
  X,
} from "lucide-react";
import { Sidebar } from "@/components/sidebar";

export default function Citas() {
  const patientid = "e2a4d5b6-3c9a-47bc-8db1-cd327a2f92d6";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [formErrors, setFormErrors] = useState({
    date: false,
    doctor: false,
    clinicalAnalysis: false,
  });

  const validateForm = () => {
    const errors = {
      date: !formData.appointmentDate,
      doctor: !formData.doctorName,
      clinicalAnalysis: !formData.consultationType,
    };

    setFormErrors(errors);
    return Object.values(errors).some((error) => error);
  };

  const [formData, setFormData] = useState({
    id: "asdf0",
    patientId: patientid,
    doctorName: "",
    appointmentDate: null,
    healthCenterName: "",
    appointmentStatus: "Requested",
    consultationType: "",
    consultationRoom: "",
  });

  const [appointments, setAppointments] = useState([]);

  const addAppointment = () => {
    setAppointments((prev) => [...prev, formData]);

    // Reiniciar el formulario
    setFormData({
      id: "asdf" + (appointments.length + 1),
      patientId: patientid,
      doctorName: "",
      appointmentDate: null,
      healthCenterName: "",
      appointmentStatus: "Requested",
      consultationType: "",
      consultationRoom: "",
    });
  };

  const [responseData, setResponseData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (appointmentDate) => {
    setFormData({
      ...formData,
      appointmentDate,
    });
  };

  // Send appointment info
  const confirmAction = async () => {
    try {
      addAppointment();
      setSuccessMessage("La solicitud fue enviada exitosamente.");
      closeModal();
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) return;
    openModal();
  };

  //Data placeholder

  const dataDoc = [
    {
      id: "1",
      firstName: "Manuel",
      lastName: "Ramirez",
      healthCenterName: "Hosp. Doctor Darío Contreras",
    },
    {
      id: "2",
      firstName: "Harry",
      lastName: "Mason",
      healthCenterName: "Clínica Abreu",
    },
    {
      id: "3",
      firstName: "Madelin",
      lastName: "Celeste",
      healthCenterName: "Hosp. Robert Reid Cabral",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <div className="container mx-auto p-6 mt-5">
        <div className="flex">
          <Calendar className="mr-2 w-10 h-8" />
          <h1 className="text-3xl font-bold mb-5">Citas Médicas</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                {" "}
                <CalendarIcon className="mr-2 h-6 w-6 text-" />
                Tus próximas citas
              </CardTitle>
            </CardHeader>
            <CardContent className="">
              {appointments.length === 0 ? (
                // Mostrar mensaje cuando no hay citas pendientes
                <div className="flex items-center justify-center h-[300px]">
                  <p className="text-2xl font-bold text-gray-400">
                    No tiene citas pendientes
                  </p>
                </div>
              ) : (
                // Mostrar lista de citas pendientes
                <div className="grid gap-2 h-[400px] p-2 scrollbar scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white overflow-y-scroll">
                  {appointments.map((appointment, index) => (
                    <div className="">
                      <Card
                        key={appointment.id}
                        className="h-auto flex flex-col mb-2 bg-gradient-to-r from-blue-50 to-white"
                      >
                        <CardContent className="p-5 flex-1 text-1xl">
                          <div className="flex justify-between ">
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                                <span className="font-bold text-2xl">
                                  {new Date(
                                    appointment.appointmentDate
                                  ).toLocaleString("es-ES", {
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric",
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2 mt-2">
                                <ClockIcon className="h-4 w-4 text-muted-foreground" />
                                <span className="text-base text-muted-foreground text-xl">
                                  {new Date(
                                    appointment.appointmentDate
                                  ).toLocaleString("es-ES", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-4 mt-2 text-right">
                              <div className="flex items-center justify-end space-x-2">
                                <Building2 className="h-4 w-4 text-muted-foreground" />
                                <span className="">
                                  {appointment.healthCenterName ||
                                    "No asignado"}
                                </span>
                              </div>
                              <div className="flex items-center justify-end space-x-2">
                                <Stethoscope className="h-4 w-4 text-muted-foreground" />
                                <span className="">
                                  {appointment.doctorName || "No asignado"}
                                </span>
                              </div>

                              <div className="flex items-center justify-end space-x-2">
                                <Microscope className="h-4 w-4 text-muted-foreground" />
                                <span className="">
                                  {appointment.consultationType ||
                                    "No asignado"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        {/* <Button
                          variant="destructive"
                          size="sm"
                          // onClick={() => handleCancelAppointment(1)}
                          className="mx-auto w-10 h-5 rounded-tl-full rounded-tr-full"
                        >
                          <X />
                        </Button> */}
                      </Card>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <PlusCircle className="mr-2 h-6 w-6 text-black" />
                Solicitar una Cita
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="mb-5" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="doctor">Doctor</Label>
                    <Select
                      value={JSON.stringify({
                        doctorName: formData.doctorName,
                        healthCenterName: formData.healthCenterName,
                      })}
                      onValueChange={(value) => {
                        const { doctorName, healthCenterName } =
                          JSON.parse(value);
                        setFormData({
                          ...formData,
                          doctorName,
                          healthCenterName,
                        });
                      }}
                    >
                      <SelectTrigger
                        id="doctor"
                        className={`${
                          formErrors.doctor ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        {dataDoc.map((selectdoctor) => {
                          const doctorName = `${selectdoctor.firstName} ${selectdoctor.lastName}`;
                          const value = JSON.stringify({
                            doctorName,
                            healthCenterName: selectdoctor.healthCenterName,
                          });

                          return (
                            <SelectItem key={selectdoctor.id} value={value}>
                              {doctorName}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    {formErrors.doctor && (
                      <p className="text-red-500 text-xs">
                        Este campo es obligatorio
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clinicalAnalysis">Tipo de consulta</Label>
                    <Select
                      value={formData.consultationType}
                      onValueChange={(value) =>
                        setFormData({
                          ...formData,
                          consultationType: value,
                        })
                      }
                    >
                      <SelectTrigger
                        id="analysis"
                        className={`${
                          formErrors.clinicalAnalysis ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Evaluación general">
                          Evaluación general
                        </SelectItem>
                        <SelectItem value="Seguimiento">Seguimiento</SelectItem>
                        <SelectItem value="Tratamiento">Tratamiento</SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.clinicalAnalysis && (
                      <p className="text-red-500 text-xs">
                        Este campo es obligatorio
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2" htmlFor="appointment-date">
                      Fecha
                    </Label>
                    <DatePicker
                      selected={formData.appointmentDate}
                      onChange={handleDateChange}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat="dd/MM/yyyy HH:mm"
                      placeholderText="Selecciona una fecha y hora"
                      className={`border rounded-md p-2 w-full bg-white mb-2 ${
                        formErrors.clinicalAnalysis ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.date && (
                      <p className="text-red-500 text-xs">
                        Este campo es obligatorio
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full mt-5 bg-black text-white"
                >
                  Solicitar Cita
                </Button>
              </form>
              {isModalOpen && (
                <Modal
                  title="Solicitar cita"
                  description="¿Está seguro que desea solicitar una cita?"
                  confirmButtonColor="blue"
                  onCancel={closeModal}
                  onConfirm={confirmAction}
                />
              )}
              {successMessage && (
                <div className="bg-green-100 text-green-700 p-3 rounded-md mb-4">
                  {successMessage}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
