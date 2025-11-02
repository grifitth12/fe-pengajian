"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BookOpen, Users, GraduationCap, TrendingUp, Calendar, Clock, UserPlus, ArrowRight, Plus } from "lucide-react"
import Link from "next/link"

const stats = [
  {
    title: "Total Kajian",
    value: "24",
    change: "+3 minggu ini",
    icon: BookOpen,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Total Kelas",
    value: "8",
    change: "+1 minggu ini",
    icon: GraduationCap,
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    title: "Total Peserta",
    value: "285",
    change: "+45 bulan ini",
    icon: Users,
    color: "bg-green-500",
    gradient: "from-green-500 to-green-600",
  },
  {
    title: "Rating",
    value: "4.9",
    change: "+0.2 dari bulan lalu",
    icon: TrendingUp,
    color: "bg-orange-500",
    gradient: "from-orange-500 to-orange-600",
  },
]

const upcomingKajian = [
  {
    id: "KJ-001",
    tema: "Tafsir Al-Fatihah",
    tanggal: "2025-01-15",
    waktu: "19:00 WIB",
    peserta: 45,
    status: "Terjadwal",
  },
  {
    id: "KJ-002",
    tema: "Akhlaq Muslim",
    tanggal: "2025-01-17",
    waktu: "19:00 WIB",
    peserta: 32,
    status: "Terjadwal",
  },
  {
    id: "KJ-003",
    tema: "Fiqh Shalat",
    tanggal: "2025-01-20",
    waktu: "19:00 WIB",
    peserta: 0,
    status: "Draft",
  },
]

const recentClasses = [
  {
    id: "KL-101",
    nama: "Kelas Tahsin Dasar",
    peserta: 35,
    status: "Berjalan",
  },
  {
    id: "KL-102",
    nama: "Kelas Bahasa Arab",
    peserta: 22,
    status: "Pendaftaran",
  },
]

export default function MentorDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Dashboard Mentor
          </h1>
          <p className="text-muted-foreground mt-1">Selamat datang kembali! Berikut ringkasan aktivitas Anda</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shadow-sm">
            <Calendar className="w-4 h-4 mr-2" />
            Lihat Kalender
          </Button>
          <Button className="shadow-md hover:shadow-lg transition-shadow">
            <Plus className="w-4 h-4 mr-2" />
            Buat Baru
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-3xl font-bold">{stat.value}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        {stat.change}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Upcoming Kajian */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div>
                <CardTitle>Kajian Mendatang</CardTitle>
                <CardDescription>Jadwal kajian yang akan datang</CardDescription>
              </div>
              <Link href="/mentor/kajian">
                <Button variant="ghost" size="sm" className="h-8">
                  Lihat Semua
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingKajian.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{item.tema}</h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{item.tanggal} • {item.waktu}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {item.peserta} peserta
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          item.status === "Terjadwal" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              <Link href="/mentor/kajian">
                <Button variant="outline" className="w-full mt-2" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Tambah Kajian Baru
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Classes */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div>
                <CardTitle>Kelas Aktif</CardTitle>
                <CardDescription>Kelas yang sedang berjalan</CardDescription>
              </div>
              <Link href="/mentor/kelas">
                <Button variant="ghost" size="sm" className="h-8">
                  Lihat Semua
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentClasses.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{item.nama}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <UserPlus className="w-3 h-3" />
                          {item.peserta} peserta
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          item.status === "Berjalan" 
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              <Link href="/mentor/kelas">
                <Button variant="outline" className="w-full mt-2" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Buat Kelas Baru
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="shadow-md hover:shadow-lg transition-shadow bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Akses cepat ke fitur utama</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-3">
              <Link href="/mentor/kajian">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2 hover:bg-accent">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <span className="font-medium">Manage Kajian</span>
                  </Button>
                </motion.div>
              </Link>
              <Link href="/mentor/kelas">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2 hover:bg-accent">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                    <span className="font-medium">Manage Kelas</span>
                  </Button>
                </motion.div>
              </Link>
              <Link href="/mentor/profile">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2 hover:bg-accent">
                    <Users className="w-6 h-6 text-green-600" />
                    <span className="font-medium">Profile</span>
                  </Button>
                </motion.div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
