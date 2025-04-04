import Navbar from "../navbar";
import { useOutletContext } from "react-router-dom";
import { auth } from "../../../firebase";

const Gösterge = () => {
  const { handleLogout } = useOutletContext<{ handleLogout: () => void }>();
  const user = auth.currentUser; // Kullanıcı bilgilerini al

  return (
    <div>
      <div className="flex h-screen bg-gray-200">
        {/* Sidebar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-1 p-8 bg-gray-100">
          {/* Navbar */}
          <header className="bg-white shadow-lg flex justify-between items-center p-4 mb-6 rounded-lg">
            <h1 className="text-2xl font-semibold">Gösterge Paneli</h1>
            <div className="flex flex-col items-center space-x-4">
              <img
                src="/admin.jpeg"
                alt="Profil"
                className="w-10 h-10 rounded-full"
              />
              <div className="text-sm flex flex-col items-center">
                <span className="font-semibold text-[15px]">{user?.email}</span>
                <button
                  onClick={handleLogout}
                  className="text-white mt-2 bg-red-500 p-1 rounded-md w-26"
                >
                  Çıkış Yap
                </button>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Toplam Kullanıcı</h3>
              <p className="text-4xl font-bold text-blue-600">1.200</p>
              <span className="text-gray-500">Kayıtlı Kullanıcı Sayısı</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Aktif Kullanıcı</h3>
              <p className="text-4xl font-bold text-green-600">850</p>
              <span className="text-gray-500">Son 30 Gün</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Yeni Kullanıcı</h3>
              <p className="text-4xl font-bold text-yellow-600">120</p>
              <span className="text-gray-500">Son 7 Gün</span>
            </div>
          </section>

          {/* Additional Content (Cards, Graphs, etc.) */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Son Aktivite</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-4">Son Kayıtlar</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Bulut</span>
                    <span className="text-gray-500">Katılım: 2 gün önce</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bulut</span>
                    <span className="text-gray-500">Katılım: 3 gün önce</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bulut</span>
                    <span className="text-gray-500">Katılım: 1 hafta önce</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-4">Son Girişler</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Bulut</span>
                    <span className="text-gray-500">
                      Son Giriş: 2 saat önce
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bulut</span>
                    <span className="text-gray-500">
                      Son Giriş: 5 saat önce
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bulut</span>
                    <span className="text-gray-500">Son Giriş: 1 gün önce</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Gösterge;
