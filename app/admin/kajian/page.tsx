import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const data = [
  { id: "KJ-001", tema: "Tafsir Al-Fatihah", ustadz: "Ust. Ahmad", tanggal: "2025-11-10", status: "Terjadwal" },
  { id: "KJ-002", tema: "Akhlaq Muslim", ustadz: "Ust. Budi", tanggal: "2025-11-15", status: "Terjadwal" },
  { id: "KJ-003", tema: "Fiqh Shalat", ustadz: "Ust. Rahman", tanggal: "2025-11-20", status: "Draft" },
]

export default function ManageKajianPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Manage Kajian</h1>
          <p className="text-sm text-muted-foreground">Kelola daftar kajian.</p>
        </div>
        <Button>Tambah Kajian</Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Tema</TableHead>
              <TableHead>Ustadz</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.id}</TableCell>
                <TableCell>{row.tema}</TableCell>
                <TableCell>{row.ustadz}</TableCell>
                <TableCell>{row.tanggal}</TableCell>
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


