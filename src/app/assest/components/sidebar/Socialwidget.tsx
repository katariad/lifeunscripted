import React from "react";
import Widgettitle from "../../ui/Widgettitle";

export default function Socialwidget() {
  return (
    <div className="widget mt-8 min-h-[143px] ">
      <Widgettitle title="Social Plugin" />
      <div className="widget-content">
        <ul className="social-counter social social-color">
          <li className="facebook">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              title="facebook"
            ></a>
          </li>
          <li className="x-twitter">
            <a
              href="https://twitter.com/"
              target="_blank"
              title="x-twitter"
            ></a>
          </li>
          <li className="pinterest">
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              title="pinterest"
            ></a>
          </li>
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              title="linkedin"
            ></a>
          </li>
          <li className="instagram">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              title="instagram"
            ></a>
          </li>
          <li className="youtube">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              title="youtube"
            ></a>
          </li>
          <li className="whatsapp">
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              title="whatsapp"
            ></a>
          </li>
          <li className="skype">
            <a href="https://www.skype.com/" target="_blank" title="skype"></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
