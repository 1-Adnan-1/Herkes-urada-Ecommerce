import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import SatıcıSidebar from "../satıcı-paneli/sidebar";

const SatıcıKategoriler = () => {
  const [categories, setCategories] = useState<Record<string, any>>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(1); // Her sayfada 1 ana kategori göster

  // categories.json'dan verileri çekme
  useEffect(() => {
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  // Sayfalama için gerekli hesaplamalar
  const pageCount = Math.ceil(Object.keys(categories).length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentCategories = Object.keys(categories).slice(
    offset,
    offset + itemsPerPage
  );

  // Sayfa değişikliğini yönetme
  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div>
      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Kategoriler</h1>

        {/* Ana Kategoriler */}
        {currentCategories.map((mainCategory) => (
          <div key={mainCategory} className="mb-8">
            <h2 className="text-xl font-semibold mb-4 capitalize">
              {mainCategory.replace(/,/g, ", ")}
            </h2>

            {/* Alt Kategoriler */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories[mainCategory].map(
                (subCategory: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-medium mb-2">
                      {subCategory.title}
                    </h3>
                    <ul className="list-disc list-inside">
                      {subCategory.items.map((item: string, i: number) => (
                        <li key={i} className="text-gray-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        ))}

        {/* Sayfalama */}
        <div className="cursor-pointer">
          <ReactPaginate
            previousLabel={"Önceki"}
            nextLabel={"Sonraki"}
            breakLabel={"..."}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"flex justify-center mt-8 space-x-2"}
            pageClassName={"px-4 py-2 border rounded"}
            activeClassName={"bg-blue-600 text-white"}
            previousClassName={"px-4 py-2 border rounded"}
            nextClassName={"px-4 py-2 border rounded"}
            disabledClassName={"opacity-50 cursor-not-allowed"}
          />
        </div>
      </div>
    </div>
  );
};

export default SatıcıKategoriler;
