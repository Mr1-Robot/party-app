import Image from "next/image";
import Link from "next/link";

// Framer Motion
import { motion } from "framer-motion";
import { logoVariants } from "@/utils/data";

export default function Logo() {
  return (
    <motion.figure variants={logoVariants} initial="hidden" animate="animate">
      <Link href="/" className="logo">
        <Image
          src="/logo.svg"
          alt="Hosting Party logo."
          width={140}
          height={52}
          priority
          className="w-auto h-auto"
        />
      </Link>
    </motion.figure>
  );
}
