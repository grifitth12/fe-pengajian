"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const data = [
  { id: "KJ-001", tema: "Tafsir Al-Fatihah", tanggal: "2025-11-10", peserta: 45, status: "Terjadwal" },
  { id: "KJ-002", tema: "Akhlaq Muslim", tanggal: "2025-11-15", peserta: 32, status: "Terjadwal" },
  { id: "KJ-003", tema: "Fiqh Shalat", tanggal: "2025-11-20", peserta: 0, status: "Draft" },
]

export default function MentorKajianPage() {
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
            Manage Kajian
          </h1>
          <p className="text-muted-foreground mt-1">Kelola kajian yang Anda ajarkan</p>
        </div>
        <Button className="shadow-md hover:shadow-lg transition-shadow">
          + Tambah Kajian
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
              <TableHead>Tema Kajian</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Peserta</TableHead>
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
                <TableCell className="font-medium">{row.tema}</TableCell>
                <TableCell>{row.tanggal}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {row.peserta} peserta
                  </span>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    row.status === "Terjadwal" 
                      ? "bg-green-100 text-green-800" 
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

