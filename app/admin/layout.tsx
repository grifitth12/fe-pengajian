import type { ReactNode } from "react"
import AdminSidebar from "@/app/components/admin-sidebar"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr] bg-background">
      <div className="hidden md:block sticky top-0 h-screen overflow-y-auto">
        <AdminSidebar />
      </div>
      <div className="md:hidden border-b border-border sticky top-0 bg-background z-10">
        <AdminSidebar />
      </div>
      <main className="p-4 md:p-6 lg:p-8 bg-muted/20 min-h-screen">{children}</main>
    </div>
  )
}


