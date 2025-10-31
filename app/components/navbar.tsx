"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Heart, User } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/class", label: "Kelas Kajian", icon: BookOpen },
    { href: "/kajian", label: "Kajian", icon: Users },
    { href: "/donasi", label: "Donasi", icon: Heart },
    { href: "/profile", label: "Profile", icon: User },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-primary hidden sm:inline">Pengajian Online</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={isActive ? "bg-primary text-primary-foreground" : ""}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="icon"
                    className={isActive ? "bg-primary text-primary-foreground" : ""}
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
