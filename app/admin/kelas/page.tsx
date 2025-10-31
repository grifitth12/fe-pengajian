import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const data = [
  { id: "KL-101", nama: "Kelas Tahsin Dasar", pengajar: "Ust. Sulaiman", peserta: 35, status: "Berjalan" },
  { id: "KL-102", nama: "Kelas Bahasa Arab", pengajar: "Ust. Hafidz", peserta: 22, status: "Pendaftaran" },
  { id: "KL-103", nama: "Kelas Hadits", pengajar: "Ust. Zaki", peserta: 18, status: "Selesai" },
]

export default function ManageKelasPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Manage Kelas</h1>
          <p className="text-sm text-muted-foreground">Kelola daftar kelas.</p>
        </div>
        <Button>Tambah Kelas</Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nama Kelas</TableHead>
              <TableHead>Pengajar</TableHead>
              <TableHead>Peserta</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.id}</TableCell>
                <TableCell>{row.nama}</TableCell>
                <TableCell>{row.pengajar}</TableCell>
                <TableCell>{row.peserta}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="ghost" size="sm">Edit</Button>
                  <Button variant="destructive" size="sm">Hapus</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}


