import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Popup = ({
  onClose,
  onLoginSuccess,
  isLoggedIn,
  onLogout,
  userEmail,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Hata mesajını temizle
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Giriş yapıldı:", userCredential.user.email);
      onLoginSuccess(userCredential.user.email); // Giriş başarılıysa e-posta adresini ilet
      onClose(); // Popup'ı kapat
    } catch (error) {
      console.error("Giriş hatası:", error);
      setError("Geçersiz e-posta veya şifre. Lütfen tekrar deneyin."); // Hata mesajını ayarla
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google ile giriş yapıldı:", result.user.email);
      onLoginSuccess(result.user.email); // Giriş başarılıysa e-posta adresini ilet
      onClose(); // Popup'ı kapat
    } catch (error) {
      console.error("Google ile giriş hatası:", error);
      setError("Google ile giriş sırasında bir hata oluştu."); // Hata mesajını ayarla
    }
  };

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      onLogout(); // Çıkış yapıldığında parent component'e bildir
      onClose(); // Popup'ı kapat
    } catch (error) {
      console.error("Çıkış hatası:", error);
    }
  };

  return (
    <div className="absolute top-20 right-37 w-[230px] bg-opacity-50 bg-white shadow-lg border border-gray-300 rounded-md p-4 z-50">
      {isLoggedIn ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-gray-600">
                {userEmail[0].toUpperCase()}
              </span>
            </div>
            <span className="font-bold text-gray-700">{userEmail}</span>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white p-2 rounded-md"
          >
            Çıkış Yap
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onClick={() => setShowPassword(showPassword)}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-6 bottom-12 flex items-center text-gray-500"
          >
            {showPassword ? (
              <IoEyeOutline size={20} />
            ) : (
              <IoEyeOffOutline size={20} />
            )}
          </button>
          <button
            type="submit"
            className="bg-[#FF6000] text-white p-2 rounded-md"
          >
            Giriş Yap
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-100"
          >
            <FcGoogle size={20} /> Google ile Giriş Yap
          </button>
        </form>
      )}
    </div>
  );
};

export default Popup;
