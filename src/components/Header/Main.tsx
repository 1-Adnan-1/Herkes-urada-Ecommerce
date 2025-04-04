import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import Popup from "./popup";
import { getAuth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Main = ({ onCategoryChange, onSearchChange }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const cartItems = useSelector((state: any) => state.cart);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearchChange(term);
  };

  const handleLoginSuccess = (email: string) => {
    setUserEmail(email); // Giriş başarılıysa e-posta adresini ayarla
  };

  const handleLogout = () => {
    setUserEmail(""); // Çıkış yapıldığında e-posta adresini temizle
  };

  // E-posta adresini 13 karakterden sonra kesip üç nokta ekleyen fonksiyon
  const formatEmail = (email: string) => {
    if (email.length > 5) {
      return `${email.substring(0, 5)}...`;
    }
    return email;
  };

  return (
    <div className="w-[1400px] flex justify-end items-center relative">
      {/* Blur efekti için overlay */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-xs z-40" />
      )}
      <div className="flex justify-between items-center py-4 gap-10">
        <span className="flex flex-col">
          <Link to="/">
            <h1 className="logo">herkesşurada</h1>
          </Link>
          <p className="flex ml-[82px] text-sm">
            <span className="text-[#FF6000] font-bold">Premium'u</span> keşfet
          </p>
        </span>

        <div className="flex items-center gap-12 flex-1 ">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Ürün, kategori veya marka ara"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-[400px] border rounded-md p-2 px-4 border-[#FF6000] focus:outline-none relative z-10"
            />
            <div className="absolute top-9.5 left-0.5 w-[396px] h-[3px] flex">
              <div className="w-3/9 h-full bg-orange-500"></div>
              <div className="w-2/9 h-full bg-[#49C7ED]"></div>
              <div className="w-1/9 h-full bg-purple-500"></div>
              <div className="w-1/9 h-full bg-green-600"></div>
              <div className="w-2/9 h-full bg-[#5D196A]"></div>
            </div>
            <button className="absolute right-2 top-2.5 text-white">
              <IoSearch size={20} />
            </button>
          </div>

          <div className="flex items-center text-gray-700 cursor-pointer ml-4">
            <CiLocationOn className="text-xl mr-1 text-orange-600" />
            <div className="flex flex-col text-sm">
              <span>Konum</span>
              <span className="flex items-center gap-3 text-orange-600">
                <span className="text-[#FF6000]">Konum Seç</span>
                <IoIosArrowDown size={13} />
              </span>
            </div>
          </div>

          <div
            className="flex items-center border-2 border-[#919191] rounded-md text-gray-800 py-0.5 px-2 cursor-pointer gap-1 relative z-50"
            onClick={() => setIsPopupOpen(!isPopupOpen)}
          >
            <RiUser3Line className="text-xl mr-1" />
            <div className="flex flex-col">
              {userEmail ? (
                <div className="w-[53px] py-2 mr-4">
                  <span className="font-bold">{formatEmail(userEmail)}</span>
                </div>
              ) : (
                <>
                  <span className="font-bold">giriş yap</span>
                  <span className="font-normal text-sm">Üye ol</span>
                </>
              )}
            </div>
            <span className="ml-1">
              <IoIosArrowDown size={20} />
            </span>
          </div>

          {isPopupOpen && (
            <Popup
              onClose={() => setIsPopupOpen(false)}
              onLoginSuccess={handleLoginSuccess}
              isLoggedIn={!!userEmail}
              onLogout={handleLogout}
              userEmail={userEmail} // E-posta adresini Popup'a ilet
            />
          )}

          <Link
            to="/basket"
            className="flex items-center bg-[#919191] py-3.5 rounded px-6 text-[#FFFFFF]"
          >
            <div className="relative">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-1 text-[#FFFFFF] rounded-full w-4 h-4 flex items-center justify-center text-xs bg-[#919191]">
                {totalItems}
              </span>
            </div>
            <span className="ml-1">Sepetim</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
