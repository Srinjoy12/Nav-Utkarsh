import React from "react";
import { User, Target, Compass, Award, Building, Sparkles } from "lucide-react";

export interface BentoItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  colSpan?: string;
  tag?: string;
}

const defaultItems: BentoItem[] = [
  {
    icon: <Target className="w-8 h-8 text-emerald-700 stroke-[1.5]" />,
    title: "Integrated Natural Resource Management",
    description: "Designing watershed management, soil conservation, and ecosystem restoration frameworks with community participation.",
    colSpan: "lg:col-span-2",
    tag: "Core Focus"
  },
  {
    icon: <Compass className="w-8 h-8 text-amber-700 stroke-[1.5]" />,
    title: "Livelihood Development",
    description: "Creating sustainable income generation opportunities through rural enterprises, SHGs, and agricultural value chains.",
    colSpan: "lg:col-span-1",
    tag: "Strategy"
  },
  {
    icon: <Award className="w-8 h-8 text-emerald-700 stroke-[1.5]" />,
    title: "Capacity Building & Training",
    description: "Empowering rural development staff, CSOs, and community leaders through specialized leadership and technical workshops.",
    colSpan: "lg:col-span-1",
    tag: "Growth"
  },
  {
    icon: <Building className="w-8 h-8 text-amber-700 stroke-[1.5]" />,
    title: "CSR Funding & Program Strategy",
    description: "Formulating high-impact CSR partnerships, project monitoring, and evaluation models for long-term sustainability.",
    colSpan: "lg:col-span-2",
    tag: "Partnership"
  }
];

export function BentoGridSection({ items = defaultItems }: { items?: BentoItem[] }) {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#F7F4ED]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="font-bold text-xs uppercase tracking-[0.2em] text-[#8FA28A]">
              Core Focus Areas
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#2C3A2A] max-w-2xl">
              Comprehensive Solutions Rooted in CHANGE
            </h2>
            <p className="text-base md:text-lg text-[#4A5848] max-w-xl">
              Navkarsh Advisory implements core principles across specialized domain areas to ensure sustainable rural impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-8 border border-[#C7D3C0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${item.colSpan || ''}`}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-xl bg-[#F7F4ED] border border-[#C7D3C0] text-[#8FA28A] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  {item.tag && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#F7F4ED] text-[#C8A96B] border border-[#C7D3C0]">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-[#2C3A2A] tracking-tight group-hover:text-[#8FA28A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#4A5848] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoGridSection;
