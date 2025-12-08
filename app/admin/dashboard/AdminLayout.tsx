"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  Info,
  Users,
  Bell,
  Settings,
  Building2,
  GraduationCap,
  Award,
  FileText,
  Brain,
} from "lucide-react";

import Sidebar from "../../components/dashboard-admin/Sidebar";
import Topbar from "../../components/dashboard-admin/Navbar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("overview");

  // === MENU ITEMS ===
  const menuItems = [
    {
      id: "overview",
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
    },
    {
      id: "jadwal",
      label: "Kelola Jadwal PTN",
      icon: Calendar,
      href: "/admin/dashboard/jadwal",
    },
    {
      id: "kampus",
      label: "Kelola Kampus",
      icon: Building2,
      href: "/admin/dashboard/kampus",
    },
    {
      id: "jurusan",
      label: "Kelola Jurusan",
      icon: GraduationCap,
      href: "/admin/dashboard/jurusan",
    },
    {
      id: "beasiswa",
      label: "Kelola Beasiswa",
      icon: Award,
      href: "/admin/dashboard/beasiswa",
    },
    {
      id: "tryout",
      label: "Kelola Try Out",
      icon: FileText,
      href: "/admin/dashboard/tryout",
    },
    {
      id: "tespotensi",
      label: "Kelola Test Potensi",
      icon: Brain,
      href: "/admin/dashboard/tespotensi",
    },
    // {
    //   id: "info",
    //   label: "Kelola Informasi",
    //   icon: Info,
    //   href: "/admin/dashboard/info",
    // },
    {
      id: "siswa",
      label: "Data Siswa",
      icon: Users,
      href: "/admin/dashboard/data-siswa",
    },
    {
      id: "notifikasi",
      label: "Notifikasi",
      icon: Bell,
      href: "/admin/dashboard/notifikasi",
    },
    {
      id: "settings",
      label: "Pengaturan",
      icon: Settings,
      href: "/admin/dashboard/settings",
    },
  ];

  // === HANDLER ===
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleNavigateToHome = () => {
    window.location.href = "/admin/dashboard";
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        menuItems={menuItems}
        onNavigateToHome={handleNavigateToHome}
        onLogout={handleLogout}
      />

      {/* CONTENT */}
      <div className="flex-1 flex flex-col">
        <Topbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
