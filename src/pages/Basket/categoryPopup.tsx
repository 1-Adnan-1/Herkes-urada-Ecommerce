import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";

interface Category {
  name: string;
  img: string;
}

const categories: Category[] = [
  { name: "Elektronik", img: "/image/2.bilgisayar.jpeg" },
  { name: "Moda", img: "/image/k-bot.jpeg" },
  { name: "Ev, Yaşam", img: "/image/ahşap-yemek-masası.jpeg" },
  { name: "Bahçe", img: "/image/hortum.jpeg" },
  { name: "Anne, Bebek", img: "/image/bebek-bezi.jpeg" },
  { name: "Spor, Outdoor", img: "/image/dambıl.jpeg" },
  { name: "Kozmetik, Kişisel Bakım", img: "/image/parfüm.jpeg" },
  { name: "Süpermarket", img: "/image/zeytin-yağı.jpeg" },
  { name: "Kitap,Müzik", img: "/image/kitap-2.jpeg" },
];

const CategoryPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      {/* Kategoriler Butonu */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex hover:text-orange-500 items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-700 ml-20"
      >
        <TbCategory size={25} />
        <span>Kategoriler</span>
      </button>

      {/* Tam ekran kaplayan popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-70 flex justify-center items-center z-50">
          {/* İçerik Kutusu */}
          <div className="relative w-full h-full bg-[#efefef] flex flex-col items-center">
            {/* Kapatma Butonu */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 left-10 text-gray-600 hover:text-orange-400 text-3xl"
            >
              <IoClose />
            </button>

            {/* Kategoriler Grid Sistemi */}
            <div className="flex flex-col gap-10 mt-20">
              {/* İlk satır - 5 kategori */}
              <div className="flex justify-center gap-10">
                {categories.slice(0, 5).map((category, index) => (
                  <div
                    key={index}
                    className="bg-white w-50 rounded-lg shadow-md p-6 flex flex-col items-center gap-3 cursor-pointer transition-all border-2 border-transparent hover:border-orange-500"
                  >
                    <img
                      src={category.img}
                      alt={category.name}
                      className="h-25"
                    />
                    <span className="text-lg font-medium text-gray-700">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* İkinci satır - 3 kategori */}
              <div className="flex justify-center gap-10">
                {categories.slice(5, 9).map((category, index) => (
                  <div
                    key={index}
                    className="bg-white w-50 rounded-lg shadow-md p-6 flex flex-col items-center gap-3 cursor-pointer transition-all border-2 border-transparent hover:border-orange-500"
                  >
                    <img
                      src={category.img}
                      alt={category.name}
                      className="h-25"
                    />
                    <span className="text-lg font-medium text-gray-700">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPopup;
