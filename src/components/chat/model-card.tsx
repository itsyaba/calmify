import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ModelCardProps {
  title: string;
  description: string;
  isSelected?: boolean;
  onSelect: () => void;
}

export function ModelCard({ title, description, isSelected, onSelect }: ModelCardProps) {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all hover:border-primary",
        isSelected && "border-2 border-primary"
      )}
      onClick={onSelect}
    >
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant={isSelected ? "default" : "outline"} className="w-full">
          {isSelected ? "Selected" : "Select Model"}
        </Button>
      </CardContent>
    </Card>
  );
}
