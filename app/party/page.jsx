"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import SectionTracker from "@/components/SectionTracker";

export default function Party() {
  return (
    <>
      <SectionTracker prev="Home" href="/" current="Party" />
      <section>
        <motion.h1
          className="text-center text-5xl font-semibold text-mainColor mb-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
        >
          HurrayAppHackthon
        </motion.h1>
        <p className="text-center text-orange-900 font-light text-sm mb-12 mt-4 max-w-[30rem] mx-auto">
          Many of you moved away from this only, as they contributed to its
          integration from only one of the two, but they contributed to its
          survival for some time, and it no longer detracted from just one, but
          rather contributed to its survival for some time. With a show. His
          entire contribution took up only a fraction of every 2,000 out of
          every 200 partials. Take some time
        </p>
        <motion.figure
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              duration: 0.4,
              delay: 0.8,
            },
          }}
        >
          <Image
            src="/hackathon.png"
            alt="Hackthon"
            width={200}
            height={200}
            sizes="20"
            className="h-full w-full rounded-md"
          />
        </motion.figure>
      </section>
    </>
  );
}
