import { useState } from "react";

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

    alert("Rezervasiyanız uğurla göndərildi!");

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
  }

  return (
    <section className="reservation">
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
          <option value="Family Room">Family Room</option>
          <option value="Premium Room">Premium Room</option>
          <option value="Royal Suite">Royal Suite</option>
        </select>

        <textarea
          name="message"
          placeholder="Əlavə qeydiniz..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Rezervasiya et
        </button>
      </form>
    </section>
  );
}