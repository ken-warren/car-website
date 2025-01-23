import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <a href="#home"></a>KEN<span>Motors</span>
      </div>
      <ul className="nav-menu">
        <li>
          <a href="#home"></a>Home
        </li>
        <li>
          <a href="#explore"></a>Explore
        </li>
        <li>
          <a href="#about"></a>About
        </li>
        <li className="nav-contact">
          <a href="#contact"></a>Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
