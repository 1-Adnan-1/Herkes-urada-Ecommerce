import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import Header from "../Basket/Header";

const Protected = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Geçersiz e-posta veya şifre!");
      console.error("Giriş hatası:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Çıkış hatası:", err);
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
          {!showLoginForm && (
            <main className="flex flex-col items-center w-full max-w-4xl mt-6">
              <h2 className="text-3xl font-bold text-gray-800">Hoş Geldiniz</h2>
              <p className="text-gray-600 mt-2 text-center max-w-lg">
                Yönetim panelimize giriş yaparak siparişleri kontrol edebilir,
                ürünleri yönetebilir ve müşteri bilgilerini
                görüntüleyebilirsiniz.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <h3 className="text-lg font-semibold">Sipariş Yönetimi</h3>
                  <p className="text-gray-500 text-sm">
                    Siparişleri kontrol edin ve detaylarını yönetin.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <h3 className="text-lg font-semibold">Ürün Yönetimi</h3>
                  <p className="text-gray-500 text-sm">
                    Ürün ekleyin, güncelleyin veya kaldırın.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <h3 className="text-lg font-semibold">Müşteri Yönetimi</h3>
                  <p className="text-gray-500 text-sm">
                    Müşteri bilgilerini inceleyin ve güncelleyin.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowLoginForm(true)}
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Giriş Yap
              </button>
            </main>
          )}

          {showLoginForm && (
            <div className="fixed inset-0 bg-[#aaaaaa8d] flex items-center justify-center">
              <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                  Admin Girişi
                </h2>
                {error && (
                  <p className="text-red-500 mb-4 text-center font-medium">
                    {error}
                  </p>
                )}
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="E-posta"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Şifre
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Şifre"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Giriş Yap
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowLoginForm(false)}
                    className="w-full bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition-colors mt-2"
                  >
                    Vazgeç
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  return <Outlet context={{ handleLogout }} />;
};

export default Protected;
