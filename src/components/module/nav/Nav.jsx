import style from "components/module/nav/Nav.module.css";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

function Nav() {
  return (
    <div>
      <MobileMenu />
      {/* <DesktopMenu /> */}
    </div>
  );
}

export default Nav;
