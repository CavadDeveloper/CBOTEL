import logo from "../assets/images/CBOTEL.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img
        src={logo}
        alt="CBOTEL Logo"
        className="navbar-logo"
      />

      <ul className="nav-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#rooms">ROOMS</a></li>
        <li><a href="#reservation">RESERVATION</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  );
}