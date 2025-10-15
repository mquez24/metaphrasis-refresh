import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceDetailCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  bullets: string[];
  fileTypes: string;
  turnaround: string;
  compliance: string[];
  color: string;
  index: number;
}

const ServiceDetailCard = ({
  icon: Icon,
  title,
  value,
  bullets,
  fileTypes,
  turnaround,
  compliance,
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

      <div className="mb-4">
        <p className="text-sm font-medium mb-2">So you can:</p>
        <ul className="space-y-1">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-brand-teal">
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2 text-xs text-muted-foreground border-t pt-4">
        <div>
          <span className="font-medium">File types:</span> {fileTypes}
        </div>
        <div>
          <span className="font-medium">Turnaround:</span> {turnaround}
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {compliance.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-secondary rounded text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button className="mt-4 w-full inline-flex items-center justify-center h-9 rounded-md px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium text-sm transition-colors">
        Learn More
      </button>
    </Card>
  );
};

export default ServiceDetailCard;
