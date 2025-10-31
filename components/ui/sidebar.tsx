"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function Sidebar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "h-full w-64 shrink-0 border-r bg-background text-foreground",
        className
      )}
      {...props}
    />
  )
}

export function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("h-16 px-4 flex items-center", className)} {...props} />
  )
}

export function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-2 py-2", className)} {...props} />
}

export function SidebarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-2", className)} {...props} />
}

export function SidebarGroupLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-2 text-xs font-medium text-muted-foreground", className)} {...props} />
  )
}

export function SidebarGroupContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-1", className)} {...props} />
}

export function SidebarMenu({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("grid gap-1", className)} {...props} />
}

export function SidebarMenuItem({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li className={cn("list-none", className)} {...props} />
}

export function SidebarMenuButton({ className, isActive, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { isActive?: boolean }) {
  return (
    <button
      className={cn(
        "w-full flex items-center rounded-md px-3 py-2 text-sm",
        isActive ? "bg-secondary text-secondary-foreground" : "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}


