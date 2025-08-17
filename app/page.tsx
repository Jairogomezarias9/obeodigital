"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { GridBackgroundDemo } from "@/components/ui/fondopantalla";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/cartas";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Timeline } from "@/components/ui/liniadetiempo";
const WorldMap = dynamic(
  () => import("../components/planeta").then((mod) => mod.WorldMap),
  { ssr: false }
);

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <GridBackgroundDemo />
        
      </section>

      <main className="bg-gray-950 text-slate-300">
        {/* Global Reach & Stats Section */}
        <motion.section
          id="reach"
          className="py-20 sm:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Global Reach, Tangible Results
              </h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                We run high-performance ad campaigns across the globe, connecting
                your business with converting customers wherever they are.
              </p>
            </div>

            <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-4">
              <div className="text-center">
                <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-500">
                  50M+
                </p>
                <p className="mt-1 sm:mt-2 text-sm sm:text-lg font-medium text-slate-400">
                  Views Delivered
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-500">
                  40+
                </p>
                <p className="mt-1 sm:mt-2 text-sm sm:text-lg font-medium text-slate-400">
                  Active Clients
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-500">
                  $100k+
                </p>
                <p className="mt-1 sm:mt-2 text-sm sm:text-lg font-medium text-slate-400">
                  Ad Spend Managed
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-500">
                  3
                </p>
                <p className="mt-1 sm:mt-2 text-sm sm:text-lg font-medium text-slate-400">
                  Years of Experience
                </p>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-12 text-center">
              <a
                href="https://t.me/obeodigital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                💬 Ready to Scale? Contact Us
              </a>
            </div>
          </div>
          <div className="mt-16 relative">
            <WorldMap
              dots={[
                {
                  start: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
                  end: { lat: 51.5074, lng: -0.1278 }, // London
                },
                {
                  start: { lat: 51.5074, lng: -0.1278 }, // London
                  end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                },
                {
                  start: { lat: -33.8688, lng: 151.2093 }, // Sydney
                  end: { lat: 35.6895, lng: 139.6917 }, // Tokyo
                },
                {
                  start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                  end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                },
                {
                  start: { lat: 40.7128, lng: -74.006 }, // New York
                  end: { lat: 48.8566, lng: 2.3522 }, // Paris
                },
              ]}
            />
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-950 to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-950 to-transparent"></div>
          </div>
        </motion.section>

        {/* What We Do Section */}
        <motion.section
          id="services"
          className="py-20 sm:py-24 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                What We Do
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                We scale channels and funnels in aggressive niches with traffic
                that actually converts.
              </p>
            </div>
            <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
              <GlowingEffect containerClassName="overflow-hidden">
                <Image
                  src="/Telegram_logo.svg.webp"
                  alt="Telegram background"
                  layout="fill"
                  objectFit="contain"
                  className="absolute top-0 bottom-0 right-0 w-1/2 z-0 opacity-10"
                />
                <div className="relative z-10 p-6 sm:p-8 h-full">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-500"> Telegram Ads</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    Leverage our network of whitelisted channels for targeted traffic. Our ban-resistant methods ensure your campaigns run smoothly in high-risk niches.
                  </p>
                </div>
              </GlowingEffect>
              <GlowingEffect containerClassName="overflow-hidden">
                <Image
                  src="/meta.png"
                  alt="Meta background"
                  layout="fill"
                  objectFit="contain"
                  className="absolute top-0 bottom-0 right-0 w-1/2 z-0 opacity-10"
                />
                <div className="relative z-10 p-6 sm:p-8 h-full">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-500">
                     Meta Ads (Facebook/Instagram)
                  </h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    Gain access to our exclusive agency accounts and proven funnels. We turn cold traffic into performing assets, driving measurable results.
                  </p>
                </div>
              </GlowingEffect>
                <GlowingEffect containerClassName="overflow-hidden">
                  <Image
                  src="/xx.webp"
                  alt="X background"
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-[-20%] bottom-[-20%] right-[-20%] w-[120%] z-0 opacity-10 scale-100"
                  />
                  <div className="relative z-10 p-6 sm:p-8 h-full">
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-600 dark:text-blue-500"> X Ads (Twitter)</h3>
                  <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">
                  Achieve fast-volume traffic and viral growth. Our expertise in interest-based targeting and direct CPA models maximizes your reach and ROI.
                  </p>
                  </div>
                </GlowingEffect>
            </div>
          </div>
        </motion.section>

        {/* How We Work Section */}
        <motion.section
          id="process"
          className="py-20 sm:py-24 relative overflow-hidden mt-44"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <BackgroundBeams />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                How We Work
              </h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                Our process is designed for speed and results. We handle everything from audit to optimization, ensuring a seamless experience.
              </p>
            </div>
            <div className="relative mt-20">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 h-full w-0.5 bg-slate-700 md:left-1/2 md:-translate-x-1/2" aria-hidden="true"></div>
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="relative flex items-center justify-start text-left md:justify-end md:text-right">
                  <div className="w-full pl-16 md:w-1/2 md:pr-16 md:pl-0">
                    <GlowingEffect>
                      <div className="p-6 bg-slate-900/80 backdrop-blur-lg rounded-xl">
                        <h3 className="text-xl font-bold text-white">Free Express Audit</h3>
                        <p className="mt-2 text-slate-400">
                          We review your offer, funnel, or channel to see if we can scale it. No strings attached.
                        </p>
                      </div>
                    </GlowingEffect>
                  </div>
                  <div className="absolute left-6 -translate-x-1/2 md:left-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 border-4 border-gray-950">
                    <span className="text-xl font-bold text-white">1</span>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="relative flex items-center justify-start text-left">
                  <div className="w-full pl-16 md:w-1/2 md:pl-16">
                    <GlowingEffect>
                      <div className="p-6 bg-slate-900/80 backdrop-blur-lg rounded-xl">
                        <h3 className="text-xl font-bold text-white">Setup in 24-48h</h3>
                        <p className="mt-2 text-slate-400">
                          We prepare creatives, choose the right channels, and launch fast to start delivering results immediately.
                        </p>
                      </div>
                    </GlowingEffect>
                  </div>
                  <div className="absolute left-6 -translate-x-1/2 md:left-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 border-4 border-gray-950">
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="relative flex items-center justify-start text-left md:justify-end md:text-right">
                  <div className="w-full pl-16 md:w-1/2 md:pr-16 md:pl-0">
                    <GlowingEffect>
                      <div className="p-6 bg-slate-900/80 backdrop-blur-lg rounded-xl">
                        <h3 className="text-xl font-bold text-white">Daily Optimization & Scaling</h3>
                        <p className="mt-2 text-slate-400">
                          We track CPA, CTR, and ROI daily, making constant improvements to scale your campaigns effectively.
                        </p>
                      </div>
                    </GlowingEffect>
                  </div>
                  <div className="absolute left-6 -translate-x-1/2 md:left-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 border-4 border-gray-950">
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonial Placeholder */}
        <motion.section
          id="testimonial"
          className="py-20 sm:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What Our Clients Say
            </h2>
            <div className="mt-8 bg-slate-800/50 p-8 rounded-lg shadow-md">
              <p className="text-slate-400 italic">
                "Testimonial content coming soon..."
              </p>
            </div>
          </div>
        </motion.section>

        {/* Separator */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <hr className="border-t border-slate-700" />
        </div>

        {/* CTA Section */}
        <motion.section
          id="contact"
          className="py-20 sm:py-32 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Scale Your Channel?
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
              No calls, no pressure. Just message us and we’ll analyze your case
              directly. Get a free, no-obligation audit.
            </p>
            
            <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 text-left">
              <div className="bg-slate-800/50 p-4 sm:p-6 rounded-lg">
                <h3 className="font-semibold text-white text-sm sm:text-base">✓ Free Express Audit</h3>
                <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">We'll analyze your offer and funnel to identify scaling opportunities.</p>
              </div>
              <div className="bg-slate-800/50 p-4 sm:p-6 rounded-lg">
                <h3 className="font-semibold text-white text-sm sm:text-base">✓ Custom Strategy</h3>
                <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">Receive a tailored plan designed for your specific niche and goals.</p>
              </div>
              <div className="bg-slate-800/50 p-4 sm:p-6 rounded-lg">
                <h3 className="font-semibold text-white text-sm sm:text-base">✓ Direct Expert Access</h3>
                <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">Chat directly with the specialists who will handle your campaigns.</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <a
                href="https://t.me/obeodigital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                👉 DM us on Telegram: @obeodigital
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
