import emailLogo from "../../assets/email.svg";
import phoneLogo from "../../assets/phone.png";
import fbHead from "../../assets/facebook-header.png";
import tweetHead from "../../assets/twitter-header.png";
import linkedHead from "../../assets/linkedin-header.png";
import instaHead from "../../assets/instagram-header.png";



export default function Header() {
  return (
    <div className="bg-[#282828] p-4">
      <div className="max-w-[1140px] mx-auto">
        {/* Header Content */}
        <div className="flex justify-between items-center text-white text-xs">
          <div className="md:flex gap-12">
            <div className="flex items-center gap-[5px] relative after:content-[''] after:bg-[#5C6A92] after:w-[2px] after:h-4 after:absolute after:top-1 after:right-[-24px]">
              <img className="w-5 h-5" src={emailLogo} alt="" />
              <p>mail@yourcompany.com</p>
            </div>
            <div className="flex gap-[5px] items-center">
              <img className="w-5 h-5" src={phoneLogo} alt="" />
              <p>+896 120 5889 (Toll free)</p>
            </div>
          </div>
          {/* Right Pars logo */}
          <div className="flex gap-5">
            <img className="w-4 h-4" src={fbHead} alt="" />
            <img className="w-4 h-4" src={tweetHead} alt="" />
            <img className="w-4 h-4" src={linkedHead} alt="" />
            <img className="w-4 h-4" src={instaHead} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
