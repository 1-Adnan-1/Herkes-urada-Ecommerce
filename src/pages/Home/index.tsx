import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/productSlice";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import Advert from "./Advert_cart";
import Slider from "./slider";
import OfterCart from "../Ofter/cart";
import { Link } from "react-router-dom";
import Description from "../../components/Description";
import Footer from "../../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        dispatch(setProducts(data.products));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleToggleFavorite = (product: any) => {
    if (favorites.includes(product.id)) {
      setFavorites(favorites.filter((id) => id !== product.id));
    } else {
      setFavorites([...favorites, product.id]);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    const matchesSearch = searchTerm
      ? product.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <Advert />
      <Slider />
      <div className="w-[100rem] flex justify-center items-center ml-40">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 p-4 mt-20">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id}>
                <Cart
                  product={product}
                  onToggleFavorite={handleToggleFavorite}
                  isFavorite={favorites.includes(product.id)}
                />
                {product.id % 10 === 0 &&
                  product.id !== products.length - 1 && <div></div>}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-lg text-gray-600">
              {selectedCategory || searchTerm
                ? `"${selectedCategory || searchTerm}" için ürün bulunamadı.`
                : "Lütfen bir kategori veya arama terimi girin."}{" "}
            </div>
          )}
        </div>
      </div>
      <div className="max-w-full m-[0_29px_0_44px]">
        <Link to="/ofter">
          <OfterCart />
        </Link>
      </div>
      <Description />
      <Footer />
    </>
  );
};

export default Home;
