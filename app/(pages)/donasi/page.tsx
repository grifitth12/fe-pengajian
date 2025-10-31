"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Heart, Target, Users, TrendingUp } from "lucide-react"

export default function DonasiPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")

  const donationAmounts = [10000, 25000, 50000, 100000, 250000, 500000]

  const programs = [
    {
      id: 1,
      name: "Beasiswa Santri",
      description: "Membantu santri berprestasi dari keluarga kurang mampu untuk melanjutkan pendidikan Islam.",
      target: 50000000,
      collected: 32500000,
      beneficiaries: 45,
      icon: Users,
    },
    {
      id: 2,
      name: "Pengembangan Platform",
      description: "Meningkatkan kualitas platform pembelajaran dengan fitur-fitur baru dan server yang lebih baik.",
      target: 30000000,
      collected: 18750000,
      beneficiaries: 5000,
      icon: TrendingUp,
    },
    {
      id: 3,
      name: "Pembangunan Masjid",
      description: "Membangun masjid di daerah terpencil untuk memfasilitasi ibadah dan pembelajaran Islam.",
      target: 100000000,
      collected: 67500000,
      beneficiaries: 2000,
      icon: Target,
    },
  ]

  const getProgressPercentage = (collected: number, target: number) => {
    Math.round((collected / target) * 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground animate-fade-in-down">Program Donasi</h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up animate-stagger-1">
            Dukung pengembangan platform pembelajaran Islam kami dan berbagai program sosial keagamaan. Setiap donasi
            Anda sangat berarti.
          </p>
        </div>
      </section>

      {/* Donation Programs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-foreground mb-8 animate-fade-in-up animate-stagger-2">
          Program-Program Kami
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon
            const progress = Math.round((program.collected / program.target) * 100)
            return (
              <Card
                key={program.id}
                className={`h-full flex flex-col border-border hover:shadow-lg transition-all duration-300 ease-out hover-glow animate-fade-in-up animate-stagger-${Math.min(index + 1, 5)}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{program.name}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Terkumpul</span>
                      <span className="font-semibold text-foreground">{progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Target</p>
                      <p className="font-semibold text-foreground">Rp {(program.target / 1000000).toFixed(0)}M</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Terkumpul</p>
                      <p className="font-semibold text-foreground">Rp {(program.collected / 1000000).toFixed(1)}M</p>
                    </div>
                  </div>

                  {/* Beneficiaries */}
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{program.beneficiaries}</span> orang telah terbantu
                  </div>

                  {/* Donate Button */}
                  <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">
                    <Heart className="w-4 h-4 mr-2" />
                    Donasi Sekarang
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Quick Donation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Card className="border-border animate-fade-in-up animate-stagger-3 hover-glow transition-all duration-300 ease-out">
          <CardHeader>
            <CardTitle>Donasi Cepat</CardTitle>
            <CardDescription>Pilih nominal donasi atau masukkan jumlah custom</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Amount Selection */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount)
                    setCustomAmount("")
                  }}
                  className={`p-3 rounded-lg border-2 transition-all font-semibold ${
                    selectedAmount === amount
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  Rp {(amount / 1000).toFixed(0)}K
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Jumlah Custom</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Masukkan jumlah donasi"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Donation Info */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Jumlah Donasi:</span> Rp{" "}
                {selectedAmount ? (selectedAmount / 1000).toFixed(0) : customAmount || "0"}
                {selectedAmount ? "K" : ""}
              </p>
              <p className="text-xs text-muted-foreground">
                Donasi Anda akan membantu pengembangan platform dan program-program sosial keagamaan kami.
              </p>
            </div>

            {/* Donate Button */}
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!selectedAmount && !customAmount}
            >
              <Heart className="w-4 h-4 mr-2" />
              Lanjutkan Donasi
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
