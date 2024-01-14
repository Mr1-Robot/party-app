"use client";

import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SecureRoutes({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    const access = localStorage.getItem("access");
    console.log(access);

    if (access === null || access === "") {
      if (pathname === "/about-us") {
        return;
      }
      if (pathname !== "/login") {
        redirect("/login/");
      }
    }
  }, []);

  return <>{children}</>;
}
