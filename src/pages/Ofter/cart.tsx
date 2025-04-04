const Cart = () => {
  const adImages = [
    { id: 1, src: "./h-image/h-r-5.jpeg" },
    { id: 2, src: "./h-image/h-r-3.jpeg" },
    { id: 3, src: "./h-image/h-r-1.jpeg" },
    { id: 4, src: "./h-image/h-r-4.jpeg" },
    { id: 5, src: "./h-image/h-r-2.jpeg" },
    { id: 6, src: "./h-image/h-r-3.jpeg" },
    { id: 7, src: "./h-image/h-r-5.jpeg" },
    { id: 8, src: "./h-image/h-r-2.jpeg" },
    { id: 9, src: "./h-image/h-r-4.jpeg" },
    { id: 10, src: "./h-image/h-r-1.jpeg" },
    { id: 11, src: "./h-image/h-r-5.jpeg" },
    { id: 12, src: "./h-image/h-r-4.jpeg" },
    { id: 13, src: "./h-image/h-r-3.jpeg" },
    { id: 14, src: "./h-image/h-r-2.jpeg" },
    { id: 15, src: "./h-image/h-r-1.jpeg" },
  ];
  return (
    <div>
      <div className="min-h-screen p-8 mb-20 mt-20">
        <div className="max-w-full m-[0_200px_0_200px] ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-10">
            {adImages.map((ad) => (
              <div
                key={ad.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={ad.src}
                  alt={`Reklam ${ad.id}`}
                  className="w-full h-50 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
