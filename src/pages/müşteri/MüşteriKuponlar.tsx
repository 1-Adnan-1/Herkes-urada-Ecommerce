import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Sidebar from "./sidebar";

const MüşteriKuponlar = () => {
  const [user, setUser] = useState(null);
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      code: "HOŞGELDİN10",
      discount: "10%",
      validUntil: "31 Aralık 2023",
    },
    { id: 2, code: "BAHAR20", discount: "20%", validUntil: "30 Nisan 2024" },
    { id: 3, code: "YAZ15", discount: "15%", validUntil: "31 Ağustos 2024" },
    { id: 4, code: "SONBAHAR25", discount: "25%", validUntil: "30 Kasım 2024" },
    { id: 5, code: "KIŞ30", discount: "30%", validUntil: "28 Şubat 2025" },
    { id: 6, code: "YILBAŞI50", discount: "50%", validUntil: "1 Ocak 2025" },
  ]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDeleteCoupon = (id) => {
    setCoupons(coupons.filter((coupon) => coupon.id !== id));
  };

  return (
    <div className="flex m-[0_200px_0_200px] bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Kuponlarım</h1>

        {/* Kupon Listesi */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Kullanılabilir Kuponlar
          </h2>
          <div className="space-y-4">
            {coupons.map((coupon) => (
              <div
                key={coupon.id}
                className="border-b pb-4 flex justify-between items-center"
              >
                <div>
                  <p>
                    <strong>Kupon Kodu:</strong> {coupon.code}
                  </p>
                  <p>
                    <strong>İndirim:</strong> {coupon.discount}
                  </p>
                  <p>
                    <strong>Geçerlilik Tarihi:</strong> {coupon.validUntil}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Kullan
                  </button>
                  <button
                    onClick={() => handleDeleteCoupon(coupon.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MüşteriKuponlar;
