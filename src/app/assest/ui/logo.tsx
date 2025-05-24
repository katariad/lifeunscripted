import Image, { StaticImageData } from "next/image";

type props = {
  logourl: StaticImageData;
};

export default function logo({ logourl }: props) {
  return (
    <div className="max-w-3xs object-contain justify-center align-middle   ">
      <Image
        src={logourl}
        alt="Life unscripted Logo"
        loading="eager"
        width={500}
        height={250}
        className="aspect-6/1"
        priority={true}
      />
    </div>
  );
}
