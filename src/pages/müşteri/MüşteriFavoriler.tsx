import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Sidebar from "./sidebar";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

const MüşteriFavoriler = () => {
  const [user, setUser] = useState(null);
  const favorites = useSelector((state) => state.favorites);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, []);

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  const renderStars = (stars: string) => {
    const starCount = parseFloat(stars);
    const fullStars = Math.floor(starCount);
    const hasHalfStar = starCount % 1 !== 0;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar size={15} key={index} className="text-yellow-500" />
        ))}
        {hasHalfStar && <FaStar className="text-yellow-500" />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
          <FaStar key={index} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="flex m-[0_200px_0_200px] bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Favorilerim</h1>

        {/* Favori Ürünler Listesi */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Favori Ürünler</h2>
          <div className="space-y-4">
            {favoriteProducts.length > 0 ? (
              favoriteProducts.map((product) => (
                <div
                  key={product.id}
                  className="border-b pb-4 flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-20 h-20 object-contain rounded-md"
                    />
                    <div>
                      <p>
                        <strong>Ürün Adı:</strong> {product.title}
                      </p>
                      <p>
                        <strong>Fiyat:</strong> {product.price} TL
                      </p>
                      <p>
                        <strong>Satıcı:</strong> {product.seller}
                      </p>
                      <div className="flex gap-1.5">
                        <p className="underline font-semibold text-[14px]">
                          {product.stars}
                        </p>
                        {renderStars(product.stars)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Favori ürün bulunamadı.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MüşteriFavoriler;
