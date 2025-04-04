const siparişler = [
  {
    id: 1,
    müşteri: "Ahmet Yılmaz",
    ürün: "Kablosuz Kulaklık",
    durum: "beklemede",
    tarih: "2023-10-01",
  },
  {
    id: 2,
    müşteri: "Ayşe Demir",
    ürün: "Erkek Spor Ayakkabı",
    durum: "hazırlanıyor",
    tarih: "2023-10-02",
  },
  {
    id: 3,
    müşteri: "Mehmet Kaya",
    ürün: "Ahşap Yemek Masası",
    durum: "kargoda",
    tarih: "2023-10-03",
  },
  {
    id: 4,
    müşteri: "Fatma Şahin",
    ürün: "Bahçe Salıncağı",
    durum: "teslim edildi",
    tarih: "2023-10-04",
  },
  {
    id: 5,
    müşteri: "Ali Can",
    ürün: "Bebek Bezi 60'lı Paket",
    durum: "iptal edildi",
    tarih: "2023-10-05",
  },
  {
    id: 6,
    müşteri: "Zeynep Akın",
    ürün: "Dizüstü Bilgisayar",
    durum: "beklemede",
    tarih: "2023-10-06",
  },
  {
    id: 7,
    müşteri: "Hakan Yıldırım",
    ürün: "Akıllı Saat",
    durum: "hazırlanıyor",
    tarih: "2023-10-07",
  },
  {
    id: 8,
    müşteri: "Gizem Acar",
    ürün: "Bayan Cüzdan",
    durum: "kargoda",
    tarih: "2023-10-08",
  },
  {
    id: 9,
    müşteri: "Cemal Koç",
    ürün: "Ev Tipi Kahve Makinesi",
    durum: "teslim edildi",
    tarih: "2023-10-09",
  },
  {
    id: 10,
    müşteri: "Melis Kılıç",
    ürün: "Bluetooth Hoparlör",
    durum: "iptal edildi",
    tarih: "2023-10-10",
  },
];

const SatıcıSiparişler = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Siparişler</h1>

        {/* Sipariş Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siparişler.map((sipariş) => (
            <div
              key={sipariş.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-medium mb-2">
                Sipariş #{sipariş.id}
              </h3>
              <p className="text-gray-600">
                <strong>Müşteri:</strong> {sipariş.müşteri}
              </p>
              <p className="text-gray-600">
                <strong>Ürün:</strong> {sipariş.ürün}
              </p>
              <p className="text-gray-600">
                <strong>Tarih:</strong> {sipariş.tarih}
              </p>
              <p className="text-gray-600">
                <strong>Durum:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    sipariş.durum === "beklemede"
                      ? "bg-yellow-100 text-yellow-800"
                      : sipariş.durum === "hazırlanıyor"
                      ? "bg-blue-100 text-blue-800"
                      : sipariş.durum === "kargoda"
                      ? "bg-green-100 text-green-800"
                      : sipariş.durum === "teslim edildi"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {sipariş.durum}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SatıcıSiparişler;
