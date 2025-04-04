import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const TwoSlider = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        setProducts(data.products.slice(0, 5));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [products]);

  return (
    <div
      className="relative w-full max-w-xl h-[270px] bg-cover bg-center py-17 rounded-2xl overflow-hidden"
      style={{
        backgroundImage: "url('../../public/s-image/s-2.jpeg')",
      }}
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full flex-shrink-0 flex justify-center items-center bg-white rounded-lg shadow-lg mx-1 my-14"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-35 -ml-34 h-35 object-contain rounded-md"
            />
            <div className=" flex flex-col justify-center ">
              <h3 className="text-lg font-bold ml-10">{product.title}</h3>
              <p className="text-sm text-gray-600 ml-10">
                {product.description}
              </p>
              <p className="text-xl font-semibold mt-2 ml-10">
                {product.price} TL
              </p>
              <button className=" my-1 text-black py-1 rounded-lg border-2 border-[#CCCCCC] w-40 ml-10">
                Fırsatı Kaçırma
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &gt;
      </button>
      <div className="absolute bottom-2 right-2 px-2 py-0 bg-[#0006] text-white text-sm rounded-xl">
        {currentIndex + 1} / {products.length}
      </div>
    </div>
  );
};

export default TwoSlider;
