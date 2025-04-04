import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase"; // Firebase auth import edildi
import { signOut } from "firebase/auth"; // Firebase signOut import edildi
import { useEffect } from "react"; // useEffect import edildi

const Gösterge = () => {
  const navigate = useNavigate();
  const user = auth.currentUser; // Giriş yapan kullanıcı bilgisi

  // Kullanıcı giriş yapmamışsa giriş sayfasına yönlendir
  useEffect(() => {
    if (!user) {
      navigate("/satıcı/giriş");
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Çıkış yap
      navigate("/satıcı/giriş");
    } catch (error) {
      console.error("Çıkış yapılırken hata oluştu:", error);
    }
  };

  const gelirVerileri = [
    ["Ay", "Gelir"],
    ["Ocak", 10000],
    ["Şubat", 15000],
    ["Mart", 20000],
    ["Nisan", 25000],
    ["Mayıs", 30000],
  ];

  const sonSiparişler = [
    {
      id: "#245",
      müşteri: "Ahmet Yılmaz",
      durum: "Teslim Edildi",
      tarih: "2025 / 01 / 29",
    },
    {
      id: "#244",
      müşteri: "Mehmet Kaya",
      durum: "Kargoda",
      tarih: "2025 / 12 / 10",
    },
    {
      id: "#243",
      müşteri: "Ayşe Demir",
      durum: "Hazırlanıyor",
      tarih: "2025 / 10 / 07",
    },
    {
      id: "#242",
      müşteri: "Fatma Şahin",
      durum: "İptal Edildi",
      tarih: "2025 / 10 / 04",
    },
  ];

  return (
    <div>
      {/* Sağ Üst Köşe: Hesap Bilgileri ve Çıkış Butonu */}
      {user && (
        <div className="absolute top-4 right-60 flex items-center space-x-4">
          <div className="text-right">
            <p className="font-semibold">{user.displayName || user.email}</p>
            <p className="text-sm text-gray-500">Satıcı Paneli</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Çıkış Yap
          </button>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6">Gösterge Paneli</h2>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Toplam Gelir</h3>
          <p className="text-3xl font-bold text-blue-600">₺120.000</p>
          <p className="text-sm text-gray-500">Geçen aya göre %15 artış</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Satılan Ürün</h3>
          <p className="text-3xl font-bold text-green-600">245</p>
          <p className="text-sm text-gray-500">Geçen aya göre %10 artış</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Toplam Müşteri</h3>
          <p className="text-3xl font-bold text-yellow-600">1.200</p>
          <p className="text-sm text-gray-500">Geçen aya göre %5 artış</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Kargodaki Ürün</h3>
          <p className="text-3xl font-bold text-purple-600">45</p>
          <p className="text-sm text-gray-500">Geçen aya göre %8 artış</p>
        </div>
      </div>

      {/* Hızlı Erişim Butonları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <button className="bg-white p-6 rounded-lg shadow-md text-left hover:bg-gray-50 transition-colors">
          <h3 className="text-xl font-semibold mb-2">Yeni Ürün Ekle</h3>
          <p className="text-gray-500">Ürünlerinizi hızlıca ekleyin.</p>
        </button>
        <button className="bg-white p-6 rounded-lg shadow-md text-left hover:bg-gray-50 transition-colors">
          <h3 className="text-xl font-semibold mb-2">Siparişleri Görüntüle</h3>
          <p className="text-gray-500">Son siparişleri inceleyin.</p>
        </button>
        <button className="bg-white p-6 rounded-lg shadow-md text-left hover:bg-gray-50 transition-colors">
          <h3 className="text-xl font-semibold mb-2">Müşteri Yorumları</h3>
          <p className="text-gray-500">Müşteri geri bildirimlerini okuyun.</p>
        </button>
        <button className="bg-white p-6 rounded-lg shadow-md text-left hover:bg-gray-50 transition-colors">
          <h3 className="text-xl font-semibold mb-2">Kampanya Oluştur</h3>
          <p className="text-gray-500">Yeni kampanyalar başlatın.</p>
        </button>
      </div>

      {/* Son Siparişler */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Son Siparişler</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left py-2">Sipariş No</th>
                <th className="text-left py-2">Müşteri</th>
                <th className="text-left py-2">Durum</th>
                <th className="text-left py-2">Tarih</th>
              </tr>
            </thead>
            <tbody>
              {sonSiparişler.map((sipariş) => (
                <tr key={sipariş.id} className="border-t border-gray-300">
                  <td className="py-3">{sipariş.id}</td>
                  <td className="py-3">{sipariş.müşteri}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        sipariş.durum === "Teslim Edildi"
                          ? "bg-green-100 text-green-600"
                          : sipariş.durum === "Kargoda"
                          ? "bg-blue-100 text-blue-600"
                          : sipariş.durum === "Hazırlanıyor"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {sipariş.durum}
                    </span>
                  </td>
                  <td className="py-3">{sipariş.tarih}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Gelir Grafiği */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Aylık Gelir Grafiği</h3>
        <Chart
          width="100%"
          height="400px"
          chartType="LineChart"
          loader={<div>Grafik yükleniyor...</div>}
          data={gelirVerileri}
          options={{
            hAxis: {
              title: "Ay",
            },
            vAxis: {
              title: "Gelir (₺)",
            },
            legend: { position: "none" },
          }}
        />
      </div>
    </div>
  );
};

export default Gösterge;
