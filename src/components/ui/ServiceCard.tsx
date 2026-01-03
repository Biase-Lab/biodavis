import { ReactNode } from "react";
import { Check } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4 text-accent-500 group-hover:text-accent-700 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-3 font-heading">
        {title}
      </h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-600">
            <Check className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
