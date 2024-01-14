"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { cardVariant } from "@/utils/data";

export default function Card({ img, title, description }) {
  return (
    <motion.div
      className="bg-orange-100 rounded-lg p-2 max-w-[25rem] flex flex-col h-[25rem]"
      variants={cardVariant}
      viewport={{ once: true }}
    >
      <Image
        src={img}
        alt={title}
        width={400}
        height={400}
        className="rounded-md w-full flex-auto"
      />
      <div className="mt-4 flex flex-col gap-1">
        <h1 className="text-xl text-slate-900 font-medium">{title}</h1>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
