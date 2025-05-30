import Image from "next/image";
import Link from "next/link";
import React from "react";
import Datefunction from "@/app/assest/utils/Datefunction";

type props = {
  feautureimage: string;
  linkurl: string;
  title: string;
  dated: string;
};

export default function Singlepostlist({
  feautureimage,
  linkurl,
  title,
  dated,
}: props) {
  return (
    <div className="post mb-4 border-box h-16 md:wrap-break-word  ">
      <div className="post-content  overflow-hidden ">
        <Link className="post-image-link float-left mr-2.5 " href={linkurl}>
          <div className="w-[80px] h-[60px] relative overflow-hidden ">
            <Image
              width={80}
              height={60}
              alt="Flywheel Hosting Review: Is It Worth It for WordPress Users in 2025?"
              src={feautureimage}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                maxWidth: "100%",
                maxHeight: "100%",
                aspectRatio: "1/2",
              }}
            />
          </div>
        </Link>
        <div className="post-info overflow-hidden ">
          <h2 className="post-title mt-0!important text-xs  ">
            <Link href={`/${linkurl}`} className="text-sm!important">
              {title}
            </Link>
            <span className="post-date published text-xs">
              - {<Datefunction date={dated} />}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
