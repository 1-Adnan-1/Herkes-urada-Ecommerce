import { FaUser, FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex h-screen">
      <nav className="w-64 bg-blue-900 text-white p-6 hidden lg:block">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-xl font-semibold">Yönetici Paneli</h2>
        </div>
        <ul className="space-y-6">
          <Link to="/admin" className="p-2">
            <li className="flex items-center space-x-2 hover:bg-blue-800 p-2 rounded cursor-pointer">
              <FaTachometerAlt />
              <span>Gösterge Paneli</span>
            </li>
          </Link>
          <Link to="/admin/musteriler" className="p-2">
            <li className="flex items-center space-x-2 hover:bg-blue-800 p-2 rounded cursor-pointer">
              <FaUser />
              <span>Müşteriler</span>
            </li>
          </Link>
          <Link to="/admin/satıcılar" className="p-2">
            <li className="flex items-center space-x-2 hover:bg-blue-800 p-2 rounded cursor-pointer">
              <FaUser />
              <span>Satıcılar</span>
            </li>
          </Link>

          <Link to="/admin/ürünler" className="p-2">
            <li className="flex items-center space-x-2 hover:bg-blue-800 p-2 rounded cursor-pointer">
              <AiOutlineProduct />
              <span>Ürünler</span>
            </li>
          </Link>
          <Link to="/" className="p-2">
            <li className="flex items-center space-x-2 hover:bg-blue-800 p-2 rounded cursor-pointer">
              <FaSignOutAlt />
              <span>Çıkış</span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
