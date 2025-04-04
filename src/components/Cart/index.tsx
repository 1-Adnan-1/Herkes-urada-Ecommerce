import React from "react";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toggleFavorite } from "../../redux/favoriteSlice";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  stars: string;
  seller: string;
}

interface CartProps {
  product: Product;
}

const Cart: React.FC<CartProps> = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites);
  const isFavorite = favorites.includes(product.id);

  const truncateDescription = (description: string) => {
    const words = description.split(" ");
    if (words.length > 3) {
      return words.slice(0, 3).join(" ") + "...";
    }
    return description;
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      dispatch(
        addToCart({
          id: uuidv4(),
          productId: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          image: product.image,
        })
      );
      toast.success("Ürün sepete eklendi!");
    } catch (error) {
      toast.error("Ürün sepete eklenemedi!");
    }
  };

  const handleToggleFavorite = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(product.id));
  };

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
    <Link to={`/detail/${product.id}`} className="block">
      <div className="border border-[#E5E5E5] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-[250px] mx-auto relative group">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain rounded-md"
        />
        <div
          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md cursor-pointer"
          onClick={handleToggleFavorite}
        >
          {isFavorite ? (
            <IoMdHeart className="text-red-500" size={20} />
          ) : (
            <IoMdHeartEmpty size={20} />
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold mt-4">{product.title}</h3>
          <h4 className="text-sm font-medium bg-[#dddddd] px-1 rounded mt-1">
            {product.seller}
          </h4>
          <p className="text-sm text-gray-600 mt-1">
            {truncateDescription(product.description)}
          </p>
          <div className="flex gap-1.5">
            <p className="underline font-semibold text-[14px]">
              {product.stars}
            </p>
            {renderStars(product.stars)}
          </div>
          <div className="flex items-center mt-2">
            <span className="text-xl font-semibold">{product.price} TL</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-2 bg-orange-500 text-white py-1 px-13 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Cart;
