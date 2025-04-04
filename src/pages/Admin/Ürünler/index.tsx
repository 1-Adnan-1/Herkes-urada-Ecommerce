import { useState, useEffect } from "react";
import Navbar from "../navbar";
import ReactPaginate from "react-paginate";
import { v4 as uuidv4 } from "uuid";
import { FaTrash } from "react-icons/fa"; // Sil butonu için ikon

const Ürünler = () => {
  // Ürün verilerini state'te tutuyoruz
  const [products, setProducts] = useState([]);
  // Sayfalama için state'ler
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Her sayfada gösterilecek ürün sayısı

  // Yeni ürün eklemek için state
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    stars: 0,
    price: 0,
    category: "",
    image: "",
    seller: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ürünleri db.json'dan çekiyoruz
  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  // Sayfa değişikliği fonksiyonu
  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  // Mevcut sayfadaki ürünleri hesapla
  const offset = currentPage * itemsPerPage;
  const currentProducts = products.slice(offset, offset + itemsPerPage);

  // Yeni ürün ekleme fonksiyonu
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = uuidv4(); // UUID ile benzersiz ID oluştur
    const productToAdd = { id: newId, ...newProduct };

    // Ürünü listeye ekle
    setProducts([productToAdd, ...products]);

    // Ürünü db.json'a ekle (API'ye istek at)
    fetch("/db.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productToAdd),
    })
      .then((response) => response.json())
      .then((data) => console.log("Ürün eklendi:", data))
      .catch((error) => console.error("Ürün ekleme hatası:", error));

    // Formu temizle ve modal'ı kapat
    setNewProduct({
      title: "",
      description: "",
      stars: 0,
      price: 0,
      category: "",
      image: "",
      seller: "",
    });
    setIsModalOpen(false);
  };

  // Ürün silme fonksiyonu
  const handleDeleteProduct = (id: string) => {
    // Ürünü listeden sil
    setProducts(products.filter((product) => product.id !== id));

    // Ürünü db.json'dan sil (API'ye istek at)
    fetch(`/db.json/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log("Ürün silindi:", data))
      .catch((error) => console.error("Ürün silme hatası:", error));
  };

  return (
    <div className="flex m-[0_200px_0_200px] min-h-screen bg-[#F3F4F7]">
      {/* Navbar */}
      <div className="w-64 h-screen bg-white shadow-md">
        <Navbar />
      </div>

      {/* Ürünler Listesi */}
      <div className="flex-1 p-6 m-[0_100px_0_100px]">
        <h2 className="text-2xl font-semibold text-center mb-0">Ürünler</h2>

        {/* Yeni Ürün Ekle Butonu */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-2 -mt-20 bg-blue-500 text-white p-2 rounded-md"
        >
          Yeni Ürün Ekle
        </button>

        {/* Ürün Listesi */}
        <div className="space-y-4">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
            >
              {/* Ürün Resmi */}
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              {/* Ürün Detayları */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">★ {product.stars}</span>
                  <span className="text-gray-600">| {product.price} TL</span>
                  <span className="text-gray-600">| {product.category}</span>
                  <span className="text-gray-600">
                    | Satıcı: {product.seller}
                  </span>
                </div>
              </div>
              {/* Sil Butonu */}
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="bg-red-500 text-white p-2 rounded-md flex items-center gap-2"
              >
                <FaTrash /> Sil
              </button>
            </div>
          ))}
        </div>

        {/* Sayfalama */}
        <ReactPaginate
          previousLabel={"Önceki"}
          nextLabel={"Sonraki"}
          breakLabel={"..."}
          pageCount={Math.ceil(products.length / itemsPerPage)}
          onPageChange={handlePageClick}
          containerClassName={
            "flex cursor-pointer justify-center mt-6 space-x-2"
          }
          pageClassName={"px-3 py-1 border rounded-md"}
          activeClassName={"bg-blue-500 text-white"}
          previousClassName={"px-3 py-1 border rounded-md"}
          nextClassName={"px-3 py-1 border rounded-md"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
        />

        {/* Yeni Ürün Ekleme Modal'ı */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-[#000000c6]  flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
              <h2 className="text-xl font-semibold mb-4">Yeni Ürün Ekle</h2>
              <form onSubmit={handleAddProduct} className="space-y-4">
                <input
                  type="text"
                  placeholder="Başlık"
                  value={newProduct.title}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, title: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Açıklama"
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="number"
                  placeholder="Yıldız Puanı"
                  value={newProduct.stars}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      stars: parseFloat(e.target.value),
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="number"
                  placeholder="Fiyat"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      price: parseFloat(e.target.value),
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Kategori"
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Resim URL"
                  value={newProduct.image}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, image: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Satıcı"
                  value={newProduct.seller}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, seller: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-500 text-white p-2 rounded-md"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md"
                  >
                    Ekle
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ürünler;
