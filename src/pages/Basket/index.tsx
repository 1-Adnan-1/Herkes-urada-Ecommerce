import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Header from "./Header";

import { FiMinus } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Footer from "../../components/Footer";

const Basket = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeFromCart(itemId));
    toast.success("Ürün sepetten silindi!");
  };

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto p-4 mt-8 mb-20">
        <h1 className="text-2xl flex justify-center font-bold mb-4">
          Sepetiniz
        </h1>
        {cartItems.length === 0 ? (
          <div className="text-center mt-15">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm max-w-md mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="text-lg text-gray-600 mt-4 mb-6">Sepetiniz boş.</p>
              <Link
                to="/"
                className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition-colors duration-300"
              >
                Alışverişe Devam Et
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product List */}
            <div className="flex-1">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-100 shadow-sm px-4 py-4 mb-9"
                >
                  <div className="flex items-start gap-4 w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-contain rounded"
                    />
                    <div className="flex-1">
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="text-sm text-gray-500">
                        Satıcı: {item.seller || "Satıcı Bilgisi Yok"}
                      </p>
                      <div className="flex items-center mt-5 border border-[#DADADA] rounded-full w-25 justify-center py-1">
                        <button
                          onClick={() => {
                            if (item.quantity === 1) {
                              handleRemoveFromCart(item.id);
                            } else {
                              dispatch(decreaseQuantity(item.id));
                            }
                          }}
                          className="text-orange-500 hover:text-orange-600"
                        >
                          {item.quantity === 1 ? (
                            <FaRegTrashAlt />
                          ) : (
                            <FiMinus />
                          )}
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className=" px-1 py-0 rounded-r text-orange-500"
                        >
                          <FaPlus size={13} />
                        </button>
                      </div>
                    </div>
                    <div className="text-lg font-semibold mt-20 mr-3">
                      {item.price * item.quantity} TL
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="w-full lg:w-96 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Sipariş Özeti</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Toplam Tutar</span>
                  <span className="font-semibold">
                    {totalPrice.toFixed(2)} TL
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Kargo</span>
                  <span className="font-semibold">Ücretsiz</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span>Genel Toplam</span>
                    <span className="font-bold text-lg">
                      {totalPrice.toFixed(2)} TL
                    </span>
                  </div>
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition-colors duration-300">
                  Alışverişi Tamamla
                </button>
                <Link to=".." className="ml-26 bg-[#EEEEEe] p-2 rounded-full">
                  {" "}
                  Ana Sayfaya Dön
                </Link>
                <p className="text-sm text-gray-500 text-center mt-5">
                  Teslimat tarihi ve kargo bilgileri ödeme adımında
                  gösterilecektir.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Basket;
