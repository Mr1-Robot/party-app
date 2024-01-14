"use client";

import Link from "next/link";

import Logo from "./Logo";

// Framer Motion
import { motion } from "framer-motion";
import { footerLinks, itemsVariants, listItemVariants } from "@/utils/data";

export default function Footer() {
  const date = new Date().toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });

  return (
    <footer className="pt-6 pb-2 px-4 sm:px-16 lg:px-24 bg-orange-100 ">
      <div className="flex flex-col sm:flex-row justify-between">
        <Logo />

        <ul className="flex items-start gap-20">
          {footerLinks.map((item) => (
            <li key={item.id}>
              <motion.h2
                className="mb-3 text-slate-900 font-medium"
                variants={listItemVariants}
                initial="hidden"
                whileInView="animate"
              >
                {item.heading}
              </motion.h2>
              <motion.div
                className="flex flex-col gap-1 text-sm text-slate-700"
                variants={listItemVariants}
                initial="hidden"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {item.links.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemsVariants}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={item.href}
                      className="block hover:translate-x-2 hover:text-slate-900 transition"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between gap-2 sm:gap-0 mt-10 text-sm text-slate-600 max-w-full">
        <p>All rights reserved. ©HurryAppHackathon - Aswar.Co</p>
        <p>{date}</p>
      </div>
    </footer>
  );
}
