import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";

const MüşteriPanel = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate("/"); // Ana sayfaya yönlendir
    } catch (error) {
      console.error("Çıkış yaparken hata oluştu:", error);
    }
  };

  return (
    <div className="flex m-[0_200px_0_200px] bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Müşteri Paneli</h1>

        {/* Müşteri Bilgileri */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Profil Bilgileri</h2>
          <div className="space-y-2">
            <p>
              <strong>Ad Soyad:</strong> {user?.displayName || "Bilgi Yok"}
            </p>
            <p>
              <strong>E-posta:</strong> {user?.email || "Bilgi Yok"}
            </p>
            <p>
              <strong>Telefon:</strong> {user?.phoneNumber || "0 555 555 55 55"}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-1 rounded-md"
          >
            Çıkış Yap
          </button>
        </div>

        {/* Siparişler */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Son Siparişler</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <p>
                <strong>Sipariş No:</strong> #12345
              </p>
              <p>
                <strong>Tarih:</strong> 27 Mart 2025
              </p>
              <p>
                <strong>Durum:</strong> Teslim Edildi
              </p>
            </div>
            <div className="border-b pb-4">
              <p>
                <strong>Sipariş No:</strong> #12346
              </p>
              <p>
                <strong>Tarih:</strong> 02 Nisan 2025
              </p>
              <p>
                <strong>Durum:</strong> Kargoda
              </p>
            </div>
          </div>
        </div>

        {/* Destek */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Destek</h2>
          <p>
            Herhangi bir sorunuz veya sorununuz varsa, lütfen destek ekibimizle
            iletişime geçin.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md">
            Destek Talebi Oluştur
          </button>
        </div>
      </div>
    </div>
  );
};

export default MüşteriPanel;
