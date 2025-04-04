import Sidebar from "./sidebar";

const MüşteriSiparişler = () => {
  const siparişler = [
    {
      id: 1,
      siparişNo: "12345",
      tarih: "10 Mart 2025",
      durum: "Teslim Edildi",
      ürünler: [
        { name: "Ürün 1", price: 100, quantity: 1 },
        { name: "Ürün 2", price: 200, quantity: 2 },
      ],
      toplamFiyat: 500,
    },
    {
      id: 2,
      siparişNo: "12346",
      tarih: "10 Mart 2025",
      durum: "Kargoda",
      ürünler: [
        { name: "Ürün 3", price: 150, quantity: 1 },
        { name: "Ürün 4", price: 300, quantity: 1 },
      ],
      toplamFiyat: 450,
    },
    {
      id: 3,
      siparişNo: "12347",
      tarih: "10 Mart 2025",
      durum: "Hazırlanıyor",
      ürünler: [
        { name: "Ürün 5", price: 250, quantity: 1 },
        { name: "Ürün 6", price: 100, quantity: 3 },
      ],
      toplamFiyat: 550,
    },
  ];

  return (
    <div className="flex m-[0_200px_0_200px] bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Siparişlerim</h1>

        {/* Sipariş Listesi */}
        <div className="space-y-6">
          {siparişler.map((sipariş) => (
            <div key={sipariş.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  Sipariş No: {sipariş.siparişNo}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    sipariş.durum === "Teslim Edildi"
                      ? "bg-green-100 text-green-800"
                      : sipariş.durum === "Kargoda"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {sipariş.durum}
                </span>
              </div>
              <p className="text-gray-600 mb-4">Tarih: {sipariş.tarih}</p>

              {/* Ürünler */}
              <div className="space-y-2 mb-4">
                {sipariş.ürünler.map((ürün, index) => (
                  <div key={index} className="flex justify-between">
                    <p>
                      {ürün.name} (x{ürün.quantity})
                    </p>
                    <p>{ürün.price * ürün.quantity} TL</p>
                  </div>
                ))}
              </div>

              {/* Toplam Fiyat */}
              <div className="flex justify-between border-t pt-4">
                <p className="font-semibold">Toplam:</p>
                <p className="font-semibold">{sipariş.toplamFiyat} TL</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MüşteriSiparişler;
