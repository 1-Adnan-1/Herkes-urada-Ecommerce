import { RiHome6Line } from "react-icons/ri";
import CategoryPopup from "./CategoryPopup";
import categoriesData from "../../../../categories.json"; // JSON dosyasını içe aktar

const Categories = ({ onCategoryChange }) => {
  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
  };

  const handleReset = () => {
    onCategoryChange("");
  };

  return (
    <div>
      {/* Rainbow line at the bottom */}
      <div className="absolute top-56.5 left-0 w-full h-[7px] flex">
        <div className="w-3/9 h-full bg-orange-500"></div>
        <div className="w-2/9 h-full bg-[#49C7ED]"></div>
        <div className="w-1/9 h-full bg-purple-500"></div>
        <div className="w-1/9 h-full bg-green-600"></div>
        <div className="w-2/9 h-full bg-[#5D196A]"></div>
      </div>
      {/* Categories */}
      <div className="flex justify-center items-center whitespace-nowrap bg-gray-100 py-3 border-b border-gray-300 w-full relative">
        <div className="flex justify-center gap-15 w-[65%] text-sm z-10">
          {/* Ev İkonu */}
          <div className="relative group">
            <button
              onClick={handleReset}
              className="hover:text-[#FF6000] px-3 py-1 border-l border-gray-300"
            >
              <RiHome6Line size={23} />
            </button>
          </div>

          {/* Diğer Kategoriler */}
          {Object.keys(categoriesData).map((category) => (
            <div key={category} className="relative group">
              <button
                onClick={() => handleCategoryClick(category)}
                className="hover:text-[#FF6000] px-3 py-1 border-l border-gray-300"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
              <CategoryPopup
                category={category}
                data={categoriesData[category]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
