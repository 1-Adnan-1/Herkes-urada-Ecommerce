import Header from "../Basket/Header";
import Giriş from "./giriş";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Colored Stripes */}
      <div className="h-[7px] w-full flex">
        <div className="w-[33.33%] bg-[#FF6000]"></div>
        <div className="w-[22.22%] bg-[#49C7ED]"></div>
        <div className="w-[11.11%] bg-purple-500"></div>
        <div className="w-[11.11%] bg-green-600"></div>
        <div className="w-[22.22%] bg-[#5D196A]"></div>
      </div>
      <Giriş />
    </div>
  );
}

export default App;
