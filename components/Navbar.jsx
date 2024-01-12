"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// NAV ITEMS DATA
import { navItems } from "@/utils/data";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between shadow-sm pb-4">
      <div className="logo-items flexCenter gap-24">
        <Link href="/" className="logo">
          <Image
            src="./logo.svg"
            alt="Hosting Party logo."
            width={140}
            height={52}
            priority
          />
        </Link>

        <ul className="flexCenter gap-8">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`text-slate-700 text-sm hover:text-[#F57600] transition-all ${
                item.href.endsWith(pathname) ? "text-red-500" : ""
              }`}
            >
              <Link href={item.href} className="block">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section className="actions">
        <button>Sign in</button>
        <button>Signup</button>
      </section>
    </nav>
  );
}
