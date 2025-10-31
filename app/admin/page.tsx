import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Ringkasan cepat aktivitas platform.</p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Kajian</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 minggu ini</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Kelas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+1 minggu ini</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Donasi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">Rp 7.500.000</div>
            <p className="text-xs text-muted-foreground">+Rp 850.000 minggu ini</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}