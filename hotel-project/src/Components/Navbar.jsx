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
        <li>Home</li>
        <li>About</li>
        <li>Rooms</li>
        <li>Reservation</li>
        <li>Contact</li>
      </ul>

    </div>
  );
}