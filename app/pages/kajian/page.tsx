import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MessageCircle, Users, Calendar, ArrowRight } from "lucide-react"

export default function KajianPage() {
  const communities = [
    {
      id: 1,
      name: "Komunitas Tafsir Al-Quran",
      description: "Diskusi mendalam tentang tafsir Al-Quran dan penerapannya dalam kehidupan modern.",
      members: 1250,
      posts: 342,
      lastActive: "2 jam yang lalu",
      category: "Tafsir",
    },
    {
      id: 2,
      name: "Kelompok Belajar Hadits",
      description: "Berbagi dan mempelajari hadits-hadits shahih dengan metode diskusi interaktif.",
      members: 856,
      posts: 218,
      lastActive: "30 menit yang lalu",
      category: "Hadits",
    },
    {
      id: 3,
      name: "Forum Fiqih Kontemporer",
      description: "Membahas masalah-masalah fiqih yang relevan dengan kehidupan sehari-hari.",
      members: 1089,
      posts: 456,
      lastActive: "1 jam yang lalu",
      category: "Fiqih",
    },
    {
      id: 4,
      name: "Komunitas Akhlak & Tasawuf",
      description: "Berbagi pengalaman spiritual dan tips mengembangkan akhlak mulia.",
      members: 723,
      posts: 189,
      lastActive: "4 jam yang lalu",
      category: "Akhlak",
    },
    {
      id: 5,
      name: "Diskusi Sejarah Islam",
      description: "Menggali lebih dalam tentang sejarah Islam dan tokoh-tokoh penting dalam Islam.",
      members: 645,
      posts: 267,
      lastActive: "5 jam yang lalu",
      category: "Sejarah",
    },
    {
      id: 6,
      name: "Kelompok Aqidah Islamiyah",
      description: "Memperkuat pemahaman aqidah Islam yang benar dan menjawab pertanyaan-pertanyaan.",
      members: 934,
      posts: 312,
      lastActive: "3 jam yang lalu",
      category: "Aqidah",
    },
    {
      id: 7,
      name: "Forum Tanya Jawab Umum",
      description: "Tempat bertanya tentang berbagai topik Islam dan mendapatkan jawaban dari ahli.",
      members: 2156,
      posts: 1203,
      lastActive: "15 menit yang lalu",
      category: "Umum",
    },
    {
      id: 8,
      name: "Komunitas Ibu-Ibu Muslimah",
      description: "Diskusi khusus untuk ibu-ibu tentang pendidikan anak dan kehidupan keluarga Islami.",
      members: 1567,
      posts: 534,
      lastActive: "1 jam yang lalu",
      category: "Keluarga",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Tafsir: "bg-blue-100 text-blue-800",
      Hadits: "bg-green-100 text-green-800",
      Fiqih: "bg-purple-100 text-purple-800",
      Akhlak: "bg-pink-100 text-pink-800",
      Sejarah: "bg-amber-100 text-amber-800",
      Aqidah: "bg-indigo-100 text-indigo-800",
      Umum: "bg-gray-100 text-gray-800",
      Keluarga: "bg-rose-100 text-rose-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground animate-fade-in-down">Komunitas Kajian</h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up animate-stagger-1">
            Bergabunglah dengan komunitas pelajar Islam kami. Diskusikan topik-topik menarik, berbagi ilmu, dan
            berkembang bersama.
          </p>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {communities.map((community, index) => (
            <Card
              key={community.id}
              className={`h-full flex flex-col hover:shadow-lg transition-all duration-300 ease-out border-border hover-glow animate-fade-in-up animate-stagger-${Math.min(index + 1, 5)}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{community.name}</CardTitle>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getCategoryColor(community.category)}`}
                  >
                    {community.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">{community.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-border">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-sm font-semibold text-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      {community.members}
                    </div>
                    <p className="text-xs text-muted-foreground">Anggota</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-sm font-semibold text-foreground">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      {community.posts}
                    </div>
                    <p className="text-xs text-muted-foreground">Postingan</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-sm font-semibold text-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">{community.lastActive}</p>
                  </div>
                </div>

                {/* Join Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">
                  Bergabung
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
