"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ComingSoon() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Image
        src="/hero section.webp"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute top-8 left-8 z-20">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Sky Insurance Logo"
            width={90}
            height={90}
            className="mr-3"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <Image
          src="/dark star.png"
          alt="star"
          className="absolute top-56 left-28 hidden md:block"
          height={130}
          width={130}
        />

        <motion.div className="space-y-6" variants={fadeIn}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <div>Coming Soon</div>
            <div className="text-white mt-4">Something Great Awaits</div>
          </h1>

          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay tuned for the launch of our exciting new insurance brokerage
            platform. Sign up below to be the first to know when we go live.
          </p>
        </motion.div>

        <Image
          src="/light star.png"
          alt="star"
          className="absolute bottom-56 right-36 hidden md:block"
          height={130}
          width={130}
        />
      </div>
    </motion.section>
  );
}
