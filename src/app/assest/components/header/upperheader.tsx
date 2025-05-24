import Topbarsociallist from "../../ui/topbarsociallist";
import Logo from "../../ui/logo";
import logo_url from "../../../../public/logo.webp";
import Upperheadermenu from "../../ui/upperheadermenu";

export default function upperheader() {
  return (
    <div className="flex justify-center align-middle mb-5 ">
      <section className="container">
        <div className=" flex items-center flex-col md:flex-row md:justify-between">
          {/* top  header menu */}
          <Upperheadermenu />

          {/* image logo */}

          <Logo logourl={logo_url} />

          {/* social sharing icon */}
          <Topbarsociallist />
        </div>
      </section>
    </div>
  );
}
