interface ProductDetailsProps {
  description: string;
  reviews: number;
  questions: number;
  details: {
    color: string;
    transparency: string;
    materialFeatures: string;
    natural: string;
    usage: string;
    productBenefits: string;
    hairCareEffect: string;
    productForm: string;
    form: string;
    gender: string;
    feature: string;
    durability: string;
    stockQuantity: number;
    stockCode: string;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  description,
  reviews,
  questions,
  details,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4 border rounded-lg shadow-md">
      {/* Üst Kısım: Ürün Açıklaması ve Değerlendirmeler */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-red-600">Ürün Açıklaması</h2>
        <div className="flex space-x-4">
          <span className="text-gray-600">
            Değerlendirmeler <span className="text-red-600">({reviews})</span>
          </span>
          <span className="text-gray-600">
            Soru Cevap <span className="text-red-600">({questions})</span>
          </span>
          <button className="text-gray-600 hover:underline">
            İptal ve İade Koşulları
          </button>
        </div>
      </div>

      <p className="text-gray-700 mb-6">{description}</p>

      {/* Ürün Özellikleri Tablosu */}
      <h3 className="text-lg font-semibold mb-2">Ürün Özellikleri</h3>
      <table className="w-full border-collapse text-left">
        <tbody>
          <tr className="border-b">
            <td className="p-2 font-medium">Renk</td>
            <td className="p-2">{details.color}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-medium">Şeffaflık</td>
            <td className="p-2">{details.transparency}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-medium">Malzeme Özellikleri</td>
            <td className="p-2">{details.materialFeatures}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-medium">Doğal</td>
            <td className="p-2">{details.natural}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-medium">Kullanım</td>
            <td className="p-2">{details.usage}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-medium">Ürün Faydaları</td>
            <td className="p-2">{details.productBenefits}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-medium">Saç Bakım Etkisi</td>
            <td className="p-2">{details.hairCareEffect}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-medium">Ürün Formu</td>
            <td className="p-2">{details.productForm}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-medium">Form</td>
            <td className="p-2">{details.form}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-medium">Cinsiyet</td>
            <td className="p-2">{details.gender}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-medium">Özellik</td>
            <td className="p-2">{details.feature}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-medium">Dayanıklılık</td>
            <td className="p-2">{details.durability}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-medium">Stok Adedi</td>
            <td className="p-2">{details.stockQuantity}’den fazla</td>
          </tr>
        </tbody>
      </table>

      {/* Diğer Bilgiler */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Diğer</h3>
        <table className="w-full border-collapse text-left">
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-medium">Yurt Dışı Satış</td>
              <td className="p-2">Yok</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Stok Kodu</td>
              <td className="p-2">{details.stockCode}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Örnek Kullanım
const Table: React.FC = () => {
  const productData: ProductDetailsProps = {
    description:
      "Siveno %100 Doğal Biberiye Suyu Saç Dökülmesi Karşıtı Hızlı Saç Uzatma Etkili Saç Toniği 150 ml. Doğallığı Etko Cosmos Natural ile kanıtlanmış olup, %100 doğal ve hızlı saç uzatma etkisi saçıtır. Tüm saç tipleri için kullanıma uygundur. Günlük kullanıma uygundur. İslak ve kuru saça uygulanabilir. Doğallığı gerektirmeksizin. Kullanımı: Saç köklerine ve saçlara direkt uygulanabilir. En iyi etki için saç derisine ve köklere masaj yaparak kullanılması tavsiye edilir. Cilde direkt olarak kullanılabilir. Durulama gerektirmez. İçerik: Biberiye yağı içerir. Alkol ve boya, Dermatolojik olarak test edilmiştir. CRUELTY FREE sertifikası ile hayvanlar üzerinde test edilmediği kanıtlanmıştır. Geri dönüştürülebilir ambalaj tercih edilmiştir. Doğaya, canlıya ve altmış zarar vermeden üretilmiştir.",
    reviews: 19,
    questions: 12,
    details: {
      color: "Kullanıcı",
      transparency: "TONİK",
      materialFeatures: "Saç Tipi",
      natural: "Dökülen Saçlar, Tüm Saçlar",
      usage: "Koku",
      productBenefits: "Biberiye",
      hairCareEffect: "Saç Dökülmesine Karşı",
      productForm: "Saç Bakımı",
      form: "SPREY",
      gender: "SIVI",
      feature: "Unisex",
      durability: "Isıya Dayanıklı",
      stockQuantity: 10000,
      stockCode: "HBV000088TTF0",
    },
  };

  return <ProductDetails {...productData} />;
};

export default Table;
