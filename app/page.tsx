import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Heart, ArrowRight, Sparkles } from "lucide-react"

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Kelas Kajian",
      description: "Ikuti kelas-kelas kajian Islam dari ustadz berpengalaman",
      href: "/kelas",
    },
    {
      icon: Users,
      title: "Komunitas Kajian",
      description: "Bergabung dengan komunitas pelajar Islam yang solid",
      href: "/kajian",
    },
    {
      icon: Heart,
      title: "Donasi",
      description: "Dukung pengembangan platform pembelajaran kami",
      href: "/donasi",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6">
          <div className="inline-block animate-fade-in-down">
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 w-fit mx-auto">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Selamat datang di platform pembelajaran</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in-up animate-stagger-1">
            Belajar Kajian Islam
            <span className="block text-primary">Kapan Saja, Di Mana Saja</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-stagger-2">
            Platform pembelajaran kajian Islam online dengan materi berkualitas dari ustadz berpengalaman. Tingkatkan
            pemahaman agama Anda bersama kami.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-stagger-3">
            <Link href="/kelas">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-lift">
                Mulai Belajar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/kajian">
              <Button size="lg" variant="outline" className="hover-lift bg-transparent">
                Jelajahi Kajian
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Link key={feature.href} href={feature.href}>
                <Card
                  className={`h-full hover:shadow-lg transition-all duration-300 ease-out cursor-pointer border-border hover-glow animate-fade-in-up animate-stagger-${index + 1}`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 ease-out">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 rounded-2xl p-8 sm:p-12 text-center space-y-6 animate-fade-in-up hover-glow transition-all duration-300 ease-out">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Siap Memulai Perjalanan Belajar?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Daftar sekarang dan dapatkan akses ke semua kelas kajian kami
          </p>
          <Link href="/kelas">
            <Button size="lg" className="bg-primary hover:bg-primary/90 hover-lift">
              Daftar Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
