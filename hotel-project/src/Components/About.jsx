export default function About() {
  return (
    <section className="about">

      <h1 className="about-title">Haqqımızda</h1>

      <div className="about-container">

        <div className="about-left">
          <img
            src="./src/assets/images/room.jpg"
            alt="hotel room"
          />
        </div>

        <div className="about-right">

          <h2 className="about-header">
            Sizə unudulmaz
            istirahət təqdim edirik
          </h2>

          <p>
            CBOTEL olaraq 2015-ci ildən fəaliyyət göstəririk.
            Müştərilərimizə yüksək keyfiyyətli xidmət,
            rahatlıq və lüks təcrübə təqdim etməyi əsas məqsədimiz hesab edirik.
          </p>

          <p>
            Müasir dizaynlı otaqlarımız, peşəkar komandamız,
            gözəl mənzərələrimiz və premium xidmətlərimiz ilə
            hər qonağımızın özünü xüsusi hiss etməsini təmin edirik.
            İstər ailəvi istirahət, istər işgüzar səfər,
            istərsə də romantik tətil üçün CBOTEL sizin üçün ideal seçimdir.
          </p>

          <div className="about-cards">

            <div className="about-card">
              <h3>8+</h3>
              <span>İllik Təcrübə</span>
            </div>

            <div className="about-card">
              <h3>5000+</h3>
              <span>Məmnun Qonaq</span>
            </div>

            <div className="about-card">
              <h3>80+</h3>
              <span>Lüks Otaq</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}