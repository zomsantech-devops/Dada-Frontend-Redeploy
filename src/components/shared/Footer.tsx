import FBIcon from "../../assets/icons/facebook.webp";
import DiscordIcon from "../../assets/icons/discord.webp";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex gap-[20px] flex-col text-center mt-[40px] md:mt-[20px] pb-[20px] px-[20px]">
      <p>ช่องทางการติดต่อ</p>
      <div className="flex gap-[20px] justify-center">
        <Link target="_blank" to="https://www.facebook.com/dadafnth/">
          <img
            src={FBIcon}
            alt="facebook"
            className="w-[32px] opacity-50 hover:opacity-100"
          />
        </Link>
        <Link target="_blank" to="https://discord.com/invite/5t8Juy7FHu">
          <img
            src={DiscordIcon}
            alt="discord"
            className="w-[32px] opacity-50 hover:opacity-100"
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
