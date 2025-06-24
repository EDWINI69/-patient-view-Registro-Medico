import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Hospital } from "@/app/(patient)/Hospitales/data/hospitals";

export function HospitalCard({ hospital }: { hospital: Hospital }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{hospital.name}</CardTitle>
        <CardDescription>{hospital.type} Hospital</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">
          Services: {hospital.services.join(", ")}
        </p>
        <p className="text-sm mb-2">
          Operating Hours: {hospital.operatingHours}
        </p>
        <p className="text-sm font-medium">
          Requirements: {hospital.requirements}
        </p>
      </CardContent>
    </Card>
  );
}
