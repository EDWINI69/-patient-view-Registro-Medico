import { XCircle } from "lucide-react";

interface ConsultationCardProps {
  consultation: any;
  onClose: () => void;
  isOpen: boolean;
}

export default function ConsultationCard({
  consultation,
  onClose,
  isOpen,
}: ConsultationCardProps) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`scrollbar overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-transparent 
          bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full max-h-[90vh] m-4 transition-all duration-300 ease-in-out transform ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
      >
        {" "}
        {consultation.map((consult) => (
          <div className="" key={consult.id}>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Detalles de la Consulta
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <XCircle size={24} />
              </button>
            </div>

            <p className="text-2xl font-semibold mb-4 text-gray-800 bg-gray-100 p-4 rounded-lg">
              Fecha de consulta:{" "}
              {new Date(consult.date).toLocaleString("es-ES", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </p>

            <p className="text-xl font-semibold mb-6 border-b pb-2">
              <strong className="text-gray-700">Doctor:</strong>{" "}
              {consult.doctor || "Ninguno"}
            </p>

            <div className="mb-8 space-y-5">
              <p>
                <strong className="">Razón de visita:</strong>{" "}
                {consult.reason || "Ninguno"}
              </p>
              <p>
                <strong className="">Historia actual:</strong>{" "}
                {consult.currentHistory || "Ninguno"}
              </p>
              <p>
                <strong className="">Examen físico:</strong>{" "}
                {consultation.physicalExam || "Ninguno"}
              </p>
            </div>

            <div className="mb-6" key={consult.id}>
              <h3 className="text-xl font-semibold mb-3 text-gray-700 border-b pb-2">
                Histórico de citas:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {consult.relatedAppointments.length > 0 ? (
                  consult.relatedAppointments.map((date, index) => (
                    <li key={index}>
                      {new Date(date).toLocaleString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </li>
                  ))
                ) : (
                  <li>No hay citas relacionadas</li>
                )}
              </ul>
            </div>

            <div className="mb-6 bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-700 border-b pb-2">
                Diagnósticos:
              </h3>
              <div className="space-y-4" key={consult.id}>
                <p className="">
                  <strong className="text-gray-700">Alergias:</strong>{" "}
                  {consult.diagnoses.allergies}
                </p>
                <p>
                  <strong className="text-gray-700">Discapacidades:</strong>{" "}
                  {consult.diagnoses.disabilities}
                </p>
                <p>
                  <strong className="text-gray-700">Enfermedades:</strong>{" "}
                  {consult.diagnoses.diseases}
                </p>
                <p>
                  <strong className="text-gray-700">Factores de Riesgo:</strong>{" "}
                  {consult.diagnoses.riskFactors}
                </p>
              </div>
            </div>
            <div className="mb-6 bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-700 border-b pb-2">
                Recetas:
              </h3>
              <div>
                <ul className="list-disc list-inside">
                  {consult.prescriptions
                    .split(", ")
                    .map((medication, index) => (
                      <li key={index}>{medication}</li>
                    ))}
                </ul>
              </div>
              {/* <div className="mt-2">
                <strong className="text-gray-700">
                  Estudios de laboratorio:
                </strong>
                <ul className="list-disc list-inside">
                {consultation.prescriptions.labStudies.map((study, index) => (
                  <li
                    key={index}
                    className="text-gray-600 hover:bg-gray-100 p-1 rounded transition-colors duration-200"
                  >
                    {study}
                  </li>
                ))}
              </ul>
              </div> */}
            </div>

            <p className="text-xl">
              <strong className="text-gray-700">Estatus de la consulta:</strong>{" "}
              <span
                className={`px-2 py-1 rounded-full text-x1 font-semibold ${
                  consult.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : consult.status === "Pending"
                    ? "bg-orange-100 text-orange-800"
                    : consult.status === "Ongoing"
                    ? "bg-blue-100 text-blue-800"
                    : consult.status === "Canceled"
                    ? "bg-red-100 text-red-800"
                    : "bg-gray-100 text-gray-800" // Para cualquier otro estado no definido
                }`}
              >
                {consult.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
