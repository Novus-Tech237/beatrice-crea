import { LucideIcon } from "lucide-react";

interface InfoCardProps {
    title?: string;
    description?: string;
    counters?: number;
    suffix?: string;
    icon?: LucideIcon;
}

const InfoCard = ({ title, description, counters, suffix, icon: IconComponent }: InfoCardProps) => {
    return ( 
        <div className="md:w-[600px]">
            {IconComponent && <IconComponent className="w-6 h-6 text-purple-950" />}
            <h2 className="text-2xl font-bold md:w-[250px] mt-4 text-purple-700">{title}</h2>
            <h2 className="md:text-6xl text-4xl font-semibold">
                {counters?.toLocaleString()} {suffix}
            </h2>
            <span>{description}</span>
        </div>
     );
}
 
export default InfoCard;