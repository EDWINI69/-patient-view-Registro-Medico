import {
  Users,
  UserCog,
  UserPlus,
  LayoutGrid,
  LogOut,
  House,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col w-60 border-r bg-white p-2",
        className
      )}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mb-8">
            <div className="flex flex-col items-start">
              <span className="text-lg font-semibold">James Sunderland</span>
              <span className="text-sm text-blue-600">Paciente</span>
            </div>
          </div>
          <div className="space-y-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-800 rounded-md px-2 py-2 hover:bg-gray-100"
            >
              <House className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/Citas"
              className="flex items-center gap-2 text-gray-800 rounded-md px-2 py-2 hover:bg-gray-100"
            >
              <LayoutGrid className="h-4 w-4" />
              Citas
            </Link>
            <Link
              href="/HistorialConsultas"
              className="flex items-center gap-2 text-gray-800 rounded-md px-2 py-2 hover:bg-gray-100"
            >
              <House className="h-4 w-4" />
              Historial
            </Link>
            <Link
              href="/Medicamentos"
              className="flex items-center gap-2 text-gray-800 rounded-md px-2 py-2 hover:bg-gray-100"
            >
              <Users className="h-4 w-4" />
              Recetas
            </Link>
            <Link
              href="/Estudios"
              className="flex items-center gap-2 text-gray-800 rounded-md px-2 py-2 hover:bg-gray-100"
            >
              <Users className="h-4 w-4" />
              Estudios
            </Link>
            <Link
              href="/Hospitales"
              className="flex items-center gap-2 text-gray-800 rounded-md px-2 py-2 hover:bg-gray-100"
            >
              <UserCog className="h-4 w-4" />
              Hospitales
            </Link>
          </div>
        </div>
      </div>
      <div className="p-5 mt-auto border-t-2">
        <button className="flex items-center gap-2 text-red-600 rounded-md px-2 py-2 hover:bg-red-50 w-full">
          <LogOut className="h-4 w-4" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
