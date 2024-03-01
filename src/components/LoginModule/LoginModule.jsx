import useToggle from "../../Hooks/useToggle";
import arrow from "../../assets/arrow_login-logo.svg";
import logo from "../../assets/login_logo.svg";
import cl from "./LoginModule.module.css";

function LoginModule() {
  const [active, toggleActive] = useToggle(false);

  return (
    <div className={cl.loginModule} onClick={toggleActive}>
      <div className={cl.loginModuleLogo}>
        <img className={cl.imgLogo} src={logo} alt="login_logo" />
      </div>
      <img className={!active && cl.activeArrow} src={arrow} alt="login_logo" />
      {active && (
        <div className={cl.loginListBlock}>
          <div className={cl.loginSquareIco}></div>
          <div className={cl.loginMenu}>
            <p className={cl.loginListItem}>Profile</p>
            <p className={cl.loginListItem}>Log Out</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginModule;
