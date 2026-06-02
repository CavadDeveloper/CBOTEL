import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Reservation() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    guests: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const templateParams = {
      user_name: formData.fullname,
      email: formData.email,
      phone: formData.phone,
      guests: formData.guests,
      check_in: formData.checkIn,
      check_out: formData.checkOut,
      room_type: formData.roomType,
      message: formData.message,
    };

    emailjs
      .send(
        "service_zkjkgbm",
        "template_qfajqfi",
        templateParams,
        "4fcPACydw2mEfboxr"
      )
      .then(() => {
        alert("Rezervasiyanız uğurla göndərildi! Email təsdiqi göndərildi.");

        setFormData({
          fullname: "",
          email: "",
          phone: "",
          guests: "",
          checkIn: "",
          checkOut: "",
          roomType: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Email göndərilmədi. Zəhmət olmasa yenidən yoxlayın.");
      });
  }

  return (
    <section id="reservation" className="reservation">
      <h1 className="reservation-title">Rezervasiya et</h1>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="fullname"
            placeholder="Ad Soyad"
            value={formData.fullname}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email ünvanı"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="tel"
            name="phone"
            placeholder="Telefon nömrəsi"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="guests"
            placeholder="Qonaq sayı"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="date-group">
            <label>Giriş tarixi</label>

            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </div>

          <div className="date-group">
            <label>Çıxış tarixi</label>

            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          required
        >
          <option value="">Otaq növü seçin</option>
          <option value="Deluxe Room">Deluxe Room</option>
          <option value="Luxury Suite">Luxury Suite</option>
          <option value="Family Room">Family Room</option>
          <option value="Classic Room">Classic Room</option>
          <option value="Premium Room">Premium Room</option>
          <option value="Ocean View Room">Ocean View Room</option>
          <option value="Royal Suite">Royal Suite</option>
          <option value="Modern Room">Modern Room</option>
        </select>

        <textarea
          name="message"
          placeholder="Əlavə qeydiniz..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Rezervasiya et</button>
      </form>
    </section>
  );
}