import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
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
    <div>
      <div className="w-64 bg-[#8B3098] min-h-screen p-4 text-white">
        <Link to="/müşteri/panel" className="  text-2xl font-bold mb-6">
          Müşteri Paneli
        </Link>
        <ul className="space-y-4">
          <li className="mt-10">
            <Link to="/müşteri/kuponlar" className="hover:text-gray-300">
              Kuponlar
            </Link>
          </li>
          <li className="mt-10">
            <Link to="/müşteri/favoriler" className="hover:text-gray-300">
              Favoriler
            </Link>
          </li>
          <li className="mt-10">
            <Link to="/müşteri/mesajlar" className="hover:text-gray-300">
              Mesajlar
            </Link>
          </li>
          <li className="mt-10">
            <Link to="/müşteri/mağazalar" className="hover:text-gray-300">
              Mağazalar
            </Link>
          </li>
          <li className="mt-10">
            <Link to="/müşteri/siparişler" className="hover:text-gray-300">
              Siparişler
            </Link>
          </li>
        </ul>
        <button onClick={handleLogout} className="mt-10">
          Ana sayfa
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
