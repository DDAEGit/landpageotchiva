import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
export function Impact() {
    return (
        <section id="impact" className="py-20 bg-stone-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Map Visualization Placeholder */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.95,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="w-full lg:w-1/2 bg-white p-4 rounded-3xl shadow-xl border border-stone-200"
                    >
                        <div className="relative aspect-[4/3] bg-[#e6ded5] rounded-2xl overflow-hidden flex items-center justify-center">
                            {/* Simplified Angola Map Representation */}
                            {/* <svg viewBox="0 0 400 400" className="w-full h-full opacity-40">
                <path
                  d="M100,50 Q150,50 180,100 T250,200 T200,350 T100,300 T50,200 T100,50"
                  fill="#d6cbbd" />

              </svg> */}

                            {/* Monitoring Points */}
                            {/* <div className="absolute top-1/4 left-1/3">
                <div className="relative">
                  <div className="w-4 h-4 bg-[#c4703d] rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-4 h-4 bg-[#c4703d] rounded-full border-2 border-white relative z-10 shadow-lg"></div>
                  <div className="absolute left-6 top-0 bg-white px-3 py-1 rounded-lg shadow-md text-xs font-bold whitespace-nowrap">
                    Luanda Coast
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1/3 right-1/3">
                <div className="relative">
                  <div className="w-4 h-4 bg-[#1a4d2e] rounded-full animate-ping absolute opacity-75 delay-300"></div>
                  <div className="w-4 h-4 bg-[#1a4d2e] rounded-full border-2 border-white relative z-10 shadow-lg"></div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/4">
                <div className="relative">
                  <div className="w-4 h-4 bg-[#1a4d2e] rounded-full animate-ping absolute opacity-75 delay-700"></div>
                  <div className="w-4 h-4 bg-[#1a4d2e] rounded-full border-2 border-white relative z-10 shadow-lg"></div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-medium text-stone-600 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c4703d]"></span>{' '}
                  Critical Alert
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-[#1a4d2e]"></span>{' '}
                  Stable
                </div>
              </div> */}
                            <img
                                src="https://gedae.ggpen.gov.ao/ferramenta-de-visualizacao/otchiva/images/DJI_20251031170523_0701_D.jpg"
                                alt="Forest texture"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                    </motion.div>

                    {/* Stats Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-[#1a4d2e] font-bold text-sm tracking-widest uppercase mb-4">Real Impact</h2>
                        <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                            Monitoring <span className="text-[#c4703d]">43.000 hectares</span> approximately
                        </h3>
                        <p className="text-lg text-stone-600 mb-10">
                            The tool makes it possible to check changes in mangroves over the last five years, since 2020, as well as
                            identify mangrove areas in the country.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                {
                                    label: "Sites Monitored",
                                    value: "42",
                                    suffix: "+",
                                },
                                {
                                    label: "Data Points",
                                    value: "1.5M",
                                    suffix: "",
                                },
                                {
                                    label: "Alerts Resolved",
                                    value: "85",
                                    suffix: "%",
                                },
                                {
                                    label: "Communities",
                                    value: "12",
                                    suffix: "",
                                },
                            ].map((stat, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                                    <div className="text-3xl md:text-4xl font-bold text-[#1a4d2e] mb-1 font-serif">
                                        {stat.value}
                                        <span className="text-[#c4703d] text-2xl">{stat.suffix}</span>
                                    </div>
                                    <div className="text-stone-500 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
