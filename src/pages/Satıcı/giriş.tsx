import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Header from "../Basket/Header";

const Giriş = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Giriş başarılı! Yönlendiriliyorsunuz...");
      setTimeout(() => navigate("/satıcı/panel"), 2000); // 2 saniye sonra yönlendir
    } catch (err) {
      setError("Geçersiz e-posta veya şifre!");
      toast.error("Giriş başarısız. Lütfen tekrar deneyin.");
      console.error("Giriş hatası:", err);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google ile giriş başarılı! Yönlendiriliyorsunuz...");
      setTimeout(() => navigate("/satıcı/panel"), 2000); // 2 saniye sonra yönlendir
    } catch (err) {
      setError("Google ile giriş başarısız!");
      toast.error("Google ile giriş başarısız. Lütfen tekrar deneyin.");
      console.error("Google giriş hatası:", err);
    }
  };

  return (
    <div>
      <Header />
      <Toaster position="top-right" />
      {/* Main Content */}
      <div className="bg-[#8B3098] mt-10">
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-2 flex items-center text-white">
                <h3 className="text-lg font-medium flex flex-col px-2">
                  herkesşurada
                  <span className="text-xl -mt-2">iş ortağım</span>
                </h3>

                <div className="border-l-2">
                  <p className="mx-2">satıcı paneli</p>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white leading-tight">
                  herkesşurada'da hemen satıcı ol
                  <br />
                  Ürünlerini milyonlarca müşteriye ulaştır!
                </h1>
                <p className="text-xl text-white">
                  Efsane Hoş Geldin Paketi'nden hemen faydalanın.
                </p>
                <div className="flex space-x-4 pt-4">
                  <button
                    onClick={() => setShowLoginForm(true)}
                    className="bg-[#FFEFE5] text-[#ff7000] px-8 py-3 rounded-md font-medium transition-colors"
                  >
                    Satıcı ol
                  </button>
                  <button className="border-2 border-[#FF6000] px-8 py-3 rounded-md font-medium bg-[#FF6000] text-white">
                    Detaylı bilgi
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Benefits */}
            <div className="grid grid-cols-2 gap-1 ml-60">
              <div className="rounded-2xl p-6">
                <div className="text-center space-y-2">
                  <img
                    src="../../../public/images/a-1.jpeg"
                    className="w-30"
                    alt="1"
                  />
                </div>
              </div>
              <div className="rounded-2xl p-6">
                <div className="text-center space-y-2">
                  <img
                    src="../../../public/images/a-2.jpeg"
                    className="w-30"
                    alt="1"
                  />
                </div>
              </div>
              <div className="rounded-2xl p-6">
                <div className="text-center space-y-2">
                  <img
                    src="../../../public/images/a-3.jpeg"
                    className="w-30"
                    alt="1"
                  />
                </div>
              </div>
              <div className="rounded-2xl p-6">
                <div className="text-center space-y-2">
                  <img
                    src="../../../public/images/a-10.jpeg"
                    className="w-30"
                    alt="1"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Giriş Formu */}
      {showLoginForm && (
        <div className="fixed inset-0 bg-[#888888d8] bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-96 relative">
            <button
              onClick={() => setShowLoginForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Satıcı Girişi
            </h2>
            {error && (
              <p className="text-orange-400 mb-4 text-center">{error}</p>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="E-posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white p-2 rounded-md"
              >
                Giriş Yap
              </button>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full bg-gray-100 text-black shadow-md p-2 rounded-md flex items-center justify-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="24"
                  height="24"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                  <path fill="none" d="M0 0h48v48H0z" />
                </svg>
                <span>Google ile Giriş Yap</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Giriş;
