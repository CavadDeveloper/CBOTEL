import { useState } from "react";

import birthday from "../assets/images/Event/birthday.jpg";
import businessmeet from "../assets/images/Event/businessmeet.jpg";
import livemusicnight from "../assets/images/Event/livemusicnight.jpg";
import romanticdinner from "../assets/images/Event/romanticdinner.jpg";
import spa from "../assets/images/Event/spa.jpg";

export default function Events() {

  const events = [

    {
      image: birthday,
      title: "Ad Günü Tədbiri",
      price: "250 AZN",
      text:
        "CBOTEL-də özəl ad günü tədbirləri təşkil edin. Premium dekorasiya, xüsusi menyu və canlı musiqi ilə unudulmaz gün yaşayın.",
    },

    {
      image: businessmeet,
      title: "Biznes Görüşləri",
      price: "400 AZN",
      text:
        "Müasir və rahat biznes zallarımız peşəkar görüşlər üçün ideal seçimdir. Yüksək sürətli internet və premium xidmət təqdim olunur.",
    },

    {
      image: livemusicnight,
      title: "Canlı Musiqi Gecəsi",
      price: "120 AZN",
      text:
        "Hər həftəsonu canlı musiqi proqramları ilə axşamınızı daha xüsusi edin. Rahat atmosfer və xüsusi içkilərlə istirahətin dadını çıxarın.",
    },

    {
      image: romanticdinner,
      title: "Romantik Dinner",
      price: "300 AZN",
      text:
        "Cütlüklər üçün xüsusi hazırlanmış romantik şam yeməyi. Möhtəşəm dekorasiya və premium menyu ilə unudulmaz axşam yaşayın.",
    },

    {
      image: spa,
      title: "Spa & Relax",
      price: "180 AZN",
      text:
        "Spa və masaj xidmətlərimiz ilə bədəninizi və zehninizi rahatladın. Premium wellness təcrübəsi sizi gözləyir.",
    },

  ];

  const [currentEvent, setCurrentEvent] = useState(0);

  const nextEvent = () => {

    setCurrentEvent(
      currentEvent === events.length - 1
        ? 0
        : currentEvent + 1
    );

  };

  const prevEvent = () => {

    setCurrentEvent(
      currentEvent === 0
        ? events.length - 1
        : currentEvent - 1
    );

  };

  return (
    <section className="events">

      <h1 className="events-title">
        Tədbirlər
      </h1>

      <div className="event-card">

        <img
          src={events[currentEvent].image}
          alt={events[currentEvent].title}
        />

        <div className="event-info">

          <h2>{events[currentEvent].title}</h2>

          <span>{events[currentEvent].price}</span>

          <p>{events[currentEvent].text}</p>

          <div className="event-buttons">

            <button onClick={prevEvent}>
              ←
            </button>

            <button onClick={nextEvent}>
              →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}