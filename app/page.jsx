"use client";
import Link from "next/link";

import HeroSvg from "@/components/HeroSvg";
// Framer Motion
import { motion } from "framer-motion";
import { heroText, actionBtn } from "@/utils/data";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between gap-24 lg:gap-2">
        <motion.div
          variants={heroText}
          initial="hidden"
          animate="animate"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl lg:text-5xl font-semibold leading-[150%] lg:leading-[4rem]">
            Create Your Hosting Today with Hosting Party and let the{" "}
            <span className="text-mainColor font-extrabold">Party Starty</span>
          </h1>

          <motion.div
            className="w-fit overflow-hidden"
            variants={actionBtn}
            initial="hidden"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <Link
              href="/party"
              className="bg-slate-900 text-white text-center text-lg rounded-md py-4 px-10 mt-10 w-fit block hover:bg-mainColor transition"
            >
              Start a new party
            </Link>
          </motion.div>
        </motion.div>
        <HeroSvg />
      </section>

      <Cards />
    </>
  );
}
