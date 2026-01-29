import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight, Satellite } from "lucide-react";
export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
            {/* Background Image - Mangrove Forest */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://gedae.ggpen.gov.ao/ferramenta-de-visualizacao/otchiva/images/DJI_20250415170955_0099_D.jpg"
                    alt="Angola Mangrove Forest"
                    className="w-full h-full object-cover"
                />

                {/* Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d2e]/90 via-[#1a4d2e]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e] via-transparent to-transparent opacity-80" />
            </div>

            {/* Subtle Satellite Orbit Graphic */}
            <div className="absolute top-20 right-20 opacity-20 hidden lg:block animate-pulse-slow">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="199" stroke="white" strokeWidth="1" strokeDasharray="8 8" />

                    <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="1" strokeDasharray="4 4" />

                    <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="1" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                            <Satellite className="w-4 h-4 text-[#3b82a0]" />
                            <span>Satellite-Powered Conservation</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
                            Protecting Angola's <br />
                            <span className="text-[#c4703d]">Mangrove Heritage</span>
                        </h1>

                        <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl leading-relaxed">
                            Combining advanced earth observation with community wisdom to monitor, protect, and restore our vital coastal
                            ecosystems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="group">
                                Explore Monitoring Sites
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                                Learn About Our Mission
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Stats ticker at bottom */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center gap-8 text-white/90">
                    <div className="flex items-center gap-3">
                        <div className="text-3xl font-serif font-bold text-[#c4703d]">12</div>
                        <div className="text-sm leading-tight">
                            Provinces
                            <br />
                            Monitored
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-3xl font-serif font-bold text-[#c4703d]">24/7</div>
                        <div className="text-sm leading-tight">
                            Satellite
                            <br />
                            Surveillance
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-3xl font-serif font-bold text-[#c4703d]">1.2M</div>
                        <div className="text-sm leading-tight">
                            Hectares
                            <br />
                            Protected
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
