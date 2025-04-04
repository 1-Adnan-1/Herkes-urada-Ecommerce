import { useState } from "react";

const initialMüşteriler = [
  {
    id: 1,
    ad: "Ahmet Yılmaz",
    email: "ahmet.yilmaz@example.com",
    telefon: "555-123-4567",
    siparişSayısı: 5,
    kargoDurumu: "Hazırlanıyor",
  },
  {
    id: 2,
    ad: "Ayşe Demir",
    email: "ayse.demir@example.com",
    telefon: "555-234-5678",
    siparişSayısı: 3,
    kargoDurumu: "Kargoya Verildi",
  },
  {
    id: 3,
    ad: "Mehmet Kaya",
    email: "mehmet.kaya@example.com",
    telefon: "555-345-6789",
    siparişSayısı: 7,
    kargoDurumu: "Teslim Edildi",
  },
  {
    id: 4,
    ad: "Fatma Şahin",
    email: "fatma.sahin@example.com",
    telefon: "555-456-7890",
    siparişSayısı: 2,
    kargoDurumu: "Hazırlanıyor",
  },
  {
    id: 5,
    ad: "Ali Can",
    email: "ali.can@example.com",
    telefon: "555-567-8901",
    siparişSayısı: 4,
    kargoDurumu: "Kargoya Verildi",
  },
  {
    id: 6,
    ad: "Ahmet Yılmaz",
    email: "ahmet.yilmaz@example.com",
    telefon: "555-123-4567",
    siparişSayısı: 5,
    kargoDurumu: "Hazırlanıyor",
  },
  {
    id: 7,
    ad: "Ayşe Demir",
    email: "ayse.demir@example.com",
    telefon: "555-234-5678",
    siparişSayısı: 3,
    kargoDurumu: "Kargoya Verildi",
  },
  {
    id: 8,
    ad: "Mehmet Kaya",
    email: "mehmet.kaya@example.com",
    telefon: "555-345-6789",
    siparişSayısı: 7,
    kargoDurumu: "Teslim Edildi",
  },
  {
    id: 9,
    ad: "Fatma Şahin",
    email: "fatma.sahin@example.com",
    telefon: "555-456-7890",
    siparişSayısı: 2,
    kargoDurumu: "Hazırlanıyor",
  },
  {
    id: 10,
    ad: "Ali Can",
    email: "ali.can@example.com",
    telefon: "555-567-8901",
    siparişSayısı: 4,
    kargoDurumu: "Kargoya Verildi",
  },
];

const SatıcıKargolar = () => {
  const [müşteriler, setMüşteriler] = useState(initialMüşteriler);

  // Kargo durumunu güncelleme işlemi
  const kargoDurumuGüncelle = (id: number, yeniDurum: string) => {
    setMüşteriler(
      müşteriler.map((müşteri) =>
        müşteri.id === id ? { ...müşteri, kargoDurumu: yeniDurum } : müşteri
      )
    );
  };

  return (
    <div>
      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Kargolar</h1>

        {/* Kargo Listesi */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b border-gray-500">
            <div className="grid grid-cols-5 gap-4 font-semibold">
              <div>Müşteri Adı</div>
              <div>Email</div>
              <div>Telefon</div>
              <div>Sipariş Sayısı</div>
              <div>Kargo Durumu</div>
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
                <div>{müşteri.telefon}</div>
                <div>{müşteri.siparişSayısı}</div>
                <div>
                  <select
                    value={müşteri.kargoDurumu}
                    onChange={(e) =>
                      kargoDurumuGüncelle(müşteri.id, e.target.value)
                    }
                    className="p-1 border rounded"
                  >
                    <option value="Hazırlanıyor">Hazırlanıyor</option>
                    <option value="Kargoya Verildi">Kargoya Verildi</option>
                    <option value="Teslim Edildi">Teslim Edildi</option>
                    <option value="İptal Edildi">İptal Edildi</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SatıcıKargolar;
