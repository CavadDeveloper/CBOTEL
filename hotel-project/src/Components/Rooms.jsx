import room1 from "../assets/images/Rooms/1.png";
import room2 from "../assets/images/Rooms/2.png";
import room3 from "../assets/images/Rooms/3.png";
import room4 from "../assets/images/Rooms/4.png";
import room5 from "../assets/images/Rooms/5.png";
import room6 from "../assets/images/Rooms/6.png";
import room7 from "../assets/images/Rooms/7.png";
import room8 from "../assets/images/Rooms/8.png";

export default function Rooms() {

  const rooms = [
    {
      image: room1,
      title: "Deluxe Room",
      price: "120 AZN / Gecə",
    },

    {
      image: room2,
      title: "Luxury Suite",
      price: "180 AZN / Gecə",
    },

    {
      image: room3,
      title: "Family Room",
      price: "150 AZN / Gecə",
    },

    {
      image: room4,
      title: "Classic Room",
      price: "100 AZN / Gecə",
    },

    {
      image: room5,
      title: "Premium Room",
      price: "200 AZN / Gecə",
    },

    {
      image: room6,
      title: "Ocean View Room",
      price: "250 AZN / Gecə",
    },

    {
      image: room7,
      title: "Royal Suite",
      price: "300 AZN / Gecə",
    },

    {
      image: room8,
      title: "Modern Room",
      price: "140 AZN / Gecə",
    },
  ];

  return (
    <section className="rooms">

      <h1 className="rooms-title">
        Otaqlarımız
      </h1>

      <div className="rooms-container">

        {rooms.map((room, index) => (

          <div className="room-card" key={index}>

            <img src={room.image} alt={room.title} />

            <div className="room-info">

              <h2>{room.title}</h2>

              <p>{room.price}</p>

              <button>Rezerv et</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}