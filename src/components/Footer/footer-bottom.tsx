import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { SiApple, SiGoogleplay, SiHuawei } from "react-icons/si";
import TopButton from "../button";
import Bank from "./banka";

const FooterBottom = () => {
  const footerData = {
    kurumsal: {
      title: "Kurumsal",
      items: [
        "Hakkımızda",
        "İş Ortaklarımız",
        "Yatırımcı İlişkileri",
        "Müşteri Hizmetleri",
        "Kariyer",
        "Kişisel Verilerin Korunması",
        "Bilgi Güvenliği Politikası",
        "Güvenli Alışveriş Klavuzu",
        "İş Sağlığı ve Güvenliği Çevre Politikamız",
        "İletişim",
      ],
    },
    hepsiburada: {
      title: "Hepsiburada",
      items: [
        "Satıcı Olmak İstiyorum",
        "Hepsiplay İşyeri Olmak İstiyorum",
        "Tedarikçi Davranış Kuralları",
        "Girişimci Kadınlara Teknoloji Gücü",
        "Teslimat Noktası Olmak İstiyorum",
        "Ödeme Seçenekleri",
        "Banka Kampanyaları",
        "İşlem Rehberi",
      ],
    },
  };

  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "Youtube", icon: <FaYoutube /> },
    { name: "TikTok", icon: <FaTiktok /> },
    { name: "Facebook", icon: <FaFacebook /> },
    { name: "X", icon: <FaTwitter /> },
    { name: "LinkedIn", icon: <FaLinkedin /> },
    { name: "Pinterest", icon: <FaPinterest /> },
  ];

  const mobileApps = [
    {
      store: "APP STORE'dan",
      text: "İNDİREBİLİRSİNİZ",
      icon: <SiApple />,
    },
    {
      store: "GOOGLE PLAY'den",
      text: "İNDİREBİLİRSİNİZ",
      icon: <SiGoogleplay />,
    },
    {
      store: "APP GALLERY'den",
      text: "İNDİREBİLİRSİNİZ",
      icon: <SiHuawei />,
    },
  ];

  return (
    <>
      <footer className="bg-[#FFF2EA] pt-10 pb-6 px-4 -m-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Kurumsal and Hepsiburada sections */}
          <div className="absolute -top-10 -left-79 w-[1908px] h-[7px] flex">
            <div className="w-3/9 h-full bg-orange-500"></div>
            <div className="w-2/9 h-full bg-[#49C7ED]"></div>
            <div className="w-1/9 h-full bg-purple-500"></div>
            <div className="w-1/9 h-full bg-green-600"></div>
            <div className="w-2/9 h-full bg-[#5D196A]"></div>
          </div>
          <div className="col-span-1">
            <h3 className="text-orange-600 font-semibold mb-4">
              {footerData.kurumsal.title}
            </h3>
            <ul className="space-y-2">
              {footerData.kurumsal.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-orange-600 font-semibold mb-4">
              {footerData.hepsiburada.title}
            </h3>
            <ul className="space-y-2">
              {footerData.hepsiburada.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-span-1">
            <h3 className="text-orange-600 font-semibold mb-4">
              Bizi Takip Edin
            </h3>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#212121] text-white">
                    {social.icon}
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Apps Section */}
          <div className="col-span-1">
            <h3 className="text-orange-600 font-semibold mb-4">
              Mobil Uygulamalar
            </h3>
            <div className="space-y-3">
              {mobileApps.map((app) => (
                <div
                  key={app.store}
                  className="flex w-[200px] items-center space-x-2 border-2 rounded-md border-[#DADADA] p-2 "
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 flex-shrink-0 text-xl">
                      {app.icon}
                    </span>
                    <div className="text-xs">
                      <div>{app.store}</div>
                      <div>{app.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center space-x-4 mt-2 mr-9">
              <div>
                <h3 className="text-orange-600 font-semibold mt-5">
                  Aklınıza takılan bir soru mu var?
                </h3>
              </div>
              <div>
                <div className="mt-2">Çağrı Merkezimizi arayın</div>
                <div className="text-xl font-bold mt-2">5555 555 55 55</div>
              </div>
              {/* Help Section */}
              <div className="max-w-7xl mx-auto mt-8 ml-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center space-x-2 mt-4 md:mt-0">
                    <IoLogoWhatsapp size={19} color="green" />
                    <span>WhatsApp Destek</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t">
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Payment method logos would go here */}
          </div>
        </div>
        <Bank />
      </footer>
      <div className="min-w-[1909px] -ml-[16px] relative">
        <div className="bg-black w-full mt-5 p-5 -mb-[25px] border-t flex justify-center gap-60 items-center text-sm text-white">
          <div>
            © Copyright 1998 - 2024 D-MARKET Elektronik Hizmetler Tic. A.Ş. Her
            Hakkı Saklıdır.
            <a href="#" className="ml-2 text-[#B4D4FF]">
              Hepsiburada.com
            </a>
          </div>
          <div className="flex items-center space-x-4 ">
            <img src="/kaspi-logo.webp" alt="Kaspi.kz" className="h-12" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
