import Widgettitle from "../../ui/Widgettitle";
import Popularpostlist from "../../ui/Popularpostlist";
export default function Popularpost() {
  return (
    <div className="widget mt-8 min-h-[293px] ">
      <Widgettitle title="Popular Posts" />
      <Popularpostlist />
    </div>
  );
}
