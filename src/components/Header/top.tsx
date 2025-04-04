import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div>
      {/* Top Navigation */}
      <div className=" w-[1400px] ">
        <div className="flex justify-end font-bold gap-5 py-1 text-[11px] text-gray-500 mt-2 ">
          <div className=" flex gap-5 mr-35">
            <Link to="/admin">
              <button className="cursor-pointer text-[#000]">
                Admin Paneli
              </button>
            </Link>
            <Link to="/satıcı/giriş">
              <button className="cursor-pointer  text-[#000]">
                Satıcı Paneli
              </button>
            </Link>
            <Link to="/giriş">
              <button className="cursor-pointer  text-[#000]">
                Müşteri Paneli
              </button>
            </Link>
          </div>
          <button className="cursor-pointer">Süper Fiyat, Süper Teklif</button>
          <button className="cursor-pointer">Kampanyalar</button>
          <button className="cursor-pointer">Siparişlerim</button>
          <button className="cursor-pointer">Yurt Dışından</button>

          <button className="cursor-pointer text-[#ff0000]">
            Girişimci Kadınlar
          </button>
          <button className="cursor-pointer">Müşteri Hizmetleri</button>
          <button className="cursor-pointer text-[#ff6f00]">
            herkesşurada Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default Top;
