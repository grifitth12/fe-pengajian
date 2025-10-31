import type { ReactNode } from "react"
import AdminSidebar from "@/app/components/admin-sidebar"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr]">
      <div className="hidden md:block">
        <AdminSidebar />
      </div>
      <div className="md:hidden border-b border-border">
        <AdminSidebar />
      </div>
      <main className="p-4 md:p-6 lg:p-8 bg-muted/20">{children}</main>
    </div>
  )
}


