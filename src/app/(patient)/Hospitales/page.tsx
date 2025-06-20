"use client";

import { useState } from "react";
import { useHospitals } from "./data/hospitals";
import { HospitalCard } from "@/components/ui/hospital-card";
import { HospitalFilter } from "@/components/ui/hospital-filter";
import { Hospital } from "lucide-react";
import { Sidebar } from "@/components/sidebar";

export default function HospitalFinder() {
  const { hospitals, loading } = useHospitals();
  const [nameFilter, setNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");

  const filteredHospitals = hospitals.filter((hospital) => {
    const nameMatch = hospital.name
      .toLowerCase()
      .includes(nameFilter.toLowerCase());
    const typeMatch = typeFilter === "all" || hospital.type === typeFilter;
    const serviceMatch =
      serviceFilter === "all" || hospital.services.includes(serviceFilter);

    return nameMatch && typeMatch && serviceMatch;
  });

  return (
    <div className="max-h-screen flex">
      <Sidebar />
      <div className="w-full p-6 pt-8 bg-gray-50">
        <div className="flex">
          <Hospital className="mr-2 w-10 h-8" />
          <h1 className="text-3xl font-bold mb-5">Encontrar hospital</h1>
        </div>
        <div>
          <div className="">
            <HospitalFilter
              nameFilter={nameFilter}
              setNameFilter={setNameFilter}
              typeFilter={typeFilter}
              setTypeFilter={setTypeFilter}
              serviceFilter={serviceFilter}
              setServiceFilter={setServiceFilter}
            />
          </div>
        </div>
        <div className="">
          <div className="max-h-screen scrollbar scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white overflow-y-scroll">
            <div className="py-6 pr-6">
              <div className="md:col-span-3">
                <div className="grid gap-6">
                  {filteredHospitals.map((hospital) => (
                    <HospitalCard key={hospital.id} hospital={hospital} />
                  ))}
                </div>
                {filteredHospitals.length === 0 && (
                  <p className="text-center text-muted-foreground mt-8">
                    No se encontró el hospital
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
