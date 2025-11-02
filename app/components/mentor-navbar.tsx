"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, User, GraduationCap, LayoutDashboard } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navItems = [
  { href: "/mentor", label: "Dashboard", icon: LayoutDashboard },
  { href: "/mentor/kajian", label: "Manage Kajian", icon: Users },
  { href: "/mentor/kelas", label: "Manage Kelas", icon: BookOpen },
  { href: "/mentor/profile", label: "Profile", icon: User },
]

export default function MentorNavbar() {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/mentor" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-md"
            >
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </motion.div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hidden sm:inline group-hover:from-primary/80 transition-all">
              Mentor Panel
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = item.href === "/mentor" 
                ? pathname === "/mentor" 
                : pathname?.startsWith(item.href)
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        className={cn(
                          "relative overflow-hidden transition-all duration-300",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-primary rounded-md"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        <Icon className={cn(
                          "w-4 h-4 mr-2 relative z-10",
                          isActive && "text-primary-foreground"
                        )} />
                        <span className="relative z-10">{item.label}</span>
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = item.href === "/mentor" 
                ? pathname === "/mentor" 
                : pathname?.startsWith(item.href)
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        size="icon"
                        className={cn(
                          "relative overflow-hidden transition-all duration-300",
                          isActive && "bg-primary text-primary-foreground shadow-md"
                        )}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeTabMobile"
                            className="absolute inset-0 bg-primary rounded-md"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        <Icon className={cn(
                          "w-4 h-4 relative z-10",
                          isActive && "text-primary-foreground"
                        )} />
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

