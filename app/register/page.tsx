"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Shield,
  Phone,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { registerStudent } from "../../lib/auth/register";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Toaster } from "sonner";

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    no_telp: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    no_telp: "",
    password: "",
    confirmPassword: "",
    privacy: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      no_telp: "",
      password: "",
      confirmPassword: "",
      privacy: "",
    };
    let isValid = true;

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Nama lengkap harus diisi";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email harus diisi";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
      isValid = false;
    }

    // Validate phone
    const phoneRegex = /^[0-9]{10,13}$/;
    if (!formData.no_telp) {
      newErrors.no_telp = "Nomor telepon harus diisi";
      isValid = false;
    } else if (!phoneRegex.test(formData.no_telp.replace(/[\s-]/g, ""))) {
      newErrors.no_telp = "Nomor telepon tidak valid (10-13 digit)";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password harus diisi";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
      isValid = false;
    }

    // Validate confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi password harus diisi";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok";
      isValid = false;
    }

    // Validate privacy policy
    if (!acceptPrivacy) {
      newErrors.privacy = "Anda harus menyetujui Kebijakan Privasi";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await registerStudent({
        name: formData.name,
        email: formData.email,
        no_telp: formData.no_telp,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
      });

      console.log("Register success:", response);

      toast.success("Pendaftaran berhasil! Silakan login.");

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      let message = "Terjadi kesalahan";

      if (err instanceof Error) {
        message = err.message || message;
      }
      toast.error(message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-0">
          <h2 className="text-xl font-bold">Daftar Akun</h2>
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl mb-4">
            <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
          </div> */}
          {/* <h2 className="mb-2">Daftar Akun Baru</h2>
          <p className="text-gray-600">
            Lengkapi data diri Anda untuk membuat akun Go PTN
          </p> */}
        </div>

        {/* Register Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Nama Lengkap
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap"
                  className={`w-full pl-12 pr-4 py-2 border-2 rounded-lg focus:outline-none transition-all ${
                    errors.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-purple-500"
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  className={`w-full pl-12 pr-4 py-2 border-2 rounded-lg focus:outline-none transition-all ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-purple-500"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Nomor Telepon
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="no_telp"
                  value={formData.no_telp}
                  onChange={handleChange}
                  placeholder="08123456789"
                  className={`w-full pl-12 pr-4 py-2 border-2 rounded-lg focus:outline-none transition-all ${
                    errors.no_telp
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-purple-500"
                  }`}
                />
              </div>
              {errors.no_telp && (
                <p className="text-red-500 text-xs mt-1">{errors.no_telp}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimal 6 karakter"
                  className={`w-full pl-12 pr-12 py-2 border-2 rounded-lg focus:outline-none transition-all ${
                    errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-purple-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Konfirmasi Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Ketik ulang password"
                  className={`w-full pl-12 pr-12 py-2 border-2 rounded-lg focus:outline-none transition-all ${
                    errors.confirmPassword
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-purple-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptPrivacy}
                  onChange={(e) => {
                    setAcceptPrivacy(e.target.checked);
                    if (e.target.checked && errors.privacy) {
                      setErrors((prev) => ({ ...prev, privacy: "" }));
                    }
                  }}
                  className="w-3 h-3 mt-0.5 text-purple-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
                />
                <span className="text-xs text-gray-700">
                  Saya telah membaca dan menyetujui{" "}
                  <button
                    type="button"
                    onClick={() => setShowPrivacyDialog(true)}
                    className="text-purple-600 hover:underline text-xs"
                  >
                    Kebijakan Privasi
                  </button>
                </span>
              </label>
              {errors.privacy && (
                <p className="text-red-500 text-xs mt-2 ml-8">
                  {errors.privacy}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-6"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">
                Sudah punya akun?
              </span>
            </div>
          </div>

          {/* Navigate to Login */}
          <button
            onClick={() => router.push("/login")}
            className="w-full py-3 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
          >
            Masuk ke Akun
          </button>
        </div>
      </div>

      {/* Privacy Policy Dialog */}
      <Dialog open={showPrivacyDialog} onOpenChange={setShowPrivacyDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <DialogTitle>Kebijakan Privasi Go PTN</DialogTitle>
            </div>
            <DialogDescription>
              Terakhir diperbarui: 3 Desember 2024
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-bold mb-2">1. Pengumpulan Data</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Kami mengumpulkan data pribadi yang Anda berikan saat mendaftar
                dan menggunakan layanan Go PTN, termasuk:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>
                  Nama lengkap dan informasi kontak (email, nomor telepon)
                </li>
                <li>
                  Data akademik (nama sekolah, rata-rata raport, hasil try out)
                </li>
                <li>Preferensi universitas dan jurusan</li>
                <li>Hasil tes potensi diri dan kepribadian</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold mb-2">2. Penggunaan Data</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Data yang kami kumpulkan digunakan untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>
                  Menyediakan personalisasi rekomendasi universitas dan jurusan
                </li>
                <li>
                  Analisis peluang keterima berdasarkan profil akademik Anda
                </li>
                <li>Mengirimkan notifikasi jadwal penting pendaftaran PTN</li>
                <li>
                  Menyediakan analytics agregat kepada universitas mitra (tanpa
                  identitas pribadi)
                </li>
                <li>Meningkatkan kualitas layanan kami</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold mb-2">
                3. Berbagi Data dengan Pihak Ketiga
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Kami hanya berbagi data Anda dengan:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>
                  <strong>Universitas Mitra:</strong> Data agregat dan anonim
                  untuk pemetaan minat calon mahasiswa
                </li>
                <li>
                  <strong>Perguruan Tinggi Swasta:</strong> Analytics peminatan
                  jurusan tanpa data pribadi identifiable
                </li>
                <li>
                  Kami TIDAK menjual data pribadi Anda kepada pihak ketiga
                  manapun
                </li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold mb-2">4. Keamanan Data</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami menggunakan enkripsi dan protokol keamanan standar industri
                untuk melindungi data pribadi Anda. Namun, tidak ada sistem yang
                100% aman, dan kami tidak dapat menjamin keamanan absolut.
              </p>
            </section>

            <section>
              <h3 className="font-bold mb-2">5. Hak Anda</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Mengakses dan mengunduh data pribadi Anda</li>
                <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                <li>Menghapus akun dan data pribadi Anda</li>
                <li>Menarik persetujuan penggunaan data kapan saja</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold mb-2">6. Model Akses Premium</h3>
              <p className="text-gray-600 leading-relaxed">
                Dengan melengkapi data personalisasi, Anda mendapatkan akses
                premium gratis ke semua fitur Go PTN. Model data sebagai
                pembayaran ini memungkinkan kami menyediakan layanan berkualitas
                tanpa biaya finansial.
              </p>
            </section>

            <section>
              <h3 className="font-bold mb-2">7. Perubahan Kebijakan</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu.
                Perubahan signifikan akan diberitahukan melalui email atau
                notifikasi di aplikasi.
              </p>
            </section>

            <section>
              <h3 className="font-bold mb-2">8. Hubungi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini,
                hubungi kami di:
                <br />
                Email: privacy@goptn.id
                <br />
                WhatsApp: +62 812-3456-7890
              </p>
            </section>

            <div className="pt-4 border-t">
              <button
                onClick={() => {
                  setAcceptPrivacy(true);
                  setShowPrivacyDialog(false);
                  if (errors.privacy) {
                    setErrors((prev) => ({ ...prev, privacy: "" }));
                  }
                }}
                className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Saya Mengerti dan Menyetujui
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Toaster position="top-right" richColors closeButton />
    </div>
  );
}
