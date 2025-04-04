import { useState } from "react";
import Sidebar from "./sidebar";
import { getAuth } from "firebase/auth";
import { FaRegUser } from "react-icons/fa";

const MüşteriMesajlar = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [messages, setMessages] = useState<{
    [key: number]: Array<{ text: string; isMe: boolean }>;
  }>({
    1: [
      { text: "Merhaba!", isMe: false },
      { text: "Kargolarımız ücretsizdir", isMe: false },
      { text: "Bu harika", isMe: true },
    ],
    2: [{ text: "Hangi ürünle ilgileniyorsunuz?", isMe: false }],
    3: [],
  });
  const [newMessage, setNewMessage] = useState("");

  const users = [
    { id: 1, name: "Ahmet Yılmaz" },
    { id: 2, name: "Ayşe Kaya" },
    { id: 3, name: "Mehmet Demir" },
  ];

  const auth = getAuth();
  const currentUser = auth.currentUser;
  const myAvatar = currentUser?.photoURL || "https://via.placeholder.com/40";

  const handleSendMessage = () => {
    if (newMessage.trim() !== "" && selectedUser !== null) {
      setMessages({
        ...messages,
        [selectedUser]: [
          ...messages[selectedUser],
          { text: newMessage, isMe: true },
        ],
      });
      setNewMessage("");
    }
  };

  return (
    <div className="flex m-[0_200px_0_200px] bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Mesajlar</h1>

        {/* Mesajlaşma Bölümü */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="border-2 border-gray-300 rounded-lg h-[600px] flex">
            {/* Sol Taraf: Kişi Listesi */}
            <div className="w-1/3 border-r border-gray-300 p-4">
              <h2 className="text-xl font-semibold mb-4">Kişiler</h2>
              <div className="space-y-2">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className={`p-3 rounded-lg cursor-pointer flex items-center space-x-2 ${
                      selectedUser === user.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedUser(user.id)}
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                      <FaRegUser className="text-gray-600" />
                    </div>
                    <p>{user.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ Taraf: Mesajlaşma Alanı */}
            <div className="w-2/3 flex flex-col justify-between p-4">
              {selectedUser !== null ? (
                <>
                  {/* Mesajlar */}
                  <div className="overflow-y-auto space-y-4">
                    {messages[selectedUser].map((message, index) => (
                      <div
                        key={index}
                        className={`flex items-start space-x-2 ${
                          message.isMe ? "justify-end" : "justify-start"
                        }`}
                      >
                        {!message.isMe && (
                          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                            <FaRegUser className="text-gray-600" />
                          </div>
                        )}
                        <div
                          className={`p-3 rounded-lg max-w-[70%] ${
                            message.isMe
                              ? "bg-blue-500 text-white"
                              : "bg-gray-100"
                          }`}
                        >
                          <p>{message.text}</p>
                        </div>
                        {message.isMe && (
                          <img
                            src={myAvatar}
                            alt="Ben"
                            className="w-8 h-8 rounded-full"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Mesaj Gönderme Alanı */}
                  <div className="flex gap-2 mt-4">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded-md"
                      placeholder="Mesaj yazın..."
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      Gönder
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-gray-600 text-center">
                  Lütfen bir kişi seçin.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MüşteriMesajlar;
