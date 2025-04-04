import Sidebar from "./sidebar";

const MüşteriMağazalar = () => {
  const mağazalar = [
    {
      id: 1,
      name: "Moda Dünyası",
      description: "Trend giyim ve aksesuarlar.",
      image: "../../../public/müşteri-images/armani.jpeg",
      link: "#",
    },
    {
      id: 2,
      name: "TeknoMarket",
      description: "En yeni teknoloji ürünleri.",
      image: "../../../public/müşteri-images/tekno-market.jpeg",
      link: "#",
    },
    {
      id: 3,
      name: "Kitap Köşesi",
      description: "Her türlü kitap ve dergi.",
      image: "../../../public/müşteri-images/kitap-köşesi.jpeg",
      link: "#",
    },
    {
      id: 4,
      name: "Ev Dekorasyon",
      description: "Ev dekorasyon ürünleri.",
      image: "../../../public/müşteri-images/dekorasyon.jpeg",
      link: "#",
    },
    {
      id: 5,
      name: "Spor Ekipmanları",
      description: "Spor ve fitness ürünleri.",
      image: "../../../public/müşteri-images/spor.jpeg",
      link: "#",
    },
    {
      id: 6,
      name: "Mutfak Malzemeleri",
      description: "Mutfakta ihtiyacınız olan her şey.",
      image: "../../../public/müşteri-images/fakir.jpeg",
      link: "#",
    },
  ];

  return (
    <div className="flex m-[0_200px_0_200px] bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Mağazalar</h1>

        {/* Mağaza Listesi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mağazalar.map((mağaza) => (
            <div
              key={mağaza.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={mağaza.image}
                alt={mağaza.name}
                className="w-full h-40 object-contain rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{mağaza.name}</h2>
              <p className="text-gray-600 mb-4">{mağaza.description}</p>
              <a
                href={mağaza.link}
                className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block"
              >
                Mağazaya Git
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MüşteriMağazalar;
