"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, UserPlus, LogIn } from "lucide-react";
import { Button } from "@/components/ui/moving-border";

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
                                    borderRadius="1.5rem"
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-400/50 hover:from-cyan-400 hover:to-blue-400 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
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
                            <p className="text-white/60 mb-8">
                                Register your team for the hackathon and start your innovation journey.
                            </p>
                            <Link href="https://rgm-hackathon2k26-six.vercel.app/register" className="block">
                                <Button
                                    borderRadius="1.5rem"
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 border-purple-400/50 hover:from-purple-400 hover:to-pink-400 text-white font-bold shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all"
                                >
                                    Register Now <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    {/* Important Guideline */}
                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm flex items-start gap-4">
                        <div className="p-2 rounded-full bg-blue-500/20 text-blue-400 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Important Guideline</h3>
                            <p className="text-white/80 text-sm">
                                If you are using a mobile phone, please turn on <span className="text-blue-400 font-semibold">"Desktop Site"</span> mode in your browser settings for easy registration.
                            </p>
                        </div>
                    </div>

                    {/* Troubleshooting (Simple English) */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            ⚠️ Having Trouble Registering?
                        </h3>
                        <div className="space-y-4 text-white/80 text-sm sm:text-base">
                            <p className="font-medium text-white/90">
                                If the registration page is not working properly, try these simple steps:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-red-400">
                                <li>
                                    <span className="text-white font-semibold">Close and Reopen:</span> Close the website tab completely and open it again.
                                </li>
                                <li>
                                    <span className="text-white font-semibold">Use Another Browser:</span> Try opening the link in a different browser (like Chrome, Edge, or Firefox).
                                </li>
                                <li>
                                    <span className="text-white font-semibold">Change Device:</span> If possible, try registering from a laptop or a different mobile phone.
                                </li>
                                <li className="pt-2 border-t border-white/10">
                                    <span className="text-white font-semibold">Still not working?</span> Please contact the student coordinators for help.
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
