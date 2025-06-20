import { useEffect, useState } from "react";

export interface Hospital {
  id: string;
  name: string;
  type: string;
  services: string[];
  operatingHours: string;
  requirements: string;
}

export const useHospitals = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://condemned-raf-itla-d269e995.koyeb.app/api/healthcenter"
        );
        const data = await response.json();

        // Transformar datos al formato esperado
        const formattedHospitals: Hospital[] = data.map((item: any) => ({
          id: item.id || "",
          name: item.name || "Unknown",
          type: item.healthCenterCategory || "Unknown",
          services: item.services || [],
          operatingHours: item.operatingHours || "Unknown",
          requirements: item.requirements || "None",
        }));

        setHospitals(formattedHospitals);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { hospitals, loading }; // Retorna ambos valores
};
