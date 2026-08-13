import React from "react";
import { Quote } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organization: string;
  image?: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    quote: "Dr. Sumit Roy's deep understanding of rural dynamics transformed our watershed intervention strategy completely.",
    name: "Rajesh Kumar",
    role: "Program Director",
    organization: "PRADAN",
    image: "/assets/Real pics/WhatsApp Image 2026-07-20 at 09.32.22 (27).jpeg"
  },
  {
    quote: "Navkarsh Advisory provided exceptional capacity building that enabled our team of 50+ professionals to reach leadership positions.",
    name: "Sunita Sharma",
    role: "Senior Consultant",
    organization: "CSO Network",
    image: "/assets/Real pics/WhatsApp Image 2026-07-20 at 09.32.22 (17).jpeg"
  },
  {
    quote: "The strategic clarity and hands-on mentoring delivered by Dr. Roy created long-term sustainability across all our CSR programs.",
    name: "Vikram Mehta",
    role: "CSR Head",
    organization: "Rural Impact Foundation",
    image: "/assets/Real pics/WhatsApp Image 2026-07-20 at 09.32.22 (32).jpeg"
  }
];

export function TestimonialsSection({ testimonials = defaultTestimonials }: { testimonials?: Testimonial[] }) {
  return (
    <section className="py-20 bg-[#F7F4ED] w-full">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center flex flex-col items-center gap-3">
          <span className="font-bold text-xs uppercase tracking-[0.2em] text-[#8FA28A]">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#2C3A2A]">
            Professional Mentored Testimonials
          </h2>
          <p className="text-[#4A5848] text-base md:text-lg">
            Hear from leaders and organizations whose trajectories have been transformed through Navkarsh Advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between bg-white rounded-2xl p-8 border border-[#C7D3C0] shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-[#C8A96B] mb-4 stroke-1" />
              <p className="text-[#2C3A2A] text-base leading-relaxed mb-8 flex-1 italic">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-3 border-t border-[#C7D3C0]/60 pt-4">
                <img
                  src={item.image || "https://api.dicebear.com/7.x/initials/svg?seed=SR"}
                  alt={item.name}
                  className="w-10 h-10 rounded-full border border-[#C7D3C0] object-cover"
                />
                <div className="flex flex-col">
                  <h4 className="font-bold text-[#2C3A2A] text-sm">{item.name}</h4>
                  <p className="text-xs text-[#4A5848]">{item.role}, <span className="text-[#8FA28A] font-medium">{item.organization}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
