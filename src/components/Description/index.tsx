import React, { useState } from "react";

const Description = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-4 m-10">
      <div
        className={`relative overflow-hidden ${
          !isExpanded ? "max-h-24" : "max-h-full"
        }`}
      >
        <p className="text-gray-700 leading-normal">
          <h1 className="text-lg font-bold text-black">
            {" "}
            Alışveriş fırsatları
          </h1>
          <p className="font-medium">
            Türkiye'nin en çok tavsiye edilen e-ticaret markası Herkesşurada,
            2001 yılından bu yana hizmet veriyor. Doğan Holding bünyesinde
            faaliyet gösteren Herkesşurada, yenilikleri ile Türkiye'nin dijital
            alışveriş sektörüne yön veriyor. Online alışveriş deneyimini her
            geçen gün daha kolay hale getiren, dijitalleşen dünyanın gereklerine
            uygun geliştirmelerle sunduğu hizmetleri daha da avantajlı kılan
            Herkesşurada, ziyaretçilerine bol çeşit, uygun fiyat, hızlı teslimat
            ve sürpriz indirimler sunuyor. Bugün 35'ten fazla kategori içinde 20
            milyondan fazla ürün çeşidi bulunduran site, 16 milyondan fazla üye
            ile Türkiye'de e-ticaretin lideri olmanın gururunu yaşıyor. En iyi
            ürünleri en uygun fiyatlarla, en hızlı teslimatla ve müşteri
            memnuniyeti hedefiyle sunan Herkesşurada, büyümeye ve Türkiye'de
            e-ticaret deneyiminin standartlarını her geçen gün yükseltmeye devam
            ediyor.
          </p>
          <h3 className="text-lg font-bold mt-4 text-black">
            Teknolojnin En İyi Markaları Herkesşurada'da
          </h3>
          <p className="font-medium">
            Herkesşurada'un avantajlarla sunduğu elektronik ürünler içinde
            bilgisayar modellerinden cep telefonu ürünlerine, bluetooth kulaklık
            tasarımlarından laptop seçeneklerine, tablet çeşitlerinden akıllı
            saat ürünlerine kadar birçok alternatif yer alıyor. En iyi teknoloji
            markaları, özel ürünleri ve avantajlı ödeme seçenekleri ile
            Herkesşurada'da müşterilerle buluşuyor. Dünyanın en ünlü elektronik
            markalarından Apple iPhone, Huawei, Samsung ve Xiaomi telefon
            modelleri, beyaz eşyanın gözdeleri çamaşır ve bulaşık makineleri,
            küçük ev aletleri sitede sizleri bekliyor. Arnica süpürgelerden
            Hisar Tencere setlerine, Fakir mikser de dahil olmak üzere evinizin
            ihtiyacı bir çok seçenek Herkesşurada'da. Hayatı kolaylaştıran en
            iyi klima modelleri, sıcacık kışlar için soba ve UFO ısıtıcı
            çeşitleri de elektronikler içinde yer alıyor. Ayrıca PlayStation ve
            benzeri oyun konsolu alternatifleri ile en popüler konsol oyunları
            da oyunseverleri bekliyor.
          </p>
          <h3 className="text-lg font-bold mt-4 text-black">
            Modanın Nabzını Tutan Tasarımlar Bir Arada
          </h3>
          <p className="font-medium">
            Herkesşurada modayı yakından takip edenlerin de gözdesi.Hepsimoda
            kategorisinde kadın, erkek, çocuk ve bebek kıyafetlerinin yanı sıra
            ayakkabı, çanta ve aksesuarları sunan site, moda trendlerini
            kullanıcılarına sunuyor. Giyim ihtiyaçlarını en trend ürünleri
            sunarak karşılayan Herkesşurada, günlük giyim alternatiflerinden
            abiyelere, spor giyimden ofis kıyafetlerine kadar farklı ihtiyaçlar
            için çeşit vadediyor. Türkiye'nin ve dünyanın sevilen giyim
            markaları en yeni ürünleriyle sezon modasını gardırobunuza taşıyor.
            Kışlık kadın kaban seçeneklerinden kazaklara, kadın çizme
            tasarımlarından topuklu ayakkabı modellerine, tesettür giyim
            ürünlerinden abiye elbise tasarımlarına kadar aradığınız her şeyi
            Hepsimoda'da bulabilirsiniz. Herkesşurada'nın her bütçeye, her zevke
            uygun giyim ürünleri arasından hem kendi ihtiyaçlarınızı
            karşılayabilir hem de sevdiklerinize hediye alabilirsiniz. Kadın
            ayakkabı ve erkek spor ayakkabı modellerinde zengin ürün yelpazesi
            sunan Herkesşurada, çocukların ihtiyaçları için de doğru adres.
          </p>
          <h3 className="text-lg font-bold mt-4 text-black">
            Evinizi ve İş Yerinizi Baştan Yaratın
          </h3>
          <p className="font-medium">
            Eviniz ve ofisiniz için ihtiyaç duyduğunuz her şeyi bir arada
            bulabileceğiniz Herkesşurada aracılığıyla ev dekorasyon ve ofis
            dekorasyon ürünlerinden ev tekstili tasarımlarına, kırtasiye
            malzemelerinden okul alışverişi için gerekli olan defter ve
            kalemlere kadar her şeyi sipariş verebilirsiniz.Ofis kırtasiye
            gereçlerini hem kendiniz hem de çocuklarınız ve sevdikleriniz için
            alabilirsiniz. Evinizi baştan yaratacak mobilyalardan çocuklarınıza
            resim yapmayı sevdirecek renkli kalemlere kadar her şeyiHerkesşurada
            avantajlarıyla bulabilirsiniz.
          </p>
        </p>
      </div>
      <button
        className="mt-2 font-bold text-gray-900 hover:text-gray-900"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Devamını Gizle" : "Devamını Göster"}
      </button>
    </div>
  );
};

export default Description;
