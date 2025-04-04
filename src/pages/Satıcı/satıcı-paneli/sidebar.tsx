import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const SatıcıSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error("Çıkış hatası:", err);
    }
  };

  return (
    <div className="w-64 bg-[#8B3098] min-h-screen p-4 text-white">
      <h2 className="text-2xl font-bold mb-6">Satıcı Paneli</h2>
      <ul className="space-y-4">
        <li className="mt-10">
          <Link to="/satıcı/panel/gösterge" className="hover:text-gray-300">
            Gösterge
          </Link>
        </li>
        <li className="mt-10">
          <Link to="/satıcı/panel/ürünler" className="hover:text-gray-300">
            Ürünler
          </Link>
        </li>
        <li className="mt-10">
          <Link to="/satıcı/panel/kategoriler" className="hover:text-gray-300">
            Kategoriler
          </Link>
        </li>
        <li className="mt-10">
          <Link to="/satıcı/panel/siparişler" className="hover:text-gray-300">
            Siparişler
          </Link>
        </li>
        <li className="mt-10">
          <Link to="/satıcı/panel/müşteriler" className="hover:text-gray-300">
            Müşteriler
          </Link>
        </li>
        <li className="mt-10">
          <Link to="/satıcı/panel/kargolar" className="hover:text-gray-300">
            Kargolar
          </Link>
        </li>
      </ul>
      <button onClick={handleLogout} className="mt-10">
        Ana sayfa
      </button>
    </div>
  );
};

export default SatıcıSidebar;
