import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { PiHouseLineLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import Footer from "../../components/Footer";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stars: string;
  seller: string;
}

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        const foundProduct = data.products.find(
          (p: Product) => p.id === parseInt(id)
        );
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: uuidv4(),
          productId: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          image: product.image,
          seller: product.seller,
        })
      );
      toast.success("Ürün sepete eklendi!");
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const renderStars = (stars: string) => {
    const starCount = parseFloat(stars);
    const fullStars = Math.floor(starCount);
    const hasHalfStar = starCount % 1 !== 0;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {hasHalfStar && <FaStar className="text-yellow-500" />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
          <FaStar key={index} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto my-5 flex gap-8 ">
        <div className="w-1/2 relative">
          <div className="absolute -top-2 left-0 bg-opacity-75 p-2 rounded-md flex gap-3 items-center">
            <Link to="..">
              <PiHouseLineLight size={20} />
            </Link>
            <MdOutlineKeyboardArrowRight />
            <p className="text-sm">{product.category}</p>
            <MdOutlineKeyboardArrowRight />
            <p className="text-sm font-medium">{product.title}</p>
          </div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[500px] p-7 mt-10 object-contain rounded-md border-[#DADADA] border-1"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mt-9">{product.title}</h1>
          <p className="text-gray-600 mt-1">{product.description}</p>
          <div className="flex items-center mt-4 gap-3">
            <p>{product.stars}</p>
            {renderStars(product.stars)}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className=" flex justify-center px-1 mt-2 -ml-1 gap-1 border border-[#d5d5d5] rounded-md ">
              <span className="text-[#AAAAAA] font-bold">Satıcı:</span>
              <span className="text-[#FF6000] font-semibold">
                {product.seller}
              </span>
            </div>
            <div className="border border-[#d5d5d5d5] rounded-md mt-2 px-1">
              <span className="text-sm font-medium">Takip et</span>
            </div>
          </div>
          <div className="mt-4">
            <img
              className="w-[80px] h-[80px] border rounded-md border-[#DADADA]"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="flex items-center mt-6">
            <span className="text-2xl font-semibold text-green-600">
              {product.price} TL
            </span>
            <span className="text-lg line-through text-gray-500 ml-4">
              5555,90 TL
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300 w-[300px]"
          >
            Sepete Ekle
          </button>
          <div className="bg-[#e7e7e7] mt-5 px-4 pb-5 max-w-[300px] rounded">
            <div className="flex flex-col items-start justify-between">
              <p className="text-md font-bold mt-1">Teslimat Seçenekleri</p>
              <div className="flex items-center gap-2 flex-col">
                <p className="text-sm flex gap-2 items-center mt-3">
                  <BsTruck />
                  Tahmini <span className="font-semibold">../../.. </span> günü
                  kargoda
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-sm px-1 bg-[#FFEFE5] text-[#FF6000]">
                    Standart Teslimat
                  </span>
                  <h4 className="text-[#ff6000] text-[17px]">
                    Hepsi <span className="text-[#7054A4]">JET</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
