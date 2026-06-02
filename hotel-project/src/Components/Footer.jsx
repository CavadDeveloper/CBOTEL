import logo from "../assets/images/CBOTEL.png";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section footer-logo-section">
          <img
            src={logo}
            alt="CBOTEL"
            className="footer-logo"
          />

          <p>
            Rahatlıq, lüks və yüksək xidmət bir arada.
            CBOTEL sizə unudulmaz istirahət təcrübəsi təqdim edir.
          </p>
        </div>

        <div className="footer-section">
          <h3>Xidmətlərimiz</h3>

          <p>✔ Lüks Otaqlar</p>
          <p>✔ Restoran</p>
          <p>✔ Spa & Wellness</p>
          <p>✔ Tədbirlər</p>
        </div>

        <div className="footer-section">
          <h3>Əlaqə</h3>

          <p>📍 Bakı şəhəri, Nizami küçəsi 125</p>
          <p>📞 +994 50 203 55 57</p>
          <p>✉️ info@cbotel.az</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 CBOTEL. Bütün hüquqlar qorunur.</p>
      </div>

    </footer>
  );
}