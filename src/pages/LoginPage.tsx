import Logo from "../components/LoginPage/assets/Group.png";
import signInPics from "../components/LoginPage/assets/pablo-sign-in.png";
import LoginForm from "../components/LoginPage/LoginForm";
import "../components/LoginPage/login.scss"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function LoginPage() {
  return (
    <div className="loginPageContainer">
      <div className="logoContainer">
        <MyImage image={{alt: "", src: Logo, className:"logo"}}/>
        {/* <img className="logo" src={Logo} alt="" /> */}
      </div>
      <div className="mainItemContainer">
        <div className="heroContainer">
        <MyImage image={{alt: "", src: signInPics, className:"hero"}}/>
        </div>
          <LoginForm />
      </div>
    </div>
  );
}


const MyImage = ({ image }) => (
  <LazyLoadImage
    alt={image.alt}
    effect="blur"
    src={image.src}
    className={image.className}
    />
);

export default LoginPage;
