import FooterBottom from "./footer-bottom";

const Footer = () => {
  const footerData = {
    kategoriler: {
      title: "Kategoriler",
      items: [
        "Bilgisayar / Tablet / Telefon / Laptop",
        "Kombi / Klimalar",
        "Çamaşır Makinesi / Bulaşık Makinesi",
        "Gram Altın / Reşat Altın / Yarım Altın",
        "Ayçiçek Yağları",
        "Süpürgeler / Robot Süpürge",
        "Airsoft / Fritozler",
        "Kitap / Film / Müzik",
        "Anneler Günü",
      ],
    },
    populerTelefonlar: {
      title: "Popüler Telefonlar",
      items: [
        "Tüm Akıllı Telefonlar",
        "Xiaomi Android Telefonlar",
        "Samsung Android Telefonlar / Samsung Galaxy S25",
        "Android Telefonlar",
        "iPhone iOS Telefonlar",
        "iPhone 16 / iPhone 16 Plus",
        "iPhone 16 Pro / iPhone 16 Pro Max",
        "iPhone 14 / iPhone 14 Plus",
        "iPhone 14 Pro / iPhone 14 Pro Max",
      ],
    },
    giyimModa: {
      title: "Giyim - Moda",
      items: [
        "Erkek Kazak / Kadın Kazak",
        "Erkek Mont / Kadın Mont",
        "Erkek Bot / Kadın Bot",
        "Kadın Ayakkabı / Ayakkabı",
        "Spor Ayakkabı",
        "Sweatshirt / Kadın Sweatshirt",
        "Takım Elbise / Elbise",
        "Abiye Elbise",
        "Çanta / Etek / Tunik / Trençkot",
      ],
    },
    populerMarkalar: {
      title: "Popüler Markalar",
      items: [
        "Avon",
        "Samsung",
        "Adidas",
        "Nike",
        "Apple",
        "Vestel",
        "Bosch",
        "New Balance",
        "Defacto",
        "Lacoste",
        "Asus",
      ],
    },
    taraftarUrunleri: {
      title: "Taraftar Ürünleri",
      items: [
        "Beşiktaş Ürünleri",
        "Trabzonspor Ürünleri",
        "Galatasaray Ürünleri",
        "Fenerbahçe Ürünleri",
      ],
    },
    ozelSayfalar: {
      title: "Özel Sayfalar",
      items: [
        "Hepsiburada Sözü",
        "Premium",
        "Okul Alışverişi",
        "Black Friday",
        "Efsane Kasım",
        "Vergisiz Bilgisayar",
        "Vergisiz Telefon",
        "Sevgililer Günü",
        "Anneler Günü",
        "Yılbaşı Hediyeleri",
        "Babalar Günü",
      ],
    },
  };

  return (
    <footer className="bg-white pt-10 pb-6 px-4 border-t border-[#DADADA]">
      <div className="max-w-7xl mx-auto p-2 mb-10 pt-6 border-b border-[#dadada]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img src="/kargo.png" alt="" className="w-12 h-12" />
            </div>
            <div>
              <h4 className="font-medium text-lg">Yarın Kapında</h4>
              <p className="text-sm text-gray-600">
                Yarın Kapında ile ihtiyaçlarına ertesi gün sahip ol
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img src="/secure.png" alt="" className="w-12 h-12" />
            </div>
            <div>
              <h4 className="font-medium text-lg">
                Tek Tıkla Güvenli Alışveriş
              </h4>
              <p className="text-sm text-gray-600">
                Ödeme ve adres bilgilerinizi kaydedin, güvenli alışveriş yapın.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img src="/mobil.png" alt="" className="w-12 h-12" />
            </div>
            <div>
              <h4 className="font-medium text-lg">Mobil Cebinizde</h4>
              <p className="text-sm text-gray-600">
                Dilediğiniz her yerden güvenli alışverişin keyfini çıkarın.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img src="/kapıda.png" alt="" className="w-12 h-12" />
            </div>
            <div>
              <h4 className="font-medium text-lg">Kapında İade</h4>
              <p className="text-sm text-gray-600">
                Aldığınız ürünü iade etmek hiç bu kadar kolay olmamıştı.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-10">
        {Object.values(footerData).map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-gray-900 mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
