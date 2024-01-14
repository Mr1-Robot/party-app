"use client";

import { motion } from "framer-motion";
import Card from "./Card";
import { cardsData, cardsVariants } from "@/utils/data";

export default function Cards() {
  return (
    <section className="mt-52">
      <h1 className="text-center mb-24 text-3xl font-bold">Aswar Academy</h1>
      <motion.div
        className="flex flex-col md:flex-row gap-6 justify-between items-center md:items-stretch "
        variants={cardsVariants}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {cardsData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </motion.div>
    </section>
  );
}
