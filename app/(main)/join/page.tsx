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

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
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
                                    className="w-full bg-cyan-500/20 border-cyan-500/30 hover:bg-cyan-500/30 text-white font-semibold"
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
                                    className="w-full bg-purple-500/20 border-purple-500/30 hover:bg-purple-500/30 text-white font-semibold"
                                >
                                    Register Now <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
