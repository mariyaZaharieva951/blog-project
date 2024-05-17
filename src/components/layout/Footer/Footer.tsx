import Copyrights from "./Copyrights";
import NavBar from "./NavBar";
import Roooby from "./Roooby";

const Footer = () => {
    return (
        <>
        <div className="lg:w-[1140px] h-auto mx-auto flex lg:flex-row flex-col lg:justify-between font-custom-font items-start justify-center lg:gap-[150px] py-[100px]">
            <Roooby/>
            <NavBar/>
        </div>
        <Copyrights/>
        </>
    );
  };
  
  export default Footer;