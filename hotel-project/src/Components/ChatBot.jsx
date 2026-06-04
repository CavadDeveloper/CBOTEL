import { useState } from "react";
import apiKey from "../Api/api";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      role: "bot",
      text: "Salam! Mən CBOTEL köməkçisiyəm. Otaqlar, qiymətlər, menyu, tədbirlər və rezervasiya haqqında sual verə bilərsiniz.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();

    if (message.trim() === "") return;

    const userMessage = message;

    setChat((prev) => [...prev, { role: "user", text: userMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `
Sən CBOTEL otelinin chatbotusan.
Sən otel, otaqlar, rezervasiya, təmizlik, restoran, menyu, spa, tədbirlər, əlaqə, qiymətlər, check-in/check-out, xidmətlər,menyu,menyudakı yeməklər və qonaq istəkləri haqqında cavab verə bilərsən.

CBOTEL məlumatları:
- Ünvan: Bakı şəhəri, Nizami küçəsi 125.
- Telefon: +994 50 203 55 57.
- Email: info@cbotel.az.
- Otel 2015-ci ildən fəaliyyət göstərir.
- Otaqlar: Deluxe Room, Luxury Suite, Family Room, Classic Room, Premium Room, Ocean View Room, Royal Suite, Modern Room.
- Qiymətlər: Deluxe 120 AZN, Luxury Suite 180 AZN, Family Room 150 AZN, Classic Room 100 AZN, Premium Room 200 AZN, Ocean View 250 AZN, Royal Suite 300 AZN, Modern Room 140 AZN.
- Otaqlar hər gün təmizlənir.
- Qonaq istəsə, otağın təmizliyini hər gün yox, müəyyən günlərdə istəyə bilər. Bunun üçün resepsiyaya məlumat verməlidir.
-Oteldə,otağda əşyalar itərsə oğurlanarsa rəhbərliyimiz cavabdehdir.
- Xidmətlər: restoran, spa, wellness, tədbirlər, canlı musiqi, romantik dinner, biznes görüşləri.
- Check-in saatı 14:00, check-out saatı 12:00.
- Rezervasiya üçün ad, email, telefon, qonaq sayı, giriş/çıxış tarixi və otaq növü lazımdır.
- Menyudakı yeməklər hər gün şeflərimiz tərəfindən hazırlanır və  müştərilərimizin önünə indi fırından çıxmış şəkildə gəlir.İnqredientlər yenidir köhnə məmulatlardan istifadə olunmur.Yeməklər öncədən hazırlanıb müştərilərimizin önünə qoyulmur.

Əgər sual otel, qonaqlama, otaq, xidmət, rezervasiya və ya CBOTEL ilə heç əlaqəli deyilsə, belə cavab ver:
"Bu barədə dəqiq məlumat sistemdə mövcud deyil. Zəhmət olmasa info@cbotel.az ünvanına email göndərin və ya +994 50 203 55 57 nömrəsi ilə əlaqə saxlayın."

Cavabları qısa, səliqəli və Azərbaycan dilində ver.
`
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
        }),
      });

      const data = await response.json();

      console.log("OpenAI cavabı:", data);

      if (data.error) {
        setChat((prev) => [
          ...prev,
          {
            role: "bot",
            text: `OpenAI xətası: ${data.error.message}`,
          },
        ]);
        setLoading(false);
        return;
      }

      const botReply =
        data.choices?.[0]?.message?.content ||
        "Bağışlayın, cavab ala bilmədim.";

      setChat((prev) => [...prev, { role: "bot", text: botReply }]);
    } catch (error) {
      console.log("Fetch xətası:", error);

      setChat((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Xəta baş verdi. İnternet bağlantısını və API key-i yoxla.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <section className="chatbot">
      <h1 className="chatbot-title">CBOTEL Chatbot</h1>

      <div className="chatbot-box">
        <div className="chat-messages">
          {chat.map((item, index) => (
            <div
              key={index}
              className={item.role === "user" ? "user-message" : "bot-message"}
            >
              {item.text}
            </div>
          ))}

          {loading && <div className="bot-message">Yazır...</div>}
        </div>

        <form className="chat-input-area" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Otel haqqında sualınızı yazın..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">Göndər</button>
        </form>
      </div>
    </section>
  );
}