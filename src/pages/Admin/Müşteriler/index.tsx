import { useState } from "react";
import Navbar from "../navbar"; // Navbar'ı import ediyoruz

const Müşteriler = () => {
  // Müşteri verilerini state'te tutuyoruz
  const [customers, setCustomers] = useState([
    { id: 1, name: "Ahmet Yılmaz", email: "ahmet@örnek.com" },
    { id: 2, name: "Mehmet Can", email: "mehmet@örnek.com" },
    { id: 3, name: "Fatma Kaya", email: "fatma@örnek.com" },
    { id: 4, name: "Zeynep Demir", email: "zeynep@örnek.com" },
  ]);

  // Yeni müşteri eklemek için state
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "" });

  // Müşteri silme fonksiyonu
  const handleDelete = (id: number) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  // Yeni müşteri ekleme fonksiyonu
  const handleAddCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCustomer.name && newCustomer.email) {
      const newId =
        customers.length > 0 ? customers[customers.length - 1].id + 1 : 1;
      setCustomers([...customers, { id: newId, ...newCustomer }]);
      setNewCustomer({ name: "", email: "" }); // Formu temizle
    }
  };

  return (
    <div className="flex m-[0_200px_0_200px] bg-[#F3F4F7]">
      <Navbar />
      <div className="flex-1 p-6 m-[0_120px_0_120px]">
        <h2 className="text-2xl font-semibold text-center mb-6">Müşteriler</h2>

        {/* Yeni Müşteri Ekleme Formu */}
        <form
          onSubmit={handleAddCustomer}
          className="mb-6 bg-white p-6 rounded-lg shadow-md"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Adı"
              value={newCustomer.name}
              onChange={(e) =>
                setNewCustomer({ ...newCustomer, name: e.target.value })
              }
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="E-posta"
              value={newCustomer.email}
              onChange={(e) =>
                setNewCustomer({ ...newCustomer, email: e.target.value })
              }
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full"
          >
            Müşteri Ekle
          </button>
        </form>

        {/* Müşteri Tablosu */}
        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3">ID</th>
                <th className="p-3">Adı</th>
                <th className="p-3">E-posta</th>
                <th className="p-3">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-t border-gray-300">
                  <td className="p-3">{customer.id}</td>
                  <td className="p-3">{customer.name}</td>
                  <td className="p-3">{customer.email}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(customer.id)}
                      className=" bg-red-500 text-white p-1 w-28 -mr-200 rounded-md"
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Müşteriler;
