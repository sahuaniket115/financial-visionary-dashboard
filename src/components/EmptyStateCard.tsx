
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface EmptyStateCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const EmptyStateCard = ({ icon, title, description }: EmptyStateCardProps) => {
  return (
    <Card className="flex flex-col items-center justify-center text-center p-6 h-[300px]">
      <CardHeader>
        <div className="mx-auto mb-4 p-3 rounded-full bg-muted">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This feature will be implemented soon.
        </p>
      </CardContent>
    </Card>
  );
};

export default EmptyStateCard;
