"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// Framer Motion & Nav Links
import { motion } from "framer-motion";
import {
  signInVariants,
  signUpVariants,
  itemsVariants,
  listItemVariants,
  navItems,
} from "@/utils/data";
import Logo from "./Logo";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const access = localStorage.getItem("access");
    setIsLoggedIn(access);
  });

  const router = useRouter();
  const [isNav, setIsNav] = useState(false);
  const pathname = usePathname();
  const currentPage = pathname === "" ? "/" : pathname;

  function signOut() {
    localStorage.removeItem("access");
    router.push("/login");
  }

  return (
    <nav className="flexCenter justify-between">
      <div className="logo-items flexCenter gap-12 md:gap-12">
        <Logo />

        <motion.ul
          className="hidden md:flex gap-8"
          variants={listItemVariants}
          initial="hidden"
          animate="animate"
        >
          {navItems.map((item) => (
            <motion.li
              variants={itemsVariants}
              key={item.id}
              className={`text-slate-700 text-sm hover:text-mainColor ${
                item.href === currentPage ? "active-nav" : ""
              }`}
            >
              <Link href={item.href} className="block">
                {item.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <section className="actions flexCenter gap-4">
        {isLoggedIn && (
          <>
            <Link
              href="/videos"
              className="text-sm font-medium text-slate-900 hover:text-mainColor transition"
            >
              My Videos
            </Link>
            <Link
              href="/upload-video"
              className="text-sm font-medium text-slate-900 hover:text-mainColor transition"
            >
              Upload Video
            </Link>
            <button
              onClick={signOut}
              className="hidden sm:block text-sm font-medium text-white bg-red-400 p-2 rounded-md hover:bg-red-500 transition"
            >
              Sign Out
            </button>
          </>
        )}
        {!isLoggedIn && (
          <>
            <motion.div
              variants={signInVariants}
              initial="hidden"
              animate="animate"
            >
              <Link
                href="/login"
                className="text-mainColor font-medium hover:scale-105 block transition hover:text-slate-900"
              >
                Sign in
              </Link>
            </motion.div>
            <motion.div
              variants={signUpVariants}
              initial="hidden"
              animate="animate"
            >
              <Link
                href="/register"
                className="bg-mainColor text-white p-2 px-4 rounded-md hover:scale-105 block transition"
              >
                Signup
              </Link>
            </motion.div>
          </>
        )}
      </section>

      <button onClick={() => setIsNav(!isNav)} className="block sm:hidden z-20">
        {!isNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {isNav && (
        <>
          <motion.ul
            className="flex flex-col items-center justify-center sm:hidden gap-8 absolute left-0 top-0 bg-orange-100 z-10 min-h-screen h-[20rem] min-w-full"
            variants={listItemVariants}
            initial="hidden"
            animate="animate"
          >
            {navItems.map((item) => (
              <motion.li
                variants={itemsVariants}
                key={item.id}
                className={`text-slate-700 text-base hover:text-mainColor ${
                  item.href === currentPage ? "active-nav" : ""
                }`}
              >
                <Link href={item.href} className="block">
                  {item.title}
                </Link>
              </motion.li>
            ))}
            {isLoggedIn && (
              <motion.li variants={itemsVariants}>
                <button
                  onClick={signOut}
                  className="text-sm font-medium text-white bg-red-400 p-2 rounded-md hover:bg-red-500 transition"
                >
                  Sign Out
                </button>
              </motion.li>
            )}
            {!isLoggedIn && (
              <>
                <motion.li
                  variants={signInVariants}
                  initial="hidden"
                  animate="animate"
                >
                  <Link href="/login" className="text-mainColor font-medium">
                    Sign in
                  </Link>
                </motion.li>
                <motion.li
                  variants={signUpVariants}
                  initial="hidden"
                  animate="animate"
                >
                  <Link
                    href="/register"
                    className="bg-mainColor text-white p-2 px-4 rounded-md"
                  >
                    Signup
                  </Link>
                </motion.li>
              </>
            )}
          </motion.ul>
        </>
      )}
    </nav>
  );
}
