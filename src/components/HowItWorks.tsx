import React from "react";
import { motion } from "framer-motion";
import { Satellite, GalleryHorizontal, ChartColumn } from "lucide-react";
export function HowItWorks() {
    const steps = [
        {
            icon: Satellite,
            title: "Mangrove Mapping",
            description: "",
        },
        {
            icon: ChartColumn,
            title: "Statistical Data Module",
            description: "",
        },
        {
            icon: GalleryHorizontal,
            title: "Change Detection",
            description: "",
        },
    ];

    return (
        <section id="technology" className="py-20 bg-[#1a4d2e] text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[#c4703d] font-bold text-sm tracking-widest uppercase mb-4">How It Works</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">AI-Powered Mangrove Mapping</h3>
                    <p className="text-white/80 text-lg">
                        The tool allows visualization of mangrove areas throughout the national territory, as well as their total area;
                        statistical data by province and by mangrove areas allowing comparison with previous periods.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2,
                            }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className="w-14 h-14 bg-[#c4703d] rounded-xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-6 transition-transform">
                                <step.icon className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 font-serif">{step.title}</h4>
                            <p className="text-white/70 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
