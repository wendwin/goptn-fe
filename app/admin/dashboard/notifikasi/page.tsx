"use client";

import { useState } from "react";

interface Notification {
  judul: string;
  tanggal: string;
  penerima: number;
  status: "Terkirim" | "Gagal";
  channels: string[];
}

export default function NotifikasiPage() {
  const [targetPenerima, setTargetPenerima] = useState("Semua Siswa");
  const [judul, setJudul] = useState("");
  const [pesan, setPesan] = useState("");
  const [channels, setChannels] = useState<string[]>(["Email", "WhatsApp"]);
  const [riwayat, setRiwayat] = useState<Notification[]>([
    { judul: "Pendaftaran SNBP Dibuka", tanggal: "20 Nov 2025", penerima: 1847, status: "Terkirim", channels: ["Email", "WhatsApp"] },
    { judul: "Pengumuman UTBK 2026", tanggal: "18 Nov 2025", penerima: 1820, status: "Terkirim", channels: ["Email", "WhatsApp"] },
    { judul: "Info Jalur Mandiri PTN", tanggal: "15 Nov 2025", penerima: 1795, status: "Terkirim", channels: ["Email", "WhatsApp"] },
  ]);

  const toggleChannel = (channel: string) => {
    setChannels((prev) =>
      prev.includes(channel) ? prev.filter((c) => c !== channel) : [...prev, channel]
    );
  };

  const handleKirimNotifikasi = () => {
    if (!judul || !pesan) return alert("Judul dan pesan harus diisi");

    const newNotif: Notification = {
      judul,
      tanggal: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }),
      penerima: Math.floor(Math.random() * 2000) + 100, // contoh jumlah penerima
      status: "Terkirim",
      channels,
    };
    setRiwayat([newNotif, ...riwayat]);
    setJudul("");
    setPesan("");
    setChannels(["Email", "WhatsApp"]);
    setTargetPenerima("Semua Siswa");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="mb-2 text-2xl font-bold">Kelola Notifikasi</h2>
        <p className="text-gray-600">Kirim notifikasi broadcast ke siswa terdaftar</p>
      </div>

      {/* Send Notification Form */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold mb-4">Kirim Notifikasi Baru</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Target Penerima</label>
            <select
              value={targetPenerima}
              onChange={(e) => setTargetPenerima(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
            >
              <option>Semua Siswa</option>
              <option>Siswa Kelas 12</option>
              <option>Siswa dengan PTN Tertentu</option>
              <option>Siswa dari Kota Tertentu</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Judul Notifikasi</label>
            <input
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Contoh: Pendaftaran SNBP Dibuka!"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Pesan</label>
            <textarea
              rows={4}
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Tulis pesan notifikasi..."
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
            />
          </div>
          <div className="flex gap-4">
            {["Email", "WhatsApp", "SMS"].map((ch) => (
              <label key={ch} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={channels.includes(ch)}
                  onChange={() => toggleChannel(ch)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{ch}</span>
              </label>
            ))}
          </div>
          <button
            onClick={handleKirimNotifikasi}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            Kirim Notifikasi
          </button>
        </div>
      </div>

      {/* Notification History */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold mb-4">Riwayat Notifikasi</h3>
        <div className="space-y-4">
          {riwayat.map((notif, idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{notif.judul}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Dikirim ke {notif.penerima} siswa • {notif.tanggal}
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  {notif.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
