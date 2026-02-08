"use client";

import { motion } from "framer-motion";
import { sponsors } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Handshake } from "lucide-react";

export function SponsorsSection() {
    return (
        <section id="sponsors" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 mb-3">
                        <Handshake className="w-5 h-5 text-cyan-400" />
                        <span className="text-xs uppercase tracking-widest text-cyan-400/80 font-medium">Our Partners</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/60">
                        In Collaboration With
                    </h2>
                </motion.div>

                <div className="flex flex-wrap gap-8 items-center justify-center max-w-4xl mx-auto px-4">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center hover:bg-white/10 transition-all group backdrop-blur-sm w-full sm:w-auto min-w-[280px]"
                        >
                            <Link href={sponsor.link} target="_blank" className="relative w-48 h-24 transition-all duration-300">
                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    fill
                                    className="object-contain drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                                />
                            </Link>
                            <span className="mt-4 text-sm text-cyan-400 font-medium tracking-wide uppercase">
                                {sponsor.tier}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
