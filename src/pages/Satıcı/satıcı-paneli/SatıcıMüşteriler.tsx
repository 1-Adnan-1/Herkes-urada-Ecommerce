import { useState } from "react";
import SatıcıSidebar from "../satıcı-paneli/sidebar";

// Örnek müşteri verileri
const initialMüşteriler = [
  {
    id: 1,
    ad: "Ahmet Yılmaz",
    email: "ahmet.yilmaz@example.com",
    telefon: "555-123-4567",
    siparişSayısı: 5,
  },
  {
    id: 2,
    ad: "Ayşe Demir",
    email: "ayse.demir@example.com",
    telefon: "555-234-5678",
    siparişSayısı: 3,
  },
  {
    id: 3,
    ad: "Mehmet Kaya",
    email: "mehmet.kaya@example.com",
    telefon: "555-345-6789",
    siparişSayısı: 7,
  },
  {
    id: 4,
    ad: "Fatma Şahin",
    email: "fatma.sahin@example.com",
    telefon: "555-456-7890",
    siparişSayısı: 2,
  },
  {
    id: 5,
    ad: "Ali Can",
    email: "ali.can@example.com",
    telefon: "555-567-8901",
    siparişSayısı: 4,
  },
];

const SatıcıMüşteriler = () => {
  const [müşteriler, setMüşteriler] = useState(initialMüşteriler);
  const [yeniMüşteri, setYeniMüşteri] = useState({
    ad: "",
    email: "",
    telefon: "",
    siparişSayısı: 0,
  });

  // Müşteri ekleme işlemi
  const müşteriEkle = () => {
    if (!yeniMüşteri.ad || !yeniMüşteri.email || !yeniMüşteri.telefon) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    const yeniMüşteriObj = {
      id: müşteriler.length + 1,
      ...yeniMüşteri,
    };
    setMüşteriler([...müşteriler, yeniMüşteriObj]);
    setYeniMüşteri({
      ad: "",
      email: "",
      telefon: "",
      siparişSayısı: 0,
    });
  };

  // Müşteri silme işlemi
  const müşteriSil = (id: number) => {
    setMüşteriler(müşteriler.filter((müşteri) => müşteri.id !== id));
  };

  return (
    <div>
      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Müşteriler</h1>

        {/* Müşteri Ekleme Formu */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Yeni Müşteri Ekle</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Ad"
              value={yeniMüşteri.ad}
              onChange={(e) =>
                setYeniMüşteri({ ...yeniMüşteri, ad: e.target.value })
              }
              className="p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={yeniMüşteri.email}
              onChange={(e) =>
                setYeniMüşteri({ ...yeniMüşteri, email: e.target.value })
              }
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Telefon"
              value={yeniMüşteri.telefon}
              onChange={(e) =>
                setYeniMüşteri({ ...yeniMüşteri, telefon: e.target.value })
              }
              className="p-2 border rounded"
            />
          </div>
          <button
            onClick={müşteriEkle}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Müşteri Ekle
          </button>
        </div>

        {/* Müşteri Listesi */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b border-gray-500">
            <div className="grid grid-cols-5 gap-1 font-semibold">
              <div>Ad</div>
              <div>Email</div>
              <div className="ml-26">Telefon</div>
              <div className="ml-20">Sipariş Sayısı</div>
              <div className="ml-30">İşlemler</div>
            </div>
          </div>
          {müşteriler.map((müşteri) => (
            <div
              key={müşteri.id}
              className="p-4 border-b border-gray-400 hover:bg-gray-50 transition-colors"
            >
              <div className="grid grid-cols-5 gap-4">
                <div>{müşteri.ad}</div>
                <div>{müşteri.email}</div>
                <div className="ml-20">{müşteri.telefon}</div>
                <div className="ml-29">{müşteri.siparişSayısı}</div>
                <div>
                  <button
                    onClick={() => müşteriSil(müşteri.id)}
                    className="ml-30 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SatıcıMüşteriler;
