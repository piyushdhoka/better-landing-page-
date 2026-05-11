"use client";

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function PricingSection() {
    return (
        <section className="relative py-24 sm:py-32" id="pricing" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <span className="font-pixel text-[10px] tracking-[0.2em] text-black uppercase mb-4 inline-block">Pricing</span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mt-2">Pricing that Scales with You</h2>
                    <p className="text-sm text-black font-pixel uppercase tracking-wider mt-4 mx-auto max-w-2xl">Better Logs is evolving to be more than just observability. It supports your entire AI workflow.</p>
                </div>

                <div className="mt-8 grid gap-8 md:mt-20 md:grid-cols-3 items-center">
                    {/* Free Card */}
                    <Card className="flex flex-col border border-gray-200 shadow-none rounded-xl h-full bg-white">
                        <CardHeader className="pt-10 px-8">
                            <CardTitle className="font-semibold text-black text-xl">Free</CardTitle>
                            <span className="my-4 block text-4xl font-bold text-black">$0 <span className="text-lg font-normal text-black">/ mo</span></span>
                            <CardDescription className="text-[10px] text-black font-pixel uppercase tracking-widest">Per editor</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6 px-8">
                            <hr className="border-dashed border-gray-200" />
                            <ul className="list-outside space-y-4 text-sm text-black">
                                {['Basic Analytics Dashboard', '10K Traces / Month', 'Email and Chat Support'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 font-mono tracking-tight text-xs">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto px-8 pb-10 pt-8 bg-gray-50/50 rounded-b-xl border-t border-gray-100">
                            <Link href="#waitlist" className="w-full h-12 text-[11px] font-pixel uppercase tracking-widest rounded-sm border border-gray-200 flex items-center justify-center hover:bg-white transition-colors text-black bg-white">
                                Get Started
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Pro Card - Elevated */}
                    <div className="relative z-10 h-full flex flex-col">
                        <Card className="relative flex flex-col flex-1 border border-black shadow-2xl rounded-xl overflow-visible bg-white">
                            <div className="absolute inset-x-0 -top-3.5 flex justify-center">
                                <span className="flex items-center rounded-sm px-4 py-1.5 text-[9px] font-pixel tracking-widest uppercase bg-black text-white shadow-lg">
                                    Popular
                                </span>
                            </div>

                            <div className="flex flex-col flex-1">
                                <CardHeader className="pt-12 px-8">
                                    <CardTitle className="font-semibold text-black text-xl">Pro</CardTitle>
                                    <span className="my-4 block text-5xl font-bold text-black">$19 <span className="text-lg font-normal text-black">/ mo</span></span>
                                    <CardDescription className="text-[10px] text-black font-pixel uppercase tracking-widest">Per editor</CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-6 flex-1 px-8">
                                    <hr className="border-dashed border-gray-200" />
                                    <ul className="list-outside space-y-4 text-sm text-black">
                                        {['Everything in Free Plan', '500K Traces / Month', 'Email and Chat Support', 'Hallucination Detection', 'Alerts & Webhooks', 'Advanced Analytics'].map((item, index) => (
                                            <li key={index} className="flex items-center gap-3 font-mono tracking-tight text-xs">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter className="px-8 pb-12 pt-8 bg-gray-50/50 rounded-b-xl border-t border-gray-100">
                                    <Link href="#waitlist" className="w-full h-12 text-[11px] font-pixel uppercase tracking-widest rounded-sm flex items-center justify-center bg-black !text-white hover:bg-gray-900 transition-all shadow-md" style={{ color: 'white' }}>
                                        Get Started
                                    </Link>
                                </CardFooter>
                            </div>
                        </Card>
                    </div>

                    {/* Startup Card */}
                    <Card className="flex flex-col border border-gray-200 shadow-none rounded-xl h-full bg-white">
                        <CardHeader className="pt-10 px-8">
                            <CardTitle className="font-semibold text-black text-xl">Startup</CardTitle>
                            <span className="my-4 block text-4xl font-bold text-black">$29 <span className="text-lg font-normal text-black">/ mo</span></span>
                            <CardDescription className="text-[10px] text-black font-pixel uppercase tracking-widest">Per editor</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6 px-8">
                            <hr className="border-dashed border-gray-200" />
                            <ul className="list-outside space-y-4 text-sm text-black">
                                {['Everything in Pro Plan', 'Unlimited Traces', '1-year retention', 'Custom Dashboards', 'Priority Support'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 font-mono tracking-tight text-xs">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto px-8 pb-10 pt-8 bg-gray-50/50 rounded-b-xl border-t border-gray-100">
                            <Link href="#waitlist" className="w-full h-12 text-[11px] font-pixel uppercase tracking-widest rounded-sm border border-gray-200 flex items-center justify-center hover:bg-white transition-colors text-black bg-white">
                                Get Started
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}
