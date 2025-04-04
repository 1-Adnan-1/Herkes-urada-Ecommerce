import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const SatıcıÜrünler = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);

  // db.json'dan ürünleri çekme
  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  // Sayfalama için gerekli hesaplamalar
  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Sayfa değişikliğini yönetme
  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Satıcı Ürünleri</h1>

      {/* Ürün Listesi */}
      <ul className="space-y-4">
        {currentItems.map((product) => (
          <li key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-blue-600 font-bold mt-1">₺{product.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Sayfalama */}
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
  );
};

export default SatıcıÜrünler;
