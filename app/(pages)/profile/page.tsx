"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Award, Heart, Settings, LogOut, Edit2, Mail, Phone, MapPin } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data
  const user = {
    name: "Ahmad Ridho",
    email: "ahmad.ridho@email.com",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
    joinDate: "15 Januari 2024",
    bio: "Pelajar Islam yang antusias dalam mendalami ilmu agama dan berbagi pengetahuan dengan komunitas.",
    avatar: "/profile-avatar.png",
  }

  const stats = [
    {
      icon: BookOpen,
      label: "Kelas Diikuti",
      value: "4",
    },
    {
      icon: Award,
      label: "Sertifikat",
      value: "2",
    },
    {
      icon: Heart,
      label: "Total Donasi",
      value: "Rp 500K",
    },
  ]

  const enrolledClasses = [
    {
      id: 1,
      name: "Tafsir Al-Quran",
      instructor: "Ustadz Ahmad Hidayat",
      progress: 65,
      status: "Sedang Belajar",
    },
    {
      id: 2,
      name: "Hadits Shahih",
      instructor: "Ustadzah Nur Azizah",
      progress: 100,
      status: "Selesai",
    },
    {
      id: 3,
      name: "Fiqih Ibadah",
      instructor: "Ustadz Muhammad Ridho",
      progress: 45,
      status: "Sedang Belajar",
    },
    {
      id: 4,
      name: "Akhlak & Tasawuf",
      instructor: "Ustadz Hasan Basri",
      progress: 80,
      status: "Sedang Belajar",
    },
  ]

  const achievements = [
    {
      id: 1,
      name: "Peserta Setia",
      description: "Mengikuti 4 kelas kajian",
      icon: "🎓",
    },
    {
      id: 2,
      name: "Dermawan",
      description: "Telah berdonasi 5 kali",
      icon: "❤️",
    },
    {
      id: 3,
      name: "Aktif Komunitas",
      description: "Posting 20+ di komunitas",
      icon: "💬",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Profile Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border-border animate-fade-in-down hover-glow transition-all duration-300 ease-out">
          <CardContent className="pt-8">
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                  className="w-24 h-24 rounded-full border-4 border-primary/20 object-cover"
                />
              </div>

              {/* User Info */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">{user.name}</h1>
                    <p className="text-muted-foreground">Bergabung sejak {user.joinDate}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)} className="gap-2">
                    <Edit2 className="w-4 h-4" />
                    {isEditing ? "Batal" : "Edit"}
                  </Button>
                </div>

                <p className="text-muted-foreground">{user.bio}</p>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    {user.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary" />
                    {user.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    {user.location}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={stat.label}
                className={`border-border hover-glow transition-all duration-300 ease-out animate-fade-in-up animate-stagger-${index + 1}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Enrolled Classes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 animate-fade-in-up animate-stagger-1">
          Kelas yang Diikuti
        </h2>
        <div className="space-y-4">
          {enrolledClasses.map((kelas, index) => (
            <Card
              key={kelas.id}
              className={`border-border hover:shadow-lg transition-all duration-300 ease-out hover-glow animate-fade-in-up animate-stagger-${Math.min(index + 1, 5)}`}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{kelas.name}</h3>
                    <p className="text-sm text-muted-foreground">{kelas.instructor}</p>
                  </div>

                  <div className="flex-1 sm:flex-none sm:w-48">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-foreground">{kelas.progress}%</span>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          kelas.status === "Selesai" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {kelas.status}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${kelas.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 animate-fade-in-up animate-stagger-2">Pencapaian</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.id}
              className={`border-border text-center hover-glow transition-all duration-300 ease-out animate-fade-in-up animate-stagger-${index + 1}`}
            >
              <CardContent className="pt-8">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="font-semibold text-foreground">{achievement.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Action Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-stagger-3">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Settings className="w-4 h-4" />
            Pengaturan Akun
          </Button>
          <Button variant="outline" className="gap-2 text-destructive hover:text-destructive bg-transparent">
            <LogOut className="w-4 h-4" />
            Keluar
          </Button>
        </div>
      </section>
    </div>
  )
}
