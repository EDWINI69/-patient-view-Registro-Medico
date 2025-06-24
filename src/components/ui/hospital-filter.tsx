import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useHospitals } from "@/app/(patient)/Hospitales/data/hospitals";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";

interface FilterProps {
  nameFilter: string;
  setNameFilter: (value: string) => void;
  typeFilter: string;
  setTypeFilter: (value: string) => void;
  serviceFilter: string;
  setServiceFilter: (value: string) => void;
}

export function HospitalFilter({
  nameFilter,
  setNameFilter,
  typeFilter,
  setTypeFilter,
  serviceFilter,
  setServiceFilter,
}: FilterProps) {
  return (
    <div className="mb-5 flex space-x-2">
      <div className="w-full relative">
        <Label htmlFor="name-filter">Buscar por nombre</Label>
        <SearchIcon className="absolute h-4 h-4 left-1 bottom-[10px] text-muted-foreground" />
        <Input
          id="name-filter"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          placeholder="Ingrese el nombre del hospital"
          className="pl-8 bg-white"
        />
      </div>
      <div>
        <Label htmlFor="type-filter">Tipo</Label>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-32 bg-white flex" id="type-filter">
            <SelectValue placeholder="Select hospital type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="General">General</SelectItem>
            <SelectItem value="Specialized">Especializado</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="service-filter">Servicio</Label>
        <Select value={serviceFilter} onValueChange={setServiceFilter}>
          <SelectTrigger className="w-32 bg-white flex" id="service-filter">
            <SelectValue placeholder="Select hospital type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="Mammography">General</SelectItem>
            <SelectItem value="Cardiology">Especializado</SelectItem>
            <SelectItem value="Neurology">Neurología</SelectItem>
            <SelectItem value="Emergency Care">Cuidados de Emergencia</SelectItem>
            <SelectItem value="Surgery">Cirugía</SelectItem>
            <SelectItem value="Pediatrics">Pediatría</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
