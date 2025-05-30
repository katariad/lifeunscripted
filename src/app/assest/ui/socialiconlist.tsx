type props = {
  link: string;
  children: React.ReactNode;
};

export default function socialiconlist({ link, children }: props) {
  const normalizedLink = link.startsWith("http") ? link : `https://${link}`;

  return (
    <li className="float-left ml-1.5   ">
      <a
        href={normalizedLink}
        className="p-0 flex!important items-center  "
        target="_blank"
        aria-label={`visit our ` + link + " page"}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </li>
  );
}
