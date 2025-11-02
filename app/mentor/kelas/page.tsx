"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const data = [
  { id: "KL-101", nama: "Kelas Tahsin Dasar", peserta: 35, tanggalMulai: "2025-01-15", status: "Berjalan" },
  { id: "KL-102", nama: "Kelas Bahasa Arab", peserta: 22, tanggalMulai: "2025-02-01", status: "Pendaftaran" },
  { id: "KL-103", nama: "Kelas Hadits", peserta: 18, tanggalMulai: "2024-12-01", status: "Selesai" },
]

export default function MentorKelasPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Manage Kelas
          </h1>
          <p className="text-muted-foreground mt-1">Kelola kelas yang Anda ajar</p>
        </div>
        <Button className="shadow-md hover:shadow-lg transition-shadow">
          + Tambah Kelas
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-lg border bg-card shadow-sm"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nama Kelas</TableHead>
              <TableHead>Peserta</TableHead>
              <TableHead>Tanggal Mulai</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow 
                key={row.id} 
                className="border-b transition-colors hover:bg-muted/50 animate-in fade-in slide-in-from-left-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TableCell className="font-medium">{row.id}</TableCell>
                <TableCell className="font-medium">{row.nama}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {row.peserta} peserta
                  </span>
                </TableCell>
                <TableCell>{row.tanggalMulai}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    row.status === "Berjalan" 
                      ? "bg-green-100 text-green-800"
                      : row.status === "Pendaftaran"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="ghost" size="sm" className="hover:bg-accent">Edit</Button>
                  <Button variant="destructive" size="sm">Hapus</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  )
}

