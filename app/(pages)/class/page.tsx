import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Clock, Users, ArrowRight } from "lucide-react"

export default function KelasPage() {
  const classes = [
    {
      id: 1,
      title: "Tafsir Al-Quran",
      instructor: "Ustadz Ahmad Hidayat",
      schedule: "Senin & Rabu, 19:00 - 20:30",
      description: "Pelajari tafsir Al-Quran dengan metode yang mudah dipahami dan relevan dengan kehidupan modern.",
      level: "Pemula",
      students: 245,
    },
    {
      id: 2,
      title: "Hadits Shahih",
      instructor: "Ustadzah Nur Azizah",
      schedule: "Selasa & Kamis, 18:00 - 19:30",
      description: "Memahami hadits-hadits shahih dan penerapannya dalam kehidupan sehari-hari.",
      level: "Menengah",
      students: 189,
    },
    {
      id: 3,
      title: "Fiqih Ibadah",
      instructor: "Ustadz Muhammad Ridho",
      schedule: "Jumat, 15:00 - 16:30",
      description: "Mempelajari hukum-hukum ibadah dari sumber-sumber terpercaya dengan penjelasan yang komprehensif.",
      level: "Pemula",
      students: 312,
    },
    {
      id: 4,
      title: "Akhlak & Tasawuf",
      instructor: "Ustadz Hasan Basri",
      schedule: "Sabtu, 17:00 - 18:30",
      description: "Mengembangkan akhlak mulia dan memahami jalan mendekatkan diri kepada Allah SWT.",
      level: "Lanjutan",
      students: 156,
    },
    {
      id: 5,
      title: "Sejarah Islam",
      instructor: "Ustadz Khalid Mahmud",
      schedule: "Minggu, 16:00 - 17:30",
      description:
        "Mengenal perjalanan sejarah Islam dari masa Nabi hingga era modern dengan perspektif yang seimbang.",
      level: "Menengah",
      students: 198,
    },
    {
      id: 6,
      title: "Aqidah Islamiyah",
      instructor: "Ustadz Salim Abdullah",
      schedule: "Senin & Rabu, 20:00 - 21:30",
      description: "Memahami fondasi aqidah Islam yang benar berdasarkan Al-Quran dan Sunnah.",
      level: "Pemula",
      students: 267,
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Pemula":
        return "bg-green-100 text-green-800"
      case "Menengah":
        return "bg-blue-100 text-blue-800"
      case "Lanjutan":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground animate-fade-in-down">Kelas Kajian</h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up animate-stagger-1">
            Pilih kelas kajian yang sesuai dengan minat dan tingkat pemahaman Anda. Semua kelas dipandu oleh ustadz dan
            ustadzah berpengalaman.
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((kelas, index) => (
            <Card
              key={kelas.id}
              className={`h-full flex flex-col hover:shadow-lg transition-all duration-300 ease-out border-border hover-glow animate-fade-in-up animate-stagger-${Math.min(index + 1, 5)}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{kelas.title}</CardTitle>
                    <CardDescription className="text-sm mt-1">{kelas.instructor}</CardDescription>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getLevelColor(kelas.level)}`}
                  >
                    {kelas.level}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">{kelas.description}</p>

                {/* Schedule */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{kelas.schedule}</span>
                </div>

                {/* Students Count */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{kelas.students} peserta</span>
                </div>

                {/* Enroll Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">
                  Daftar Kelas
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
