import { Link } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import CategoryPopup from "./categoryPopup";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center p-4 gap-10">
        <div className="flex items-center">
          <div className="flex flex-col">
            <Link to="/" className="text-3xl font-bold logo">
              herkesşurada
            </Link>
            <Link to="#" className="text-orange-500 font-semibold ml-10">
              Premium'u <span className="text-black">keşfet</span>
            </Link>
          </div>

          {/* Kategoriler Butonu (Popup'ı Açıyor) */}
          <CategoryPopup />
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Ürün, kategori veya marka ara"
              className="w-full min-w-[1070px] bg-[#F0F0F0] rounded-full py-2 px-4 focus:outline-none"
            />
            <div className="absolute top-2.5 right-5">
              <IoSearchOutline size={20} />
            </div>
          </div>
          <Link to="#" className="text-gray-700 flex items-center gap-3">
            <IoReorderThree size={23} /> <span>Siparişlerim</span>
          </Link>
          <Link to="#" className="text-gray-700 flex items-center gap-3">
            <MdOutlineAccountCircle size={23} />
            <span>Hesabım</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
