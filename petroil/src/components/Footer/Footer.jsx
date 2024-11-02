import logoFooter from "../../assets/logo-footer.png";
import footerfb from "../../assets/Facebook-Footer.png";
import footertweet from "../../assets/Twitter-Footer.png";
import footerlinkidin from "../../assets/Linkedin-Footer.png";
import footerinsta from "../../assets/Instagram-Footer.png";
import footeriso from "../../assets/iso-footer.png";
import footerliquid from "../../assets/liquidGreen-footer.png";
import footerEmail from "../../assets/footerEmail.png";
import footerCalling from "../../assets/footerCalling.png";
import footerMap from "../../assets/footerMap.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#1F1F1F] pt-36 pb-44">
        <div className="max-w-[1140px] mx-auto flex justify-between text-white">
          <div className="flex gap-[145px] ">
            <div>
              <img src={logoFooter} alt="" />
              <div className="flex items-center gap-2 mt-8">
                <img src={footerEmail} alt="" />
                <p>mail@yourcompany.com</p>
              </div>
              <div className="flex items-center gap-2 my-4">
                <img src={footerCalling} alt="" />
                <p>+896 120 5889 (Toll free)</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={footerMap} alt="" />
                <p>101 Baker Street, New York, USA, 12345</p>
              </div>
              <div className="flex gap-3 mt-10">
                <img src={footerfb} alt="" />
                <img src={footertweet} alt="" />
                <img src={footerlinkidin} alt="" />
                <img src={footerinsta} alt="" />
              </div>
            </div>
            <div className="mt-8">
              <h2>Company</h2>
              <ul className="mt-5">
                <li className="mb-4">
                  <a href="">Home</a>
                </li>
                <li className="mb-4">
                  <a href="">About</a>
                </li>
                <li className="mb-4">
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Gallery</a>
                </li>
              </ul>
            </div>
          </div>
          {/* right side */}
          <div className="flex gap-12 justify-between">
            <div className="mt-8">
              <h2>Others</h2>
              <ul className="mt-5">
                <li className="mb-4">
                  <a href="">Blog</a>
                </li>
                <li className="mb-4">
                  <a href="">Contact</a>
                </li>
                <li className="mb-4">
                  <a href="">Terms & Conditions</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h2>Certificate</h2>
              <div className="flex gap-1 mt-5">
                <img src={footeriso} alt="" />
                <img src={footerliquid} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#282828] py-11">
        <div className="max-w-[1140px] mx-auto">
          <p className="text-[#6C6C6C]">
            © Copyright 2024 by Md. Saharior Ridoy – All right reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
