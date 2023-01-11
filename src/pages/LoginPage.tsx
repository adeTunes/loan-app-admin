import Logo from "../components/LoginPage/assets/Group.png";
import signInPics from "../components/LoginPage/assets/pablo-sign-in.png";
import LoginForm from "../components/LoginPage/LoginForm";
import "../components/LoginPage/login.scss"

function LoginPage() {
  return (
    <div className="loginPageContainer">
      <div className="logoContainer">
        <img className="logo" src={Logo} alt="" />
      </div>
      <div className="mainItemContainer">
        <div className="heroContainer">
          <img className="hero" src={signInPics} alt="" />
        </div>
          <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
