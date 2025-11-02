"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { User, Mail, Phone, MapPin, GraduationCap, Edit } from "lucide-react"

export default function MentorProfilePage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Profile Mentor
        </h1>
        <p className="text-muted-foreground mt-1">Kelola informasi profile Anda</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Informasi Profile</CardTitle>
                <Button variant="ghost" size="icon">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
              <CardDescription>Data diri dan kontak Anda</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  <User className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Ust. Ahmad Fauzi</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <GraduationCap className="w-4 h-4" />
                    Mentor Kajian
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Email:</span>
                  <span>ahmad.fauzi@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Telepon:</span>
                  <span>+62 812 3456 7890</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Lokasi:</span>
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Edit Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
              <CardDescription>Update informasi profile Anda</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input id="name" defaultValue="Ust. Ahmad Fauzi" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="ahmad.fauzi@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input id="phone" defaultValue="+62 812 3456 7890" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Lokasi</Label>
                <Input id="location" defaultValue="Jakarta, Indonesia" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  rows={4}
                  defaultValue="Mentor kajian dengan pengalaman lebih dari 10 tahun dalam mengajar ilmu agama."
                />
              </div>
              <Button className="w-full shadow-md hover:shadow-lg transition-shadow">
                Simpan Perubahan
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Statistik</CardTitle>
            <CardDescription>Ringkasan aktivitas Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-primary/10">
                <div className="text-3xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground mt-1">Total Kajian</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-blue-100/50">
                <div className="text-3xl font-bold text-blue-600">8</div>
                <div className="text-sm text-muted-foreground mt-1">Kelas Aktif</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-green-100/50">
                <div className="text-3xl font-bold text-green-600">285</div>
                <div className="text-sm text-muted-foreground mt-1">Total Peserta</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

