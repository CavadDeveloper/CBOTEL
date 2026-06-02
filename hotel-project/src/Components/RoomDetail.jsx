import { useParams, Link } from "react-router-dom";
import room1 from "../assets/images/Rooms/1.png";
import room2 from "../assets/images/Rooms/2.png";
import room3 from "../assets/images/Rooms/3.png";
import room4 from "../assets/images/Rooms/4.png";
import room5 from "../assets/images/Rooms/5.png";
import room6 from "../assets/images/Rooms/6.png";
import room7 from "../assets/images/Rooms/7.png";
import room8 from "../assets/images/Rooms/8.png";

export default function RoomDetail() {
  const { id } = useParams();

  const rooms = [
    {
      id: 1,
      image: room1,
      title: "Deluxe Room",
      price: "120 AZN / Gecə",
      text: "Deluxe Room rahat yataq, geniş otaq sahəsi və müasir dizayn ilə təchiz olunub. Bu otaq həm işgüzar səfərlər, həm də qısa istirahətlər üçün ideal seçimdir.",
    },
    {
      id: 2,
      image: room2,
      title: "Luxury Suite",
      price: "180 AZN / Gecə",
      text: "Luxury Suite premium rahatlıq və geniş məkan istəyən qonaqlar üçün hazırlanıb. Otaqda zövqlü interyer, komfortlu yataq və sakit atmosfer mövcuddur.",
    },
    {
      id: 3,
      image: room3,
      title: "Family Room",
      price: "150 AZN / Gecə",
      text: "Family Room ailəvi istirahət üçün geniş və rahat şərait yaradır. Otaq uşaqlı ailələr üçün uyğun planlama və rahat istifadə imkanı təqdim edir.",
    },
    {
      id: 4,
      image: room4,
      title: "Classic Room",
      price: "100 AZN / Gecə",
      text: "Classic Room sadə, rahat və sərfəli qalmaq istəyən qonaqlar üçün uyğundur. Otaq gündəlik ehtiyaclar üçün bütün əsas imkanlarla təmin olunub.",
    },
    {
      id: 5,
      image: room5,
      title: "Premium Room",
      price: "200 AZN / Gecə",
      text: "Premium Room yüksək keyfiyyətli xidmət və daha lüks atmosfer təqdim edir. Rahat dizaynı və sakit mühiti ilə uzunmüddətli qalmaq üçün ideal seçimdir.",
    },
    {
      id: 6,
      image: room6,
      title: "Ocean View Room",
      price: "250 AZN / Gecə",
      text: "Ocean View Room gözəl mənzərə sevən qonaqlar üçün hazırlanıb. Geniş pəncərələr, sakit atmosfer və premium rahatlıq bu otağı xüsusi edir.",
    },
    {
      id: 7,
      image: room7,
      title: "Royal Suite",
      price: "300 AZN / Gecə",
      text: "Royal Suite otelimizin ən lüks otaqlarından biridir. Geniş sahə, premium dizayn və yüksək səviyyəli rahatlıq istəyən qonaqlar üçün mükəmməl seçimdir.",
    },
    {
      id: 8,
      image: room8,
      title: "Modern Room",
      price: "140 AZN / Gecə",
      text: "Modern Room müasir dizaynı və rahatlığı ilə seçilir. Minimalist interyer və komfortlu şərait bu otağı həm turistlər, həm də işgüzar qonaqlar üçün uyğun edir.",
    },
  ];

  const room = rooms.find((item) => item.id === Number(id));

  return (
    <section className="room-detail">
      <div className="room-detail-content">
        <Link to="/" className="back-home">← Ana səhifəyə qayıt</Link>

        <h1>{room.title}</h1>

        <p className="room-detail-price">{room.price}</p>

        <p className="room-detail-text">{room.text}</p>

        <img src={room.image} alt={room.title} />

        <h2>Otaq imkanları</h2>

        <div className="room-features">
          <span>📶 Pulsuz Wi-Fi</span>
          <span>☕ Coffee</span>
          <span>🛁 Vanna otağı</span>
          <span>🅿 Parking</span>
          <span>🏊 Hovuz</span>
          <span>🍽 Səhər yeməyi</span>
        </div>

        <h2>Otel qaydaları</h2>

        <div className="hotel-rules">
          <p>✔ Check-in: 14:00</p>
          <p>✔ Check-out: 12:00</p>
          <p>✔ Siqaret çəkmək qadağandır</p>
          <p>✔ Ev heyvanlarına icazə verilmir</p>
        </div>
      </div>
    </section>
  );
}