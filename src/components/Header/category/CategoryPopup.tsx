import React from "react";

interface CategoryPopupProps {
  category: string;
  data: { title: string; items: string[] }[];
}

const CategoryPopup: React.FC<CategoryPopupProps> = ({ category, data }) => {
  return (
    <div className="absolute left-0 top-10 bg-white shadow-lg border border-gray-300 w-[800px] hidden group-hover:block p-5">
      <div className="grid grid-cols-3 gap-6">
        {data.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold text-orange-500">{section.title}</h3>
            <ul className="space-y-1 text-gray-700">
              {section.items.map((item, idx) => (
                <li key={idx} className="hover:text-black cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPopup;
