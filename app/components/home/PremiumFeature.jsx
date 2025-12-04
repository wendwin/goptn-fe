import { Crown, Bell, BarChart3, Target, Zap, Shield, Gift, Database } from 'lucide-react';

// interface PremiumFeaturesProps {
//   onGetStarted?: () => void;
// }

export default function PremiumFeatures() {
  const features = [
    {
      icon: Bell,
      title: 'Notifikasi Premium',
      description: 'Pengingat otomatis via WhatsApp, Email, dan SMS untuk semua jadwal penting',
      badge: 'Populer'
    },
    {
      icon: Target,
      title: 'Rekomendasi Personal',
      description: 'Analisis peluang lolos berdasarkan data historis dan profil akademik Anda',
      badge: 'Baru'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Akses ke data lengkap pemetaan minat dan statistik PTN secara real-time',
      badge: null
    },
    {
      icon: Zap,
      title: 'Early Access',
      description: 'Dapatkan informasi dan update terbaru lebih dulu dari pengguna lain',
      badge: null
    }
  ];

  return (
    <div className="bg-linear-to-br from-purple-50 to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full mb-4">
            <Gift className="w-5 h-5" />
            <span className="font-medium">Semua Fitur Premium GRATIS!</span>
          </div>
          <h2 className="mb-4">Maksimalkan Peluang Lolos PTN</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lengkapi profil Anda untuk mendapatkan rekomendasi personal, analisis peluang, 
            dan notifikasi otomatis yang disesuaikan dengan target PTN impian Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-200 ${
                  idx === 3 ? 'lg:col-start-2' : ''
                }`}
              >
                {feature.badge && (
                  <span className="inline-block bg-linear-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full mb-4">
                    {feature.badge}
                  </span>
                )}
                <div className="w-12 h-12 bg-linear-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tanpa Data - Limited */}
            <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="font-bold mb-2">Akses Terbatas</h3>
                <p className="text-sm text-gray-600">Tanpa melengkapi data pribadi</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Informasi jadwal PTN dasar</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Hanya melihat informasi umum</span>
                </li>
                <li className="flex items-start gap-3 text-sm opacity-40">
                  <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-600 line-through">Notifikasi otomatis</span>
                </li>
                <li className="flex items-start gap-3 text-sm opacity-40">
                  <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-600 line-through">Rekomendasi personal</span>
                </li>
                <li className="flex items-start gap-3 text-sm opacity-40">
                  <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-600 line-through">Analytics & insights</span>
                </li>
              </ul>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-xs text-gray-600 text-center">
                  Akses terbatas tanpa registrasi akun
                </p>
              </div>
            </div>

            {/* Dengan Data - Full Access */}
            <div className="bg-linear-to-br from-purple-600 to-pink-600 rounded-xl p-8 text-white relative shadow-2xl transform lg:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-yellow-400 to-orange-400 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ DIREKOMENDASIKAN
              </div>
              <div className="text-center mb-6 mt-2">
                <h3 className="font-bold mb-2">Akses Premium Penuh</h3>
                <p className="text-sm opacity-90">Dengan melengkapi data pribadi</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>✨ Notifikasi otomatis via WhatsApp, Email & SMS</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>✨ Rekomendasi personal berdasarkan profil</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>✨ Analisis peluang lolos PTN</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>✨ Akses early update & informasi terbaru</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>✨ Unlimited pilihan PTN & jurusan</span>
                </li>
              </ul>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-6 border border-white/20">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Crown className="w-5 h-5" />
                  <p className="font-bold">100% GRATIS</p>
                </div>
                <p className="text-xs opacity-90 text-center">
                  Lengkapi profil Anda untuk akses penuh semua fitur
                </p>
              </div>
              <button
                // onClick={onGetStarted}
                className="w-full py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Dapatkan Akses Premium Gratis →
              </button>
            </div>
          </div>

          {/* How It Works / Cara Kerja */}
          <div className="mt-12 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="font-bold mb-2">Cara Kerja Platform</h3>
              <p className="text-gray-600">
                Tiga langkah mudah untuk memaksimalkan peluang lolos PTN
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h4 className="font-bold mb-2">Daftar & Lengkapi Profil</h4>
                <p className="text-sm text-gray-600">
                  Buat akun dan isi data sekolah, nilai raport, serta pilihan PTN dan jurusan impian Anda
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h4 className="font-bold mb-2">Dapatkan Analisis Personal</h4>
                <p className="text-sm text-gray-600">
                  Sistem kami menganalisis peluang Anda dan memberikan rekomendasi strategi masuk PTN
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-linear-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h4 className="font-bold mb-2">Terima Notifikasi & Update</h4>
                <p className="text-sm text-gray-600">
                  Dapatkan pengingat otomatis untuk setiap jadwal penting dan update informasi terkini
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-linear-to-br from-blue-50 to-blue-100 rounded-xl">
                <p className="font-bold mb-1">10,000+</p>
                <p className="text-xs text-gray-600">Siswa Terdaftar</p>
              </div>
              <div className="text-center p-4 bg-linear-to-br from-purple-50 to-purple-100 rounded-xl">
                <p className="font-bold mb-1">500+</p>
                <p className="text-xs text-gray-600">SMA Partner</p>
              </div>
              <div className="text-center p-4 bg-linear-to-br from-pink-50 to-pink-100 rounded-xl">
                <p className="font-bold mb-1">50+</p>
                <p className="text-xs text-gray-600">PTN/PTS Terintegrasi</p>
              </div>
              <div className="text-center p-4 bg-linear-to-br from-orange-50 to-orange-100 rounded-xl">
                <p className="font-bold mb-1">95%</p>
                <p className="text-xs text-gray-600">Tingkat Kepuasan</p>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="mt-6 flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-900 mb-1">Privasi & Keamanan Data</p>
                <p className="text-xs text-blue-700">
                  Data Anda dienkripsi dan dijaga kerahasiaannya. Kami hanya menggunakan data agregat untuk analisis dan tidak membagikan informasi pribadi individual kepada pihak ketiga tanpa izin Anda.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Telah Dipercaya Oleh</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="font-bold text-gray-700">500+ Sekolah</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="font-bold text-gray-700">50+ Universitas</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="font-bold text-gray-700">10,000+ Siswa Aktif</div>
          </div>
        </div>
      </div>
    </div>
  );
};