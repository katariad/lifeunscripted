import { MdFacebook } from "react-icons/md";
import Socialiconlist from "./socialiconlist";
import { FaBlogger, FaRedditAlien, FaXTwitter } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";

export default function topbarsociallist() {
  return (
    <div className="top-bar-social flex items-center ">
      <ul className="flex ">
        <Socialiconlist link="www.facebook.com/">
          <MdFacebook size={"1.5em"} aria-hidden="true" />
        </Socialiconlist>

        <Socialiconlist link="www.twitter.com/">
          <FaXTwitter size={"1.5em"} />
        </Socialiconlist>

        <Socialiconlist link="www.mediuem.com/">
          <FaMediumM size={"1.5em"} />
        </Socialiconlist>

        <Socialiconlist link="www.reddit.com/">
          <FaRedditAlien size={"1.5em"} />
        </Socialiconlist>

        <Socialiconlist link="www.blogger.com/">
          <FaBlogger size={"1.5em"} />
        </Socialiconlist>
      </ul>
    </div>
  );
}
