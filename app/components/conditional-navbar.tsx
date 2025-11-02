"use client"

import { usePathname } from "next/navigation"
import Navbar from "./navbar"

export default function ConditionalNavbar() {
  const pathname = usePathname()
  
  // Exclude navbar untuk admin dan mentor routes
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/mentor")) {
    return null
  }
  
  return <Navbar />
}

