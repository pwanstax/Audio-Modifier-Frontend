import "./NavBar.css";

const NavBar = (props: any) => {
  return (
    <nav
      className="navbar navbar-expand-sm"
      style={{ backgroundColor: "#2a4a55" }}
      id="navbar"
    >
      <ul className="navbar-nav">
        <li
          className={
            props.currentPage === "MAIN" ? "Navbar-item-current" : "Navbar-item"
          }
          id="navbar-main"
        >
          <a href="./">Main</a>
        </li>
        <li
          className={
            props.currentPage === "TUTORIAL"
              ? "Navbar-item-current"
              : "Navbar-item"
          }
          id="navbar-tutorial"
        >
          <a href="./tutorial">Tutorial</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
