"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

export interface TestimonialItem {
  name: string;
  role: string;
  image: string;
  quote: string;
  className: string;
  imageBorderColor?: string;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    name: "Sandeep Singh",
    role: "Project Manager, Rural Interventions",
    image: "/assets/Real pics/WhatsApp Image 2026-07-20 at 09.32.22 (27).jpeg",
    quote:
      "Since 2006, Dr. Sumit Roy has been a guiding force in my life. Rising from field staff to Project Manager, I owe much of my journey to his practical insights and unwavering belief in my potential.",
    className:
      "lg:col-span-1 lg:row-span-2 bg-[#2C3A2A] text-[#F7F4ED] border-transparent shadow-lg",
    imageBorderColor: "border-[#C8A96B]",
  },
  {
    name: "Subrata Ghosh",
    role: "Program Manager, Watershed Vertical",
    image: "/assets/Real pics/WhatsApp Image 2026-07-20 at 09.32.22 (17).jpeg",
    quote:
      "Dr. Roy inspired me to stay grounded in field realities and dedicate myself to community needs. Thanks to his mentorship, I prepared DPRs for complex watershed projects with precision.",
    className:
      "lg:col-span-1 bg-white border border-[#C7D3C0] text-[#2C3A2A] shadow-sm",
    imageBorderColor: "border-[#8FA28A]",
  },
  {
    name: "Banashree Chakraborty",
    role: "Programme Manager, Governance & SHG",
    image: "/assets/Real pics/WhatsApp Image 2026-07-20 at 09.32.22 (32).jpeg",
    quote:
      "Sumit da has been the spark behind my growth, teaching me technical skills, management, and the art of resilience. His support helped me rise above challenges with confidence.",
    className:
      "lg:col-span-1 lg:row-span-2 bg-[#2C3A2A] text-white border-transparent shadow-lg",
    imageBorderColor: "border-[#C8A96B]",
  },
  {
    name: "Niladri Biswas",
    role: "District Program Manager",
    image: "/assets/Real pics/WhatsApp Image 2026-07-20 at 09.32.22 (26).jpeg",
    quote:
      "Dr. Roy's mentorship transformed my leadership and technical skills in watershed management, providing clarity for high-impact rural development execution.",
    className:
      "lg:col-span-1 bg-white border border-[#C7D3C0] text-[#2C3A2A] shadow-sm",
    imageBorderColor: "border-[#8FA28A]",
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "CSO Network Lead",
    image: "/assets/Real pics/WhatsApp Image 2026-07-20 at 09.32.22 (30).jpeg",
    quote:
      "Navkarsh Advisory's strategic clarity and organizational development frameworks scaled our interventions across 4 state-level program units seamlessly.",
    className:
      "lg:col-span-1 bg-[#F7F4ED] border border-[#C7D3C0] text-[#2C3A2A] shadow-sm",
    imageBorderColor: "border-[#C8A96B]",
  },
  {
    name: "Sunita Sharma",
    role: "Senior CSR Consultant",
    image: "/assets/Real pics/WhatsApp Image 2026-07-20 at 09.32.22 (35).jpeg",
    quote:
      "We built transparent monitoring systems and CSR funding linkages under Dr. Roy's guidance. The long-term sustainability achieved for our partner CSOs was immediate.",
    className:
      "lg:col-span-2 bg-[#2C3A2A] text-[#F7F4ED] border-transparent shadow-lg",
    imageBorderColor: "border-[#C8A96B]",
  },
];

export default function Testimonial1({ testimonials = defaultTestimonials }: { testimonials?: TestimonialItem[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="w-full py-16 bg-[#F7F4ED] text-[#2C3A2A]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto space-y-3">
          <span className="font-bold text-xs uppercase tracking-[0.2em] text-[#8FA28A] block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#2C3A2A]">
            Trusted By Mentored Leaders &amp; Partners
          </h2>
          <p className="text-[#4A5848] text-base md:text-lg">
            Hear from professionals, organizations, and communities transformed through Navkarsh Advisory.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "p-8 rounded-2xl flex flex-col justify-between transition-all duration-300",
                testimonial.className,
              )}
            >
              <p
                className={cn(
                  "font-medium leading-relaxed mb-8",
                  testimonial.className.includes("lg:row-span-2") ||
                    testimonial.className.includes("col-span-2")
                    ? "text-xl md:text-2xl lg:text-2xl"
                    : "text-base",
                )}
              >
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "relative w-12 h-12 rounded-full overflow-hidden border-2 shrink-0",
                    testimonial.imageBorderColor || "border-[#8FA28A]",
                  )}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base">{testimonial.name}</h4>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
