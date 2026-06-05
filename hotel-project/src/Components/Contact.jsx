export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h1 className="contact-title">
        Bizimlə Əlaqə
      </h1>
      <p className="contact-subtitle">
        Suallarınız və təklifləriniz üçün bizimlə əlaqə saxlaya bilərsiniz.
      </p>
      <div className="contact-container">
        <div className="contact-info">

          <div className="contact-card">
            <h3>📍 Ünvan</h3>
            <p>Bakı şəhəri, Nizami küçəsi 125</p>
          </div>

          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=Baku&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          <div className="contact-card">
            <h3>📞 Telefon</h3>
            <p>+994 50 203 55 57</p>
          </div>

          <div className="contact-card">
            <h3>✉️ Email</h3>
            <p><a href="mailto:info@cbotel.az">info@cbotel.az</a></p>
          </div>

          <div className="contact-card">
            <h3>🕒 İş saatları</h3>
            <p>24/7 Xidmət</p>
          </div>

        </div>
        <form className="contact-form">

          <input
            type="text"
            placeholder="Adınız"
          />

          <input
            type="email"
            placeholder="Email ünvanınız"
          />

          <textarea
            placeholder="Mesajınızı yazın..."
          ></textarea>

          <button type="submit">
            Mesaj göndər
          </button>

        </form>

      </div>

    </section>
  );
}