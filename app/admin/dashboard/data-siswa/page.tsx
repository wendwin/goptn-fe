"use client";

import { useState } from "react";
import {
  TrendingUp,
  Download,
  BarChart3,
  LineChart as LineChartIcon,
  Lightbulb,
  Target,
  Zap,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Page() {

   // Data untuk charts
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
  
    // Data pemetaan jurusan per wilayah
    const jurusanPerWilayahData = [
      {
        wilayah: "Jakarta",
        "Teknik Informatika": 85,
        Kedokteran: 72,
        Manajemen: 65,
        Hukum: 48,
        Akuntansi: 52,
      },
      {
        wilayah: "Bandung",
        "Teknik Informatika": 78,
        Kedokteran: 55,
        Manajemen: 45,
        Hukum: 38,
        Akuntansi: 42,
      },
      {
        wilayah: "Surabaya",
        "Teknik Informatika": 68,
        Kedokteran: 58,
        Manajemen: 52,
        Hukum: 35,
        Akuntansi: 38,
      },
      {
        wilayah: "Yogyakarta",
        "Teknik Informatika": 52,
        Kedokteran: 48,
        Manajemen: 42,
        Hukum: 30,
        Akuntansi: 28,
      },
      {
        wilayah: "Semarang",
        "Teknik Informatika": 37,
        Kedokteran: 32,
        Manajemen: 28,
        Hukum: 22,
        Akuntansi: 25,
      },
    ];
  
    const distribusiWilayahData = [
      { name: "Jakarta", value: 425, color: "#3B82F6" },
      { name: "Bandung", value: 318, color: "#8B5CF6" },
      { name: "Surabaya", value: 285, color: "#EC4899" },
      { name: "Yogyakarta", value: 242, color: "#10B981" },
      { name: "Semarang", value: 178, color: "#F59E0B" },
      { name: "Lainnya", value: 399, color: "#6B7280" },
    ];
  
    // Data untuk Business Intelligence Analysis
    const [activeBITab, setActiveBITab] = useState<
      "deskriptif" | "prediktif" | "preskriptif"
    >("deskriptif");
  
    // Data Analisis Deskriptif
    const trendPendaftaranBulanan = [
      { bulan: "Jul 25", siswa: 150, target: 120 },
      { bulan: "Agu 25", siswa: 320, target: 280 },
      { bulan: "Sep 25", siswa: 580, target: 520 },
      { bulan: "Okt 25", siswa: 890, target: 780 },
      { bulan: "Nov 25", siswa: 1420, target: 1200 },
      { bulan: "Des 25", siswa: 1847, target: 1600 },
    ];
  
    const distribusiNilaiRapor = [
      { range: "95-100", jumlah: 142 },
      { range: "90-94", jumlah: 385 },
      { range: "85-89", jumlah: 628 },
      { range: "80-84", jumlah: 492 },
      { range: "75-79", jumlah: 200 },
    ];
  
    // Data Analisis Prediktif
    const prediksiPendaftaran = [
      { bulan: "Des 25", actual: 1847, prediksi: 1847 },
      { bulan: "Jan 26", actual: null, prediksi: 2350 },
      { bulan: "Feb 26", actual: null, prediksi: 2980 },
      { bulan: "Mar 26", actual: null, prediksi: 3620 },
      { bulan: "Apr 26", actual: null, prediksi: 4180 },
      { bulan: "Mei 26", actual: null, prediksi: 4520 },
    ];
  
    const prediksiPTNPopuler = [
      { ptn: "UI", skor: 95, trend: "+12%" },
      { ptn: "ITB", skor: 88, trend: "+8%" },
      { ptn: "UGM", skor: 92, trend: "+15%" },
      { ptn: "ITS", skor: 78, trend: "+5%" },
      { ptn: "IPB", skor: 72, trend: "+3%" },
    ];
  
    const risikoDropout = [
      { kategori: "Nilai Rendah", risiko: 28, jumlah: 156 },
      { kategori: "Data Tidak Lengkap", risiko: 45, jumlah: 327 },
      { kategori: "Tidak Aktif 30 Hari", risiko: 62, jumlah: 89 },
    ];
  

    
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2">Data Siswa Terdaftar</h2>
        <p className="text-gray-600">
          Kelola data siswa yang telah mendaftar di platform
        </p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-gray-600 mb-1">Total Siswa</p>
          <p className="font-bold text-xl">1,847</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-gray-600 mb-1">Data Lengkap</p>
          <p className="font-bold text-xl text-green-600">1,520</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-gray-600 mb-1">PTN Terfavorit</p>
          <p className="font-bold text-xl">UI</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-gray-600 mb-1">Jurusan Terfavorit</p>
          <p className="font-bold text-xl">Teknik Informatika</p>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Cari nama siswa..."
            className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
          />
          <select className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none">
            <option>Semua Kota</option>
            <option>Jakarta</option>
            <option>Bandung</option>
            <option>Surabaya</option>
            <option>Yogyakarta</option>
          </select>
          <select className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none">
            <option>Semua PTN</option>
            <option>UI</option>
            <option>ITB</option>
            <option>UGM</option>
            <option>ITS</option>
            <option>IPB</option>
          </select>
          <select className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none">
            <option>Semua Jurusan</option>
            <option>Teknik Informatika</option>
            <option>Kedokteran</option>
            <option>Manajemen</option>
            <option>Akuntansi</option>
            <option>Hukum</option>
          </select>
        </div>
      </div>

      {/* Analytics Charts for Student Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold mb-4">Top 10 PTN Pilihan Siswa</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ptnFavoritData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="jumlah" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold mb-4">Top Jurusan yang Diminati</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={jurusanDistribusiData.slice(0, 5)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pemetaan Jurusan & Wilayah - NEW SECTION */}
      <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 p-6">
        <div className="mb-6">
          <h3 className="font-bold flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Analisis Pemetaan Jurusan & Wilayah
          </h3>
          <p className="text-sm text-gray-600">
            Distribusi minat jurusan berdasarkan asal wilayah/kota siswa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart: Pemetaan Jurusan per Wilayah */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="font-bold mb-4">Pemetaan Jurusan per Wilayah</h4>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={jurusanPerWilayahData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="wilayah" type="category" width={80} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Teknik Informatika" stackId="a" fill="#3B82F6" />
                <Bar dataKey="Kedokteran" stackId="a" fill="#8B5CF6" />
                <Bar dataKey="Manajemen" stackId="a" fill="#EC4899" />
                <Bar dataKey="Hukum" stackId="a" fill="#10B981" />
                <Bar dataKey="Akuntansi" stackId="a" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Chart: Distribusi Wilayah */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="font-bold mb-4">Distribusi Siswa per Wilayah</h4>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={distribusiWilayahData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {distribusiWilayahData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tabel Detail Pemetaan */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-6">
          <div className="p-4 bg-linear-to-r from-blue-600 to-purple-600">
            <h4 className="font-bold text-white">
              Detail Pemetaan Jurusan Berdasarkan Wilayah
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="text-left py-3 px-4 font-bold">Wilayah</th>
                  <th className="text-center py-3 px-4 font-bold">
                    Teknik Informatika
                  </th>
                  <th className="text-center py-3 px-4 font-bold">
                    Kedokteran
                  </th>
                  <th className="text-center py-3 px-4 font-bold">Manajemen</th>
                  <th className="text-center py-3 px-4 font-bold">Hukum</th>
                  <th className="text-center py-3 px-4 font-bold">Akuntansi</th>
                  <th className="text-center py-3 px-4 font-bold">Total</th>
                  <th className="text-left py-3 px-4 font-bold">Favorit</th>
                </tr>
              </thead>
              <tbody>
                {jurusanPerWilayahData.map((wilayah, idx) => {
                  const total =
                    wilayah["Teknik Informatika"] +
                    wilayah["Kedokteran"] +
                    wilayah["Manajemen"] +
                    wilayah["Hukum"] +
                    wilayah["Akuntansi"];
                  const jurusanArray = [
                    {
                      name: "Teknik Informatika",
                      value: wilayah["Teknik Informatika"],
                    },
                    { name: "Kedokteran", value: wilayah["Kedokteran"] },
                    { name: "Manajemen", value: wilayah["Manajemen"] },
                    { name: "Hukum", value: wilayah["Hukum"] },
                    { name: "Akuntansi", value: wilayah["Akuntansi"] },
                  ];
                  const favorit = jurusanArray.reduce((max, current) =>
                    current.value > max.value ? current : max
                  ).name;

                  return (
                    <tr
                      key={idx}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 font-bold text-blue-600">
                        {wilayah.wilayah}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center justify-center w-12 h-8 bg-blue-100 text-blue-700 rounded font-medium text-sm">
                          {wilayah["Teknik Informatika"]}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center justify-center w-12 h-8 bg-purple-100 text-purple-700 rounded font-medium text-sm">
                          {wilayah["Kedokteran"]}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center justify-center w-12 h-8 bg-pink-100 text-pink-700 rounded font-medium text-sm">
                          {wilayah["Manajemen"]}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center justify-center w-12 h-8 bg-green-100 text-green-700 rounded font-medium text-sm">
                          {wilayah["Hukum"]}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center justify-center w-12 h-8 bg-orange-100 text-orange-700 rounded font-medium text-sm">
                          {wilayah["Akuntansi"]}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="font-bold text-lg text-gray-800">
                          {total}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-3 py-1 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs font-medium">
                          {favorit}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="bg-gray-100 border-t-2 border-gray-300">
                <tr>
                  <td className="py-3 px-4 font-bold">TOTAL</td>
                  <td className="py-3 px-4 text-center font-bold text-blue-600">
                    {jurusanPerWilayahData.reduce(
                      (sum, w) => sum + w["Teknik Informatika"],
                      0
                    )}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-purple-600">
                    {jurusanPerWilayahData.reduce(
                      (sum, w) => sum + w["Kedokteran"],
                      0
                    )}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-pink-600">
                    {jurusanPerWilayahData.reduce(
                      (sum, w) => sum + w["Manajemen"],
                      0
                    )}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-green-600">
                    {jurusanPerWilayahData.reduce(
                      (sum, w) => sum + w["Hukum"],
                      0
                    )}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-orange-600">
                    {jurusanPerWilayahData.reduce(
                      (sum, w) => sum + w["Akuntansi"],
                      0
                    )}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-xl text-gray-900">
                    {jurusanPerWilayahData.reduce(
                      (sum, w) =>
                        sum +
                        w["Teknik Informatika"] +
                        w["Kedokteran"] +
                        w["Manajemen"] +
                        w["Hukum"] +
                        w["Akuntansi"],
                      0
                    )}
                  </td>
                  <td className="py-3 px-4"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-500">
            <p className="text-sm text-gray-600 mb-1">Wilayah Terbanyak</p>
            <p className="font-bold text-xl text-blue-600">Jakarta</p>
            <p className="text-xs text-gray-500 mt-1">425 siswa terdaftar</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-purple-500">
            <p className="text-sm text-gray-600 mb-1">
              Jurusan Paling Diminati
            </p>
            <p className="font-bold text-xl text-purple-600">
              Teknik Informatika
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Unggul di semua wilayah
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-pink-500">
            <p className="text-sm text-gray-600 mb-1">Rata-rata per Wilayah</p>
            <p className="font-bold text-xl text-pink-600">~64 siswa</p>
            <p className="text-xs text-gray-500 mt-1">Per jurusan populer</p>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-6 flex justify-end">
          <button className="px-6 py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
            <Download className="w-5 h-5" />
            Export Analisis Pemetaan (Excel)
          </button>
        </div>
      </div>

      {/* Business Intelligence Analysis - NEW SECTION */}
      <div className="bg-linear-to-r from-indigo-50 to-cyan-50 rounded-xl border-2 border-indigo-200 p-6">
        <div className="mb-6">
          <h3 className="font-bold flex items-center gap-2 mb-2">
            <Zap className="w-6 h-6 text-indigo-600" />
            Business Intelligence Analysis
          </h3>
          <p className="text-sm text-gray-600">
            Analisis data siswa untuk pengambilan keputusan strategis
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 bg-white rounded-lg p-2 shadow-md">
          <button
            onClick={() => setActiveBITab("deskriptif")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
              activeBITab === "deskriptif"
                ? "bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">Deskriptif</span>
          </button>
          <button
            onClick={() => setActiveBITab("prediktif")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
              activeBITab === "prediktif"
                ? "bg-linear-to-r from-purple-600 to-purple-500 text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <LineChartIcon className="w-5 h-5" />
            <span className="font-medium">Prediktif</span>
          </button>
          <button
            onClick={() => setActiveBITab("preskriptif")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
              activeBITab === "preskriptif"
                ? "bg-linear-to-r from-green-600 to-green-500 text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Lightbulb className="w-5 h-5" />
            <span className="font-medium">Preskriptif</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeBITab === "deskriptif" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-600 mb-2 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Analisis Deskriptif - Apa yang Terjadi?
              </h4>
              <p className="text-sm text-gray-600">
                Analisis data historis untuk memahami performa dan pola yang
                telah terjadi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                  <Target className="w-5 h-5 text-blue-500" />
                </div>
                <p className="font-bold text-2xl text-blue-600">82.3%</p>
                <p className="text-xs text-green-600 mt-1">
                  ↑ +5.2% dari bulan lalu
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-purple-500">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">Avg. Nilai Rapor</p>
                  <TrendingUp className="w-5 h-5 text-purple-500" />
                </div>
                <p className="font-bold text-2xl text-purple-600">87.8</p>
                <p className="text-xs text-green-600 mt-1">
                  ↑ +1.2 dari bulan lalu
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-pink-500">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">Retention Rate</p>
                  <CheckCircle className="w-5 h-5 text-pink-500" />
                </div>
                <p className="font-bold text-2xl text-pink-600">91.5%</p>
                <p className="text-xs text-green-600 mt-1">
                  ↑ +3.8% dari bulan lalu
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-orange-500">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">Time to Complete</p>
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                </div>
                <p className="font-bold text-2xl text-orange-600">4.2 hari</p>
                <p className="text-xs text-red-600 mt-1">
                  ↑ +0.5 hari dari target
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="font-bold mb-4">Trend Pendaftaran vs Target</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendPendaftaranBulanan}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bulan" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="siswa"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      name="Aktual"
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#10B981"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Target"
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-xs text-gray-600 mt-2">
                  <CheckCircle className="w-4 h-4 inline text-green-500" />{" "}
                  Target tercapai 115% di bulan Desember
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="font-bold mb-4">Distribusi Nilai Rapor Siswa</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={distribusiNilaiRapor}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="jumlah"
                      fill="#8B5CF6"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-xs text-gray-600 mt-2">
                  <TrendingUp className="w-4 h-4 inline text-blue-500" /> 72%
                  siswa memiliki nilai rapor di atas 85
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="font-bold mb-4">
                Key Findings - Analisis Deskriptif
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="font-medium text-blue-900 mb-1">
                    📈 Pertumbuhan Stabil
                  </p>
                  <p className="text-sm text-gray-700">
                    Pendaftaran tumbuh rata-rata 48% per bulan dengan peak di
                    November-Desember
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <p className="font-medium text-purple-900 mb-1">
                    🎯 Kualitas Tinggi
                  </p>
                  <p className="text-sm text-gray-700">
                    Mayoritas siswa (72%) memiliki nilai rapor di atas 85,
                    menunjukkan target market yang tepat
                  </p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <p className="font-medium text-pink-900 mb-1">
                    💎 Retention Excellent
                  </p>
                  <p className="text-sm text-gray-700">
                    Retention rate 91.5% menunjukkan siswa puas dan aktif
                    menggunakan platform
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <p className="font-medium text-orange-900 mb-1">
                    ⚠️ Area Improvement
                  </p>
                  <p className="text-sm text-gray-700">
                    Waktu penyelesaian profil 4.2 hari, perlu optimasi UX untuk
                    percepat onboarding
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeBITab === "prediktif" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-600 mb-2 flex items-center gap-2">
                <LineChartIcon className="w-5 h-5" />
                Analisis Prediktif - Apa yang Akan Terjadi?
              </h4>
              <p className="text-sm text-gray-600">
                Prediksi dan forecasting berdasarkan pola data historis dan
                trend
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-purple-500">
                <p className="text-sm text-gray-600 mb-2">
                  Prediksi Pendaftar Q1 2026
                </p>
                <p className="font-bold text-3xl text-purple-600">4,520</p>
                <p className="text-xs text-green-600 mt-1">
                  ↑ 145% dari periode sebelumnya
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  <p>• Confidence Level: 87%</p>
                  <p>• Margin of Error: ±8%</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-indigo-500">
                <p className="text-sm text-gray-600 mb-2">
                  Probabilitas Target 5K
                </p>
                <p className="font-bold text-3xl text-indigo-600">78%</p>
                <p className="text-xs text-blue-600 mt-1">
                  Target realistis tercapai
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  <p>• Best Case: 5,250 siswa</p>
                  <p>• Worst Case: 3,890 siswa</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-cyan-500">
                <p className="text-sm text-gray-600 mb-2">Churn Risk Score</p>
                <p className="font-bold text-3xl text-cyan-600">24.5%</p>
                <p className="text-xs text-orange-600 mt-1">
                  572 siswa berisiko dropout
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  <p>• High Risk: 89 siswa</p>
                  <p>• Medium Risk: 327 siswa</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="font-bold mb-4">
                  Forecast Pendaftaran 6 Bulan Ke Depan
                </h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={prediksiPendaftaran}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bulan" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="actual"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      name="Data Aktual"
                    />
                    <Line
                      type="monotone"
                      dataKey="prediksi"
                      stroke="#8B5CF6"
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      name="Prediksi"
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-xs text-gray-600 mt-2">
                  <LineChartIcon className="w-4 h-4 inline text-purple-500" />{" "}
                  Model menggunakan ARIMA dengan akurasi 87%
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="font-bold mb-4">Prediksi PTN Paling Populer</h4>
                <div className="space-y-3">
                  {prediksiPTNPopuler.map((ptn, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-12 text-center">
                        <span
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                            idx === 0
                              ? "bg-yellow-100 text-yellow-700"
                              : idx === 1
                              ? "bg-gray-200 text-gray-700"
                              : idx === 2
                              ? "bg-orange-100 text-orange-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {idx + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{ptn.ptn}</span>
                          <span className="text-sm text-green-600">
                            {ptn.trend}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-linear-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                            style={{ width: `${ptn.skor}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-12 text-right">
                        <span className="text-sm font-bold text-purple-600">
                          {ptn.skor}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-4">
                  <Target className="w-4 h-4 inline text-indigo-500" /> Skor
                  dihitung dari trend historis, sentimen, dan seasonality
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="font-bold mb-4">
                Risk Analysis - Identifikasi Siswa Berisiko Dropout
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {risikoDropout.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-red-300 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-medium">{item.kategori}</p>
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Risk Level</span>
                        <span className="font-bold text-red-600">
                          {item.risiko}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${
                            item.risiko > 50
                              ? "bg-red-500"
                              : item.risiko > 30
                              ? "bg-orange-500"
                              : "bg-yellow-500"
                          }`}
                          style={{ width: `${item.risiko}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="font-bold text-gray-800">
                        {item.jumlah}
                      </span>{" "}
                      siswa teridentifikasi
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-sm text-red-800">
                  <AlertCircle className="w-4 h-4 inline mr-1" />
                  <strong>Action Required:</strong> Total 572 siswa memerlukan
                  follow-up untuk mengurangi risiko dropout
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="font-bold mb-4">
                Key Predictions - Analisis Prediktif
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <p className="font-medium text-purple-900 mb-1">
                    🚀 Growth Momentum
                  </p>
                  <p className="text-sm text-gray-700">
                    Prediksi mencapai 4,520 siswa di Q1 2026 dengan confidence
                    level 87%, driven by word-of-mouth dan campaign
                  </p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                  <p className="font-medium text-indigo-900 mb-1">
                    🎯 Target Achievable
                  </p>
                  <p className="text-sm text-gray-700">
                    78% probabilitas mencapai target 5K siswa jika campaign
                    berjalan optimal
                  </p>
                </div>
                <div className="p-4 bg-cyan-50 rounded-lg border-l-4 border-cyan-500">
                  <p className="font-medium text-cyan-900 mb-1">
                    ⚡ UI & UGM Rising
                  </p>
                  <p className="text-sm text-gray-700">
                    UI dan UGM diprediksi meningkat 12-15% popularitas Q1 2026
                    seiring dengan buka pendaftaran SNBP
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <p className="font-medium text-red-900 mb-1">
                    ⚠️ Churn Alert
                  </p>
                  <p className="text-sm text-gray-700">
                    572 siswa berisiko dropout (24.5%), fokus retention pada
                    siswa tidak aktif 30 hari
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeBITab === "preskriptif" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Analisis Preskriptif - Apa yang Harus Dilakukan?
              </h4>
              <p className="text-sm text-gray-600">
                Rekomendasi aksi strategis berdasarkan analisis deskriptif dan
                prediktif
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-linear-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
                <Lightbulb className="w-8 h-8 mb-3" />
                <p className="text-sm opacity-90 mb-2">Priority Action</p>
                <p className="font-bold text-xl mb-1">15</p>
                <p className="text-xs opacity-75">
                  Rekomendasi dengan impact tinggi
                </p>
              </div>
              <div className="bg-linear-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg p-6 text-white">
                <Target className="w-8 h-8 mb-3" />
                <p className="text-sm opacity-90 mb-2">Expected ROI</p>
                <p className="font-bold text-xl mb-1">245%</p>
                <p className="text-xs opacity-75">
                  Jika semua rekomendasi dijalankan
                </p>
              </div>
              <div className="bg-linear-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg p-6 text-white">
                <Zap className="w-8 h-8 mb-3" />
                <p className="text-sm opacity-90 mb-2">Quick Wins</p>
                <p className="font-bold text-xl mb-1">8</p>
                <p className="text-xs opacity-75">
                  Aksi cepat dalam 1-2 minggu
                </p>
              </div>
            </div>

            {/* Rekomendasi Marketing & Acquisition */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-linear-to-r from-blue-600 to-cyan-600 p-4">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Strategi Marketing & Akuisisi Siswa
                </h4>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-blue-900 mb-1">
                      🎯 Focus Campaign di Jakarta & Bandung
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      Alokasikan 60% budget marketing ke Jakarta (425 siswa) dan
                      Bandung (318 siswa) - ROI tertinggi
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        Impact: High
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        Effort: Medium
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        Timeline: 2-4 minggu
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-purple-900 mb-1">
                      📱 Optimasi Mobile Experience
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      87% siswa akses via mobile. Prioritas: Percepat loading,
                      simplifikasi form, tambah autosave
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        Impact: High
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        Effort: Low
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        Quick Win
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-pink-900 mb-1">
                      🤝 Partnership dengan SMA Top
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      Target 25 SMA dengan nilai rapor rata-rata &gt;85.
                      Tawarkan workshop PTN gratis untuk BK dan siswa
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
                        Impact: Very High
                      </span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                        Effort: High
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        Timeline: 1-2 bulan
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rekomendasi Retention & Engagement */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-linear-to-r from-green-600 to-emerald-600 p-4">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Strategi Retention & Engagement
                </h4>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-green-900 mb-1">
                      🔔 Automated Re-engagement Campaign
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      Kirim notifikasi personal ke 89 siswa tidak aktif 30+ hari
                      dengan reminder deadline & tips sukses PTN
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        Impact: High
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        Effort: Low
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        Quick Win
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-emerald-900 mb-1">
                      📊 Personalized Dashboard Insights
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      Tampilkan Peluang Lolos real-time berdasarkan nilai rapor
                      vs passing grade PTN pilihan
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                        Impact: Medium
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                        Effort: Medium
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        Timeline: 2-3 minggu
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-teal-900 mb-1">
                      🎓 Gamification & Rewards
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      Implementasi poin & badge untuk siswa yang lengkapi
                      profil, aktif cek jadwal, dan referral teman
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">
                        Impact: Medium
                      </span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                        Effort: High
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        Timeline: 1 bulan
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rekomendasi Monetisasi */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-linear-to-r from-orange-600 to-red-600 p-4">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Strategi Monetisasi Data
                </h4>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-orange-900 mb-1">
                      🏛️ Premium University Analytics Package
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      Jual insights pemetaan wilayah & jurusan ke PTS. Target 20
                      universitas @ Rp 15 jt/tahun = Rp 300 jt
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                        Revenue Potential: Rp 300jt/th
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        Impact: Very High
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-red-900 mb-1">
                      📚 Bimbel & Course Marketplace
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      Komisi 20% dari bimbel partner untuk siswa nilai &lt;80.
                      Estimasi 400 siswa x Rp 500k = Rp 200 jt
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                        Revenue Potential: Rp 200jt/th
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                        Effort: Medium
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Priority Matrix */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-green-600" />
                Priority Action Matrix
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg">
                  <p className="font-bold text-green-900 mb-2">
                    🚀 DO FIRST (High Impact, Low Effort)
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Optimasi Mobile Experience</li>
                    <li>• Automated Re-engagement Campaign</li>
                    <li>• Focus Campaign Jakarta & Bandung</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 border-2 border-blue-500 rounded-lg">
                  <p className="font-bold text-blue-900 mb-2">
                    📅 SCHEDULE (High Impact, High Effort)
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Partnership dengan SMA Top</li>
                    <li>• Premium University Analytics Package</li>
                    <li>• Gamification & Rewards System</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 border-2 border-yellow-500 rounded-lg">
                  <p className="font-bold text-yellow-900 mb-2">
                    ⚡ DELEGATE (Low Impact, Low Effort)
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Social Media Content Calendar</li>
                    <li>• FAQ & Help Center Update</li>
                    <li>• Email Template Optimization</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 border-2 border-gray-300 rounded-lg">
                  <p className="font-bold text-gray-900 mb-2">
                    ❌ ELIMINATE (Low Impact, High Effort)
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Manual data entry processes</li>
                    <li>• Legacy feature maintenance</li>
                    <li>• Non-targeted mass campaigns</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Expected Outcomes */}
            <div className="bg-linear-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6" />
                Expected Outcomes (Q1 2026)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <p className="text-sm opacity-90 mb-1">Total Siswa</p>
                  <p className="font-bold text-2xl">5,200+</p>
                  <p className="text-xs opacity-75 mt-1">+181% growth</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <p className="text-sm opacity-90 mb-1">Retention Rate</p>
                  <p className="font-bold text-2xl">95%</p>
                  <p className="text-xs opacity-75 mt-1">+3.5% improvement</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <p className="text-sm opacity-90 mb-1">Revenue</p>
                  <p className="font-bold text-2xl">Rp 500jt</p>
                  <p className="text-xs opacity-75 mt-1">
                    From data monetization
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <p className="text-sm opacity-90 mb-1">Conversion</p>
                  <p className="font-bold text-2xl">88%</p>
                  <p className="text-xs opacity-75 mt-1">+5.7% improvement</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="font-bold">Daftar Siswa Terdaftar</h3>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all flex items-center gap-2 text-sm">
            <Download className="w-4 h-4" />
            Export Excel
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="text-left py-4 px-4">No</th>
                <th className="text-left py-4 px-4">Nama</th>
                <th className="text-left py-4 px-4">Email</th>
                <th className="text-left py-4 px-4">Sekolah</th>
                <th className="text-left py-4 px-4">Kota</th>
                <th className="text-left py-4 px-4">Rata-rata Rapor</th>
                <th className="text-left py-4 px-4">PTN Pilihan 1</th>
                <th className="text-left py-4 px-4">Jurusan Pilihan 1</th>
                <th className="text-left py-4 px-4">PTN Pilihan 2</th>
                <th className="text-left py-4 px-4">Jurusan Pilihan 2</th>
                <th className="text-left py-4 px-4">Jalur Minat</th>
                <th className="text-left py-4 px-4">Tanggal Daftar</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  nama: "Ahmad Rizki",
                  email: "ahmad@email.com",
                  sekolah: "SMAN 1 Jakarta",
                  kota: "Jakarta",
                  rapor: "88.5",
                  ptn1: "UI",
                  jurusan1: "Teknik Informatika",
                  ptn2: "ITB",
                  jurusan2: "Teknik Elektro",
                  jalur: "SNBP",
                  tanggal: "20 Nov 2025",
                },
                {
                  nama: "Siti Nurhaliza",
                  email: "siti@email.com",
                  sekolah: "SMAN 3 Bandung",
                  kota: "Bandung",
                  rapor: "91.2",
                  ptn1: "ITB",
                  jurusan1: "Teknik Elektro",
                  ptn2: "UI",
                  jurusan2: "Teknik Komputer",
                  jalur: "SNBT",
                  tanggal: "20 Nov 2025",
                },
                {
                  nama: "Budi Santoso",
                  email: "budi@email.com",
                  sekolah: "SMAN 2 Surabaya",
                  kota: "Surabaya",
                  rapor: "85.7",
                  ptn1: "ITS",
                  jurusan1: "Teknik Sipil",
                  ptn2: "UNAIR",
                  jurusan2: "Akuntansi",
                  jalur: "SNBP",
                  tanggal: "19 Nov 2025",
                },
                {
                  nama: "Dewi Lestari",
                  email: "dewi@email.com",
                  sekolah: "SMAN 1 Yogyakarta",
                  kota: "Yogyakarta",
                  rapor: "92.8",
                  ptn1: "UGM",
                  jurusan1: "Kedokteran",
                  ptn2: "UI",
                  jurusan2: "Kedokteran",
                  jalur: "SNBT",
                  tanggal: "19 Nov 2025",
                },
                {
                  nama: "Eka Prasetya",
                  email: "eka@email.com",
                  sekolah: "SMAN 5 Semarang",
                  kota: "Semarang",
                  rapor: "87.3",
                  ptn1: "UNDIP",
                  jurusan1: "Manajemen",
                  ptn2: "UGM",
                  jurusan2: "Akuntansi",
                  jalur: "Mandiri",
                  tanggal: "18 Nov 2025",
                },
                {
                  nama: "Fajar Ramadhan",
                  email: "fajar@email.com",
                  sekolah: "SMAN 8 Jakarta",
                  kota: "Jakarta",
                  rapor: "89.1",
                  ptn1: "UI",
                  jurusan1: "Hukum",
                  ptn2: "UGM",
                  jurusan2: "Hukum",
                  jalur: "SNBP",
                  tanggal: "18 Nov 2025",
                },
                {
                  nama: "Gita Savitri",
                  email: "gita@email.com",
                  sekolah: "SMAN 2 Bandung",
                  kota: "Bandung",
                  rapor: "90.5",
                  ptn1: "ITB",
                  jurusan1: "Teknik Informatika",
                  ptn2: "UI",
                  jurusan2: "Ilmu Komputer",
                  jalur: "SNBT",
                  tanggal: "17 Nov 2025",
                },
                {
                  nama: "Hendra Gunawan",
                  email: "hendra@email.com",
                  sekolah: "SMAN 1 Malang",
                  kota: "Malang",
                  rapor: "86.9",
                  ptn1: "UB",
                  jurusan1: "Kedokteran",
                  ptn2: "UNAIR",
                  jurusan2: "Kedokteran",
                  jalur: "SNBT",
                  tanggal: "17 Nov 2025",
                },
                {
                  nama: "Intan Permata",
                  email: "intan@email.com",
                  sekolah: "SMAN 3 Jakarta",
                  kota: "Jakarta",
                  rapor: "88.7",
                  ptn1: "UI",
                  jurusan1: "Akuntansi",
                  ptn2: "IPB",
                  jurusan2: "Manajemen",
                  jalur: "SNBP",
                  tanggal: "16 Nov 2025",
                },
                {
                  nama: "Joko Widodo",
                  email: "joko@email.com",
                  sekolah: "SMAN 1 Solo",
                  kota: "Solo",
                  rapor: "84.2",
                  ptn1: "UNS",
                  jurusan1: "Teknik Mesin",
                  ptn2: "UGM",
                  jurusan2: "Teknik Mesin",
                  jalur: "Mandiri",
                  tanggal: "16 Nov 2025",
                },
              ].map((siswa, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 px-4 text-gray-600">{idx + 1}</td>
                  <td className="py-4 px-4 font-medium">{siswa.nama}</td>
                  <td className="py-4 px-4 text-gray-600 text-sm">
                    {siswa.email}
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">
                    {siswa.sekolah}
                  </td>
                  <td className="py-4 px-4 text-gray-600">{siswa.kota}</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {siswa.rapor}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {siswa.ptn1}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">
                    {siswa.jurusan1}
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      {siswa.ptn2}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">
                    {siswa.jurusan2}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        siswa.jalur === "SNBP"
                          ? "bg-pink-100 text-pink-700"
                          : siswa.jalur === "SNBT"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-teal-100 text-teal-700"
                      }`}
                    >
                      {siswa.jalur}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">
                    {siswa.tanggal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Menampilkan 1-10 dari 1,847 siswa
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all text-sm">
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all text-sm">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all text-sm">
            3
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all text-sm">
            ...
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all text-sm">
            185
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all text-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
