import { useState } from "react";
import Navbar from "../navbar";

const Satıcılar = () => {
  // Satıcı verilerini state'te tutuyoruz
  const [sellers, setSellers] = useState([
    {
      id: 1,
      name: "TeknoMağaza",
      email: "tekno@örnek.com",
      sellerName: "Fatma Şahin",
    },
    {
      id: 2,
      name: "ModaTrend",
      email: "moda@örnek.com",
      sellerName: "Mehmet Demir",
    },
    { id: 3, name: "EvDekor", email: "ev@örnek.com", sellerName: "Ayşe Kaya" },
    {
      id: 4,
      name: "BahçeSever",
      email: "bahçe@örnek.com",
      sellerName: "Ahmet Yılmaz",
    },
  ]);

  // Yeni satıcı eklemek için state
  const [newSeller, setNewSeller] = useState({ name: "", email: "" });

  // Satıcı silme fonksiyonu
  const handleDelete = (id: number) => {
    setSellers(sellers.filter((seller) => seller.id !== id));
  };

  // Yeni satıcı ekleme fonksiyonu
  const handleAddSeller = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSeller.name && newSeller.email) {
      const newId = sellers.length > 0 ? sellers[sellers.length - 1].id + 1 : 1;
      setSellers([...sellers, { id: newId, ...newSeller }]);
      setNewSeller({ name: "", email: "" }); // Formu temizle
    }
  };

  return (
    <div className="flex m-[0_200px_0_200px] bg-[#F3F4F7]">
      <Navbar />
      <div className="flex-1 p-6 m-[0_120px_0_120px]">
        <h2 className="text-2xl font-semibold text-center mb-6">Satıcılar</h2>

        {/* Yeni Satıcı Ekleme Formu */}
        <form
          onSubmit={handleAddSeller}
          className="mb-6 bg-white p-6 rounded-lg shadow-md"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Adı"
              value={newSeller.name}
              onChange={(e) =>
                setNewSeller({ ...newSeller, name: e.target.value })
              }
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="E-posta"
              value={newSeller.email}
              onChange={(e) =>
                setNewSeller({ ...newSeller, email: e.target.value })
              }
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full"
          >
            Satıcı Ekle
          </button>
        </form>

        {/* Satıcı Tablosu */}
        <div className="overflow-x-auto bg-white py-6 px-3 rounded-lg shadow-md">
          <table className="min-w-full  table-auto">
            <thead className="">
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3">ID</th>
                <th className="p-3">Mağaza Adı</th>
                <th className="p-3">Satıcı</th>
                <th className="p-3">E-posta</th>
                <th className="p-3">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller) => (
                <tr key={seller.id} className="border-t border-gray-200">
                  <td className="p-4">{seller.id}</td>
                  <td className="p-4">{seller.name}</td>
                  <td className="p-4">{seller.sellerName}</td>
                  <td className="p-4">{seller.email}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDelete(seller.id)}
                      className="bg-red-500 text-white p-1 w-28 -mr-200 rounded-md"
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Satıcılar;
