import Widgettitle from "../../ui/Widgettitle";
import Popularpostlist from "../../ui/Popularpostlist";
export default function Popularpost() {
  return (
    <div className="widget mt-8">
      <Widgettitle title="Popular Posts" />
      <Popularpostlist />
    </div>
  );
}
