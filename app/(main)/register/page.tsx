"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, CalendarOff } from "lucide-react";

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 relative">
            {/* Header with Back Button and Logo */}
            <div className="fixed top-0 left-0 right-0 h-20 bg-black/50 backdrop-blur-xl border-b border-white/5 z-50 flex items-center justify-between px-4 sm:px-12">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden bg-white/5 border border-white/10 group-hover:rotate-12 transition-transform duration-300">
                            <Image src="/college-logo.png" alt="RGM Logo" width={40} height={40} className="object-contain p-1" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>HACKATHON</span>
                    </Link>
                </div>

                <Link href="/" className="flex items-center gap-2 text-white/40 hover:text-white transition-all text-xs font-bold uppercase tracking-widest group">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>

            <div className="max-w-xl mx-auto mt-20 text-center">
                <div className="bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-3xl p-12 shadow-2xl flex flex-col items-center">
                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6">
                        <CalendarOff className="w-10 h-10 text-white/20" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">Registrations Closed</h1>
                    <p className="text-white/40 mb-8">
                        The registration period for TechSprint 2K26 has ended. <br />
                        Thank you for your interest!
                    </p>
                    <Link
                        href="/"
                        className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-cyan-500 hover:text-white transition-all shadow-[0_5px_20px_rgba(255,255,255,0.1)]"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
