import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceDetailCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  color: string;
  index: number;
}

const ServiceDetailCard = ({
  icon: Icon,
  title,
  value,
  color,
  index,
}: ServiceDetailCardProps) => {
  return (
    <Card
      className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`${color} flex-shrink-0`}>
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{value}</p>
        </div>
      </div>

      <button className="mt-4 w-full inline-flex items-center justify-center h-9 rounded-md px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium text-sm transition-colors">
        Learn More
      </button>
    </Card>
  );
};

export default ServiceDetailCard;
