import { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, EyeOff, Save, X, Building2 } from 'lucide-react';

interface KampusItem {
  id: number;
  nama: string;
  akronim: string;
  kota: string;
  website: string;
  akreditasi: string;
  visible: boolean;
}

export function KelolaKampusSection() {
  const [kampusData, setKampusData] = useState<KampusItem[]>([
    { id: 1, nama: 'Universitas Indonesia', akronim: 'UI', kota: 'Depok', website: 'ui.ac.id', akreditasi: 'A', visible: true },
    { id: 2, nama: 'Institut Teknologi Bandung', akronim: 'ITB', kota: 'Bandung', website: 'itb.ac.id', akreditasi: 'A', visible: true },
    { id: 3, nama: 'Universitas Gadjah Mada', akronim: 'UGM', kota: 'Yogyakarta', website: 'ugm.ac.id', akreditasi: 'A', visible: true },
    { id: 4, nama: 'Institut Pertanian Bogor', akronim: 'IPB', kota: 'Bogor', website: 'ipb.ac.id', akreditasi: 'A', visible: true },
    { id: 5, nama: 'Institut Teknologi Sepuluh Nopember', akronim: 'ITS', kota: 'Surabaya', website: 'its.ac.id', akreditasi: 'A', visible: true },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedKampus, setSelectedKampus] = useState<KampusItem | null>(null);
  const [newKampus, setNewKampus] = useState<Omit<KampusItem, 'id'>>({
    nama: '',
    akronim: '',
    kota: '',
    website: '',
    akreditasi: 'A',
    visible: true
  });

  const toggleVisibility = (id: number) => {
    setKampusData(kampusData.map(item => 
      item.id === id ? { ...item, visible: !item.visible } : item
    ));
  };

  const handleAdd = () => {
    const newId = Math.max(...kampusData.map(k => k.id)) + 1;
    setKampusData([...kampusData, { ...newKampus, id: newId }]);
    setNewKampus({
      nama: '',
      akronim: '',
      kota: '',
      website: '',
      akreditasi: 'A',
      visible: true
    });
    setShowAddModal(false);
  };

  const handleEdit = (kampus: KampusItem) => {
    setSelectedKampus(kampus);
    setShowEditModal(true);
  };

  const handleUpdate = () => {
    if (selectedKampus) {
      setKampusData(kampusData.map(item => 
        item.id === selectedKampus.id ? selectedKampus : item
      ));
      setShowEditModal(false);
      setSelectedKampus(null);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus data kampus ini?')) {
      setKampusData(kampusData.filter(item => item.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="mb-2">Kelola Data Kampus/PTN</h2>
          <p className="text-gray-600">Kelola database kampus dan universitas yang tersedia di platform</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Tambah Kampus
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-gray-600 mb-1">Total Kampus</p>
          <p className="font-bold text-2xl">{kampusData.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-gray-600 mb-1">Kampus Aktif</p>
          <p className="font-bold text-2xl text-green-600">{kampusData.filter(k => k.visible).length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-gray-600 mb-1">Akreditasi A</p>
          <p className="font-bold text-2xl text-blue-600">{kampusData.filter(k => k.akreditasi === 'A').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-gray-600 mb-1">Total Kota</p>
          <p className="font-bold text-2xl">{new Set(kampusData.map(k => k.kota)).size}</p>
        </div>
      </div>

      {/* Kampus Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="text-left py-4 px-6">Nama Kampus</th>
                <th className="text-left py-4 px-6">Akronim</th>
                <th className="text-left py-4 px-6">Kota</th>
                <th className="text-left py-4 px-6">Website</th>
                <th className="text-left py-4 px-6">Akreditasi</th>
                <th className="text-left py-4 px-6">Visibilitas</th>
                <th className="text-left py-4 px-6">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {kampusData.map((kampus) => (
                <tr key={kampus.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <p className="font-medium">{kampus.nama}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {kampus.akronim}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{kampus.kota}</td>
                  <td className="py-4 px-6 text-gray-600">{kampus.website}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      kampus.akreditasi === 'A' ? 'bg-green-100 text-green-700' :
                      kampus.akreditasi === 'B' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {kampus.akreditasi}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => toggleVisibility(kampus.id)}
                      className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-all ${
                        kampus.visible 
                          ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {kampus.visible ? (
                        <>
                          <Eye className="w-4 h-4" />
                          <span className="text-xs">Tampil</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-4 h-4" />
                          <span className="text-xs">Sembunyi</span>
                        </>
                      )}
                    </button>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleEdit(kampus)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(kampus.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="font-bold flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                Tambah Kampus Baru
              </h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nama Kampus</label>
                <input
                  type="text"
                  value={newKampus.nama}
                  onChange={(e) => setNewKampus({...newKampus, nama: e.target.value})}
                  placeholder="Contoh: Universitas Indonesia"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Akronim</label>
                  <input
                    type="text"
                    value={newKampus.akronim}
                    onChange={(e) => setNewKampus({...newKampus, akronim: e.target.value})}
                    placeholder="Contoh: UI"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Kota</label>
                  <input
                    type="text"
                    value={newKampus.kota}
                    onChange={(e) => setNewKampus({...newKampus, kota: e.target.value})}
                    placeholder="Contoh: Depok"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Website</label>
                  <input
                    type="text"
                    value={newKampus.website}
                    onChange={(e) => setNewKampus({...newKampus, website: e.target.value})}
                    placeholder="Contoh: ui.ac.id"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Akreditasi</label>
                  <select
                    value={newKampus.akreditasi}
                    onChange={(e) => setNewKampus({...newKampus, akreditasi: e.target.value})}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  >
                    <option value="A">A (Unggul)</option>
                    <option value="B">B (Baik Sekali)</option>
                    <option value="C">C (Baik)</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={newKampus.visible}
                  onChange={(e) => setNewKampus({...newKampus, visible: e.target.checked})}
                  className="w-4 h-4"
                />
                <label className="text-sm">Tampilkan di platform</label>
              </div>
            </div>
            <div className="sticky bottom-0 bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-200">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-all"
              >
                Batal
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedKampus && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="font-bold flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                Edit Data Kampus
              </h3>
              <button onClick={() => setShowEditModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nama Kampus</label>
                <input
                  type="text"
                  value={selectedKampus.nama}
                  onChange={(e) => setSelectedKampus({...selectedKampus, nama: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Akronim</label>
                  <input
                    type="text"
                    value={selectedKampus.akronim}
                    onChange={(e) => setSelectedKampus({...selectedKampus, akronim: e.target.value})}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Kota</label>
                  <input
                    type="text"
                    value={selectedKampus.kota}
                    onChange={(e) => setSelectedKampus({...selectedKampus, kota: e.target.value})}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Website</label>
                  <input
                    type="text"
                    value={selectedKampus.website}
                    onChange={(e) => setSelectedKampus({...selectedKampus, website: e.target.value})}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Akreditasi</label>
                  <select
                    value={selectedKampus.akreditasi}
                    onChange={(e) => setSelectedKampus({...selectedKampus, akreditasi: e.target.value})}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  >
                    <option value="A">A (Unggul)</option>
                    <option value="B">B (Baik Sekali)</option>
                    <option value="C">C (Baik)</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedKampus.visible}
                  onChange={(e) => setSelectedKampus({...selectedKampus, visible: e.target.checked})}
                  className="w-4 h-4"
                />
                <label className="text-sm">Tampilkan di platform</label>
              </div>
            </div>
            <div className="sticky bottom-0 bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-200">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-all"
              >
                Batal
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}