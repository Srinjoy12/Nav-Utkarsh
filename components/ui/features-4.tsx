import React from "react";
import { Eye, Target, Compass, Sparkles, GraduationCap, Building2 } from "lucide-react";

export interface PurposeFeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultPurposeFeatures: PurposeFeatureItem[] = [
  {
    icon: <Eye className="size-5 text-[#8FA28A]" />,
    title: "Driving Sustainable Change",
    description: "Empowering professionals and organisations to realize their potential and achieve measurable ecological and social impact.",
  },
  {
    icon: <Target className="size-5 text-[#C8A96B]" />,
    title: "Delivering Excellence",
    description: "Providing high-quality advisory, technical support, and M&E strategies for Rural Development Professionals & CSOs.",
  },
  {
    icon: <Compass className="size-5 text-[#8FA28A]" />,
    title: "INRM & Watersheds",
    description: "Designing soil conservation, water management, and community-led ecosystem restoration frameworks.",
  },
  {
    icon: <Sparkles className="size-5 text-[#C8A96B]" />,
    title: "Rural Enterprise Growth",
    description: "Creating sustainable income generation models through SHGs, rural micro-enterprises, and agricultural value chains.",
  },
  {
    icon: <GraduationCap className="size-5 text-[#8FA28A]" />,
    title: "Leadership & Capacity",
    description: "Mentoring 600+ rural development executives and CSOs in strategic management and field operations.",
  },
  {
    icon: <Building2 className="size-5 text-[#C8A96B]" />,
    title: "CSR Strategic Alliances",
    description: "Formulating high-impact CSR partnerships, monitoring frameworks, and governance evaluation models.",
  },
];

export function Features({ features = defaultPurposeFeatures }: { features?: PurposeFeatureItem[] }) {
  return (
    <section className="py-16 md:py-24 bg-[#F7F4ED] w-full" id="purpose">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        
        {/* Header */}
        <div className="relative z-10 mx-auto max-w-2xl space-y-4 text-center">
          <span className="font-bold text-xs uppercase tracking-[0.2em] text-[#8FA28A] block">
            Our Purpose
          </span>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[#2C3A2A] md:text-5xl">
            Rooted in Purpose, Growing With Impact
          </h2>
          <p className="text-[#4A5848] text-base md:text-lg leading-relaxed">
            Navkarsh Advisory provides specialized technical, strategic, and capacity-building frameworks to empower rural development organizations across India.
          </p>
        </div>

        {/* 6-Grid Divided Feature Block */}
        <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y divide-[#C7D3C0] border border-[#C7D3C0] bg-white rounded-2xl shadow-sm *:p-8 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {features.map((item, idx) => (
            <div key={idx} className="space-y-2 hover:bg-[#F7F4ED]/50 transition-colors duration-200">
              <h3 className="text-base font-bold text-[#2C3A2A] tracking-tight">{item.title}</h3>
              <p className="text-sm text-[#4A5848] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;
