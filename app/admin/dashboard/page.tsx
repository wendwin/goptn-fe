"use client";

import { useState } from "react";
import {
  Users,
  Calendar,
  Bell,
  Info,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

export default function OverviewPage() {
  const [activeQuickAction, setActiveQuickAction] = useState<string | null>(null);

  // Mock data charts
  const trendPendaftaranData = [
    { bulan: "Jul", siswa: 150 },
    { bulan: "Agu", siswa: 320 },
    { bulan: "Sep", siswa: 580 },
    { bulan: "Okt", siswa: 890 },
    { bulan: "Nov", siswa: 1420 },
    { bulan: "Des", siswa: 1847 },
  ];

  const ptnFavoritData = [
    { name: "UI", jumlah: 450 },
    { name: "ITB", jumlah: 380 },
    { name: "UGM", jumlah: 420 },
    { name: "IPB", jumlah: 280 },
    { name: "ITS", jumlah: 310 },
  ];

  const jurusanDistribusiData = [
    { name: "Teknik Informatika", value: 320, color: "#3B82F6" },
    { name: "Kedokteran", value: 280, color: "#8B5CF6" },
    { name: "Manajemen", value: 250, color: "#EC4899" },
    { name: "Akuntansi", value: 200, color: "#10B981" },
    { name: "Hukum", value: 180, color: "#F59E0B" },
    { name: "Lainnya", value: 370, color: "#6B7280" },
  ];

  const jalurMinatData = [
    { jalur: "SNBP", jumlah: 720 },
    { jalur: "SNBT", jumlah: 850 },
    { jalur: "Mandiri", jumlah: 277 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="mb-2 text-2xl font-bold">Admin Dashboard</h2>
        <p className="text-gray-600">Kelola semua konten yang ditampilkan di halaman utama Go PTN</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Siswa</p>
              <p className="font-bold text-2xl">1,847</p>
              <p className="text-xs text-green-600 mt-1">+12% bulan ini</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Jadwal Aktif</p>
              <p className="font-bold text-2xl">3</p>
              <p className="text-xs text-gray-500 mt-1">SNBP, SNBT, Mandiri</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Notifikasi Terkirim</p>
              <p className="font-bold text-2xl">3,241</p>
              <p className="text-xs text-green-600 mt-1">+8% minggu ini</p>
            </div>
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
              <Bell className="w-6 h-6 text-pink-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Informasi Aktif</p>
              <p className="font-bold text-2xl">12</p>
              <p className="text-xs text-gray-500 mt-1">Artikel & Update</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Info className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setActiveQuickAction("jadwal")}
            className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
          >
            <Calendar className="w-8 h-8 text-blue-600 mb-2" />
            <p className="font-medium">Tambah Jadwal Baru</p>
            <p className="text-sm text-gray-600">Tambah jadwal pendaftaran PTN</p>
          </button>

          <button
            onClick={() => setActiveQuickAction("info")}
            className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all text-left"
          >
            <Info className="w-8 h-8 text-purple-600 mb-2" />
            <p className="font-medium">Update Informasi</p>
            <p className="text-sm text-gray-600">Edit konten di beranda</p>
          </button>

          <button
            onClick={() => setActiveQuickAction("notifikasi")}
            className="p-4 border-2 border-gray-200 rounded-lg hover:border-pink-500 hover:bg-pink-50 transition-all text-left"
          >
            <Bell className="w-8 h-8 text-pink-600 mb-2" />
            <p className="font-medium">Kirim Notifikasi</p>
            <p className="text-sm text-gray-600">Broadcast ke semua siswa</p>
          </button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold mb-4">Trend Pendaftaran</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendPendaftaranData}>
              <XAxis dataKey="bulan" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="siswa" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold mb-4">PTN Favorit</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ptnFavoritData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="jumlah"
              >
                {ptnFavoritData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index < 3 ? "#8884d8" : "#82ca9d"} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold mb-4">Distribusi Jurusan</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={jurusanDistribusiData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {jurusanDistribusiData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold mb-4">Jalur Minat</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={jalurMinatData}>
              <XAxis dataKey="jalur" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="jumlah" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
