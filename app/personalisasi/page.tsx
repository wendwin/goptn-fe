"use client";

import { useState } from "react";
import {
  School,
  MapPin,
  GraduationCap,
  Target,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SetupStudentRequestBody, PersonalisasiData, setupStudent } from "@/lib/student/setup";

export default function OnboardingPersonalisasi() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<PersonalisasiData>({
    sekolah: "",
    kota: "",
    rataRaport: "",
    pilihanPTN1: "",
    jurusan1: "",
    pilihanPTN2: "",
    jurusan2: "",
    pilihanPTN3: "",
    jurusan3: "",
    jalur: [],
  });

  const handleJalurChange = (jalur: string) => {
    setFormData((prev) => ({
      ...prev,
      jalur: prev.jalur.includes(jalur)
        ? prev.jalur.filter((j) => j !== jalur)
        : [...prev.jalur, jalur],
    }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmitSetup();
    }
  };

  const canProceed = () => {
    if (step === 1) {
      return formData.sekolah && formData.kota && formData.rataRaport;
    }
    if (step === 2) {
      return formData.pilihanPTN1 && formData.jurusan1;
    }
    if (step === 3) {
      return formData.jalur.length > 0;
    }
    return false;
  };

  const handleSubmitSetup = async () => {
    try {
      const payload: SetupStudentRequestBody = {
        profile: {
          school_name: formData.sekolah,
          city: formData.kota,
          average_grade: Number(formData.rataRaport),
        },

        ptn_choices: [
          formData.pilihanPTN1 && formData.jurusan1
            ? {
                university_name: formData.pilihanPTN1,
                major: formData.jurusan1,
              }
            : null,
          formData.pilihanPTN2 && formData.jurusan2
            ? {
                university_name: formData.pilihanPTN2,
                major: formData.jurusan2,
              }
            : null,
          formData.pilihanPTN3 && formData.jurusan3
            ? {
                university_name: formData.pilihanPTN3,
                major: formData.jurusan3,
              }
            : null,
        ].filter(Boolean) as SetupStudentRequestBody["ptn_choices"],

        entry_paths: formData.jalur,
      };

      await setupStudent(payload);

      localStorage.setItem("is_personalized", "true");
      window.location.href = "/dashboard";
    } catch (err) {
      let message = "Terjadi kesalahan";

      if (err instanceof Error) {
        message = err.message || message;
      }

      alert(message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Personalisasi Akun Anda</span>
          </div>
          <h2 className="mb-2">Mari Kenali Anda Lebih Baik</h2>
          <p className="text-gray-600">
            Kami butuh beberapa informasi untuk memberikan rekomendasi terbaik
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Langkah {step} dari 3</span>
            <span className="text-sm text-gray-600">
              {Math.round((step / 3) * 100)}% selesai
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-blue-600 to-purple-600 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: Data Sekolah */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <School className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold">Data Sekolah & Akademik</h3>
                  <p className="text-sm text-gray-600">
                    Informasi dasar tentang Anda
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Nama Sekolah *
                </label>
                <input
                  type="text"
                  required
                  value={formData.sekolah}
                  onChange={(e) =>
                    setFormData({ ...formData, sekolah: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Contoh: SMAN 1 Jakarta"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Kota/Kabupaten *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.kota}
                    onChange={(e) =>
                      setFormData({ ...formData, kota: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Contoh: Jakarta"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Rata-rata Raport (Semester 1-5) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="100"
                  required
                  value={formData.rataRaport}
                  onChange={(e) =>
                    setFormData({ ...formData, rataRaport: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Contoh: 85.50"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Data ini membantu kami menganalisis peluang Anda
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Pilihan PTN */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold">Pilihan PTN & Jurusan</h3>
                  <p className="text-sm text-gray-600">
                    PTN dan jurusan impian Anda
                  </p>
                </div>
              </div>

              {[1, 2, 3].map((num) => (
                <div key={num} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-medium mb-4">
                    Pilihan {num}{" "}
                    {num === 1 && <span className="text-red-500">*</span>}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        PTN{" "}
                        {num === 1 && <span className="text-red-500">*</span>}
                      </label>
                      <select
                        required={num === 1}
                        value={
                          formData[
                            `pilihanPTN${num}` as keyof PersonalisasiData
                          ] as string
                        }
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [`pilihanPTN${num}`]: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none bg-white"
                      >
                        <option value="">Pilih PTN</option>
                        <option value="UI">Universitas Indonesia (UI)</option>
                        <option value="ITB">
                          Institut Teknologi Bandung (ITB)
                        </option>
                        <option value="UGM">
                          Universitas Gadjah Mada (UGM)
                        </option>
                        <option value="IPB">
                          Institut Pertanian Bogor (IPB)
                        </option>
                        <option value="ITS">
                          Institut Teknologi Sepuluh Nopember (ITS)
                        </option>
                        <option value="UNAIR">
                          Universitas Airlangga (UNAIR)
                        </option>
                        <option value="UNDIP">
                          Universitas Diponegoro (UNDIP)
                        </option>
                        <option value="UB">Universitas Brawijaya (UB)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Jurusan{" "}
                        {num === 1 && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="text"
                        required={num === 1}
                        value={
                          formData[
                            `jurusan${num}` as keyof PersonalisasiData
                          ] as string
                        }
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [`jurusan${num}`]: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                        placeholder="Contoh: Teknik Informatika"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 3: Jalur Masuk */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold">Jalur Masuk yang Diminati</h3>
                  <p className="text-sm text-gray-600">
                    Pilih jalur yang ingin Anda ikuti
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    value: "SNBP",
                    label: "SNBP",
                    desc: "Seleksi Nasional Berdasarkan Prestasi",
                    color: "blue",
                  },
                  {
                    value: "SNBT",
                    label: "SNBT",
                    desc: "Seleksi Nasional Berdasarkan Tes",
                    color: "purple",
                  },
                  {
                    value: "Mandiri",
                    label: "Jalur Mandiri",
                    desc: "Seleksi Mandiri PTN",
                    color: "green",
                  },
                ].map((jalur) => {
                  const isSelected = formData.jalur.includes(jalur.value);
                  const colorClasses = {
                    blue: "border-blue-500 bg-blue-50",
                    purple: "border-purple-500 bg-purple-50",
                    green: "border-green-500 bg-green-50",
                  };

                  return (
                    <label
                      key={jalur.value}
                      className={`flex items-start gap-4 p-5 rounded-xl cursor-pointer transition-all border-2 ${
                        isSelected
                          ? colorClasses[
                              jalur.color as keyof typeof colorClasses
                            ]
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleJalurChange(jalur.value)}
                        className="w-4 h-4 mt-0.5 rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{jalur.label}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          {jalur.desc}
                        </p>
                      </div>
                    </label>
                  );
                })}
              </div>

              {formData.jalur.length === 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    ⚠️ Pilih minimal 1 jalur untuk melanjutkan
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
              >
                Kembali
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              <span className="font-medium">
                {step === 3 ? "Selesai & Lihat Dashboard" : "Lanjutkan"}
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
