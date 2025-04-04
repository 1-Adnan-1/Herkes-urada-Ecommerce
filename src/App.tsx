import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";
import Ofter from "./pages/Ofter";
import ScrollToTop from "./components/button";
import Admin from "./pages/Admin";
import SatıcıGiriş from "./pages/Satıcı/giriş";
import SatıcıPanel from "./pages/Satıcı/satıcı-paneli";
import Gösterge from "./pages/Satıcı/satıcı-paneli/gösterge";
import SatıcıÜrünler from "./pages/Satıcı/satıcı-paneli/SatıcıÜrünler";
import Müşteriler from "./pages/Admin/Müşteriler";
import Satıcılar from "./pages/Admin/Satıcılar";
import Ürünler from "./pages/Admin/Ürünler";
import Protected from "./pages/Admin/protected";
import SatıcıKategoriler from "./pages/Satıcı/satıcı-paneli/satıcıKategoriler";
import SatıcıSiparişler from "./pages/Satıcı/satıcı-paneli/satıcıSiparişler";
import SatıcıMüşteriler from "./pages/Satıcı/satıcı-paneli/SatıcıMüşteriler";
import SatıcıKargolar from "./pages/Satıcı/satıcı-paneli/SatıcıKargolar";
import Müşteri from "./pages/müşteri";
import MüşteriPanel from "./pages/müşteri/MüşteriPanel";
import MüşteriKuponlar from "./pages/müşteri/MüşteriKuponlar";
import MüşteriFavoriler from "./pages/müşteri/MüşteriFavoriler";
import MüşteriMesajlar from "./pages/müşteri/MüşteriMesajlar";
import MüşteriMağazalar from "./pages/müşteri/MüşteriMağazalar";
import MüşteriSiparişler from "./pages/müşteri/MüşteriSiparişler";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/ofter" element={<Ofter />} />

        {/* Satıcı Panel Route'ları */}
        <Route path="/satıcı/giriş" element={<SatıcıGiriş />} />
        <Route path="/satıcı/panel" element={<SatıcıPanel />}>
          <Route index element={<Gösterge />} />
          <Route path="gösterge" element={<Gösterge />} />
          <Route path="ürünler" element={<SatıcıÜrünler />} />
          <Route path="kategoriler" element={<SatıcıKategoriler />} />
          <Route path="siparişler" element={<SatıcıSiparişler />} />
          <Route path="müşteriler" element={<SatıcıMüşteriler />} />
          <Route path="kargolar" element={<SatıcıKargolar />} />
        </Route>

        {/* Admin Panel Route'ları */}
        <Route element={<Protected />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/musteriler" element={<Müşteriler />} />
          <Route path="/admin/satıcılar" element={<Satıcılar />} />
          <Route path="/admin/ürünler" element={<Ürünler />} />
        </Route>

        {/* Müşteri Panel Route'ları */}
        <Route path="/giriş" element={<Müşteri />} />
        <Route path="/müşteri/panel" element={<MüşteriPanel />} />
        <Route path="/müşteri/kuponlar" element={<MüşteriKuponlar />} />
        <Route path="/müşteri/favoriler" element={<MüşteriFavoriler />} />
        <Route path="/müşteri/mesajlar" element={<MüşteriMesajlar />} />
        <Route path="/müşteri/mağazalar" element={<MüşteriMağazalar />} />
        <Route path="/müşteri/siparişler" element={<MüşteriSiparişler />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default App;
