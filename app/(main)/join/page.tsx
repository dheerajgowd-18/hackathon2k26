"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, UserPlus, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JoinPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 pt-24 sm:pt-32">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                        Join the Revolution
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Choose your path to start your journey
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                    {/* Login Option */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                            <div className="mb-6 p-4 rounded-full w-16 h-16 bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <LogIn className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Already Registered?</h2>
                            <p className="text-white/60 mb-8">
                                Access your dashboard, manage your team, and check your status.
                            </p>
                            <Link href="https://rgm-hackathon2k26-six.vercel.app/login" className="block">
                                <Button
                                    className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/20 transition-all rounded-full text-base"
                                >
                                    Student Login <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Register Option */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                            <div className="mb-6 p-4 rounded-full w-16 h-16 bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <UserPlus className="w-8 h-8 text-purple-400" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-white">New Registration</h2>
                            <p className="text-white/60 mb-4">
                                Register your team for the hackathon and start your innovation journey.
                            </p>
                            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                <span className="text-red-400 font-semibold text-sm">Registrations Closed</span>
                            </div>
                            <Button
                                disabled
                                className="w-full h-12 bg-gray-600 text-white/50 font-bold rounded-full text-base cursor-not-allowed opacity-60"
                            >
                                Register Now <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* WhatsApp Group Invitation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="max-w-md mx-auto mb-12"
                >
                    <Link href="https://chat.whatsapp.com/I6qzAchc3PtIMFOhTdCluk?mode=gi_t" target="_blank">
                        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 backdrop-blur-sm hover:bg-green-500/20 transition-all group flex items-center justify-between gap-4 cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-green-500/20 text-green-400 group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0 0-1H9a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0Z" /><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0Z" /><path d="M9.5 13.5c.5.5 1.5.5 2 0l3.5-3.5c.5-.5.5-1.5 0-2" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white group-hover:text-green-400 transition-colors">Join WhatsApp Group</h3>
                                    <p className="text-white/60 text-xs sm:text-sm">Get latest updates & official announcements</p>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </motion.div>
            </div >
        </div >
    );
}
